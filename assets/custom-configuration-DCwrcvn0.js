import{d as l,j as s}from"./index-CaUurAf5.js";const a={title:"Customizing Sequence Kit with Configuration Options",description:"The Configuration section allows developers to customize the Sequence Kit by passing options to the KitProvider wrapper.",sidebar_label:"Configuration"};function i(n){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"custom-configuration-options",children:["Custom Configuration Options",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-configuration-options",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["Developers can customize the Sequence Kit experience by passing configuration options to the ",s.jsx(e.code,{children:"SequenceKit"})," wrapper."]}),`
`,s.jsx(e.p,{children:"Here's how you can configure the kit using these options:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" kitConfig"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		defaultTheme: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'light'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		position: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'top-left'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"		..."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  <"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"SequenceKit"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" config"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"{"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"kitConfig"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    <"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"App"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  <"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"SequenceKit"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]})]})}),`
`,s.jsxs(e.h2,{id:"configuration-overview",children:["Configuration Overview",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-overview",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The following is the available configuration customization options, or, ",s.jsx(e.a,{href:"/solutions/wallets/sequence-kit/custom-configuration#available-options",children:"see below for all the options in-depth"}),":"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"interface"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CreateConfigOptions"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  appName"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  projectAccessKey"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  chainIds"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[]"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  defaultChainId"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  disableAnalytics"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  defaultTheme"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Theme"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  position"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ModalPosition"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  signIn"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    logoUrl"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    projectName"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    useMock"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  displayedAssets"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Array"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<{"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    contractAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    chainId"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }>"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  ethAuth"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EthAuthSettings"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  isDev"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  wagmiConfig"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" WagmiConfig"}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // optional wagmiConfig overrides"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  waasConfigKey"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  enableConfirmationModal"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  walletConnect"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" false"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"        projectId"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  google"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" false"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"        clientId"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  apple"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" false"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"        clientId"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"        redirectURI"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"  email"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"        legacyEmailAuth"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsx(e.header,{children:s.jsxs(e.h1,{id:"available-options",children:["Available Options",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#available-options",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h2,{id:"sequence-app-development",children:["Sequence App Development",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-app-development",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"appname",children:[s.jsx(e.code,{children:"appName"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appname",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:"An internal software naming value that is not presented to the user."}),`
`,s.jsxs(e.h3,{id:"projectaccesskey",children:[s.jsx(e.code,{children:"projectAccessKey"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#projectaccesskey",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsxs(e.p,{children:["The project access key that is required, obtained from ",s.jsx(e.a,{href:"https://sequence.build",children:"Sequence Builder"})]}),`
`,s.jsxs(e.h3,{id:"ethauth-as-ethauthsettings",children:[s.jsx(e.code,{children:"ethAuth"})," as EthAuthSettings",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethauth-as-ethauthsettings",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /*app name*/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  app"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" string"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /** expiry number (in seconds) that is used for ETHAuth proof. Default is 1 week in seconds. */"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  expiry"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" number"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /** origin hint of the dapp's host opening the wallet. This value will automatically"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * be determined and verified for integrity, and can be omitted. */"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  origin"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" string"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /** nonce is an optional number to be passed as ETHAuth's nonce claim for replay protection. **/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  nonce"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"?:"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" number"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsxs(e.h3,{id:"waasconfigkey",children:[s.jsx(e.code,{children:"waasConfigKey"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waasconfigkey",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsxs(e.p,{children:["The Embedded Wallet configuration key required for WaaS wallets, configured within the ",s.jsx(e.a,{href:"https://sequence.build",children:"Sequence Builder"}),"."]}),`
`,s.jsxs(e.h2,{id:"network",children:["Network",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#network",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"chainids",children:[s.jsx(e.code,{children:"chainIds"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainids",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"number[]"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:"A list of chain Ids. e.g. [1, 137]"}),`
`,s.jsxs(e.h3,{id:"defaultchainid",children:[s.jsx(e.code,{children:"defaultChainId"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defaultchainid",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"number"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:"The chain Id that is first used for signatures and transactions."}),`
`,s.jsxs(e.h2,{id:"ui",children:["UI",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ui",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"User Interface based parameters that augment the modal interface."}),`
`,s.jsxs(e.h3,{id:"sign-in-modal-configuration-signin",children:["Sign In Modal Configuration (",s.jsx(e.code,{children:"signIn"}),")",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sign-in-modal-configuration-signin",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"signIn"})," object is used to configure the sign in modal."]}),`
`,s.jsxs(e.h4,{id:"signinlogourl",children:[s.jsx(e.code,{children:"signIn.logoUrl"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signinlogourl",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx("div",{children:s.jsx("img",{src:"/img/kit/sign-in-modal-with-logo.png",alt:"Enable a dark theme to Sequence Kit"})}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:"URL of the logo to be shown in the sign in modal."}),`
`,s.jsxs(e.h4,{id:"signinprojectname",children:[s.jsx(e.code,{children:"signIn.projectName"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signinprojectname",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx("div",{children:s.jsx("img",{src:"/img/kit/sign-in-modal-project-name.png",alt:"Add a project name to Sequence Kit"})}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:"Name of the project to be shown in the sign in modal."}),`
`,s.jsxs(e.h4,{id:"signinusemock",children:[s.jsx(e.code,{children:"signIn.useMock"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signinusemock",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"boolean"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsxs(e.p,{children:["Removes the ability to make live blockchain requests if set to ",s.jsx(e.code,{children:"true"})," by using the ",s.jsx(e.a,{href:"https://wagmi.sh/core/api/connectors/mock#mock",children:"wagmi mock connector"})]}),`
`,s.jsxs(e.h3,{id:"position",children:[s.jsx(e.code,{children:"position"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#position",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string"}),s.jsx(e.td,{children:"center"})]})})]}),`
`,s.jsx(e.p,{children:"The position parameter determines the location of the various modals on the screen. Possible values include:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"center"}),`
`,s.jsx(e.li,{children:"middle-right"}),`
`,s.jsx(e.li,{children:"middle-left"}),`
`,s.jsx(e.li,{children:"top-center"}),`
`,s.jsx(e.li,{children:"top-right"}),`
`,s.jsx(e.li,{children:"top-left"}),`
`,s.jsx(e.li,{children:"bottom-center"}),`
`,s.jsx(e.li,{children:"bottom-right"}),`
`,s.jsx(e.li,{children:"bottom-left"}),`
`]}),`
`,s.jsxs(e.h3,{id:"defaulttheme",children:[s.jsx(e.code,{children:"defaultTheme"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defaulttheme",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"string or object"}),s.jsx(e.td,{children:"dark"})]})})]}),`
`,s.jsx(e.p,{children:"The defaultTheme determines the color palette used for styling the modal. Possible values include:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"'light'"}),`
`,s.jsx(e.li,{children:"'dark'"}),`
`,s.jsx(e.li,{children:"object"}),`
`]}),`
`,s.jsxs(e.p,{children:["Specific colors can be overwritten by passing a theme override object. The ",s.jsx(e.a,{href:"https://sequence.build/",children:"Sequence Builder"})," provides a useful playground for toying with the colors in Sequence Kit."]}),`
`,s.jsxs(e.h2,{id:"wallet",children:["Wallet",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Parameters that entail wallet configuration options"}),`
`,s.jsxs(e.h3,{id:"disableanalytics",children:[s.jsx(e.code,{children:"disableAnalytics"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#disableanalytics",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"boolean"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsxs(e.p,{children:["Turning on and off the analytics feature that is connected to your ",s.jsx(e.a,{href:"http://sequence.build",children:"Sequence Builder"})," project."]}),`
`,s.jsxs(e.h3,{id:"displayedassets",children:[s.jsx(e.code,{children:"displayedAssets"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#displayedassets",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"[{ contractAddress: string, chainId: number }, ...]"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:`If provided, this will determine which assets are to be displayed in the in-game wallet modal main view.
By passing a list of displayed assets, only assets from the provided list will be displayed in the main view.
In the case that no assets are provided, all owned assets can be displayed in the main view.`}),`
`,s.jsxs(e.h3,{id:"enableconfirmationmodal",children:[s.jsx(e.code,{children:"enableConfirmationModal"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enableconfirmationmodal",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"boolean"}),s.jsx(e.td,{children:"undefined"})]})})]}),`
`,s.jsx(e.p,{children:"Enable confirmations for when sending transaction"}),`
`,s.jsxs(e.h2,{id:"sign-in-providers",children:["Sign in providers",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sign-in-providers",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"The various sign in providers that create wallet connections for the user:"}),`
`,s.jsxs(e.h3,{id:"walletconnect",children:[s.jsx(e.code,{children:"walletConnect"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#walletconnect",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsxs(e.td,{children:[s.jsx(e.code,{children:"false"})," | ",s.jsx(e.code,{children:"{ projectId: string }"})]}),s.jsx(e.td,{children:s.jsx(e.code,{children:"undefined"})})]})})]}),`
`,s.jsxs(e.h3,{id:"google",children:[s.jsx(e.code,{children:"google"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#google",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsxs(e.td,{children:[s.jsx(e.code,{children:"false"})," | ",s.jsx(e.code,{children:"{ clientId: string }"})]}),s.jsx(e.td,{children:s.jsx(e.code,{children:"undefined"})})]})})]}),`
`,s.jsxs(e.h3,{id:"apple",children:[s.jsx(e.code,{children:"apple"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apple",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsxs(e.td,{children:[s.jsx(e.code,{children:"false"})," | ",s.jsx(e.code,{children:"{ clientId: string, redirectURI: string }"})]}),s.jsx(e.td,{children:s.jsx(e.code,{children:"undefined"})})]})})]}),`
`,s.jsxs(e.h3,{id:"email",children:[s.jsx(e.code,{children:"email"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#email",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsxs(e.td,{children:[s.jsx(e.code,{children:"boolean"})," | ",s.jsx(e.code,{children:"{ legacyEmailAuth: boolean }"})]}),s.jsx(e.td,{children:s.jsx(e.code,{children:"undefined"})})]})})]}),`
`,s.jsx(e.header,{children:s.jsxs(e.h1,{id:"create-universal-default-connectors",children:["Create Universal Default Connectors",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-universal-default-connectors",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["While we generally recommed using Embedded Wallets with SequenceKit, as an alternative, you can also use leverage our Universal Wallet configuration. When creating a wagmi ",s.jsx(e.code,{children:"connectors"})," variable, import the ",s.jsx(e.code,{children:"getDefaultConnectors"})," function from the ",s.jsx(e.code,{children:"@0xsequence/kit"})," package, and include a Wallet Connect ID obtained from ",s.jsx(e.a,{href:"https://cloud.walletconnect.com/app",children:"here"}),", a default chain ID, app name, and the ",s.jsx(e.code,{children:"projectAccessKey"}),", then ",s.jsx(e.a,{href:"/solutions/wallets/sequence-kit/getting-started#create-wagmi-config",children:"continue with the integration from the quickstart"}),"."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"config.ts","data-lang":"typescript",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { getDefaultConnectors } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/kit'"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" projectAccessKey"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '<access-key>'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" connectors"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" getDefaultConnectors"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  walletConnectProjectId: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'wallet-connect-id'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  defaultChainId: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  appName: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'demo app'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  projectAccessKey"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" config"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createConfig"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  transports,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  connectors,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chains"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})})]})}function d(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{d as default,a as frontmatter};
