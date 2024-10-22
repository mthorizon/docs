import{d as n,j as s}from"./index-C81m1MD-.js";const a={title:"Easy On-Ramp Integration for Fiat to Crypto with Credit Card Using Checkout Modal",description:"The checkout on-ramp modal in Sequence Kit allows developers to easily onboard users with fiat currency into cryptocurrency using a credit card."};function r(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...n(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"on-ramp-overview",children:["On-ramp Overview",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-ramp-overview",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(e.p,{children:"The checkout on-ramp modal enables developers to easily facilitate on-ramp via fiat currency into a cryptocurrency. With this integration, one can use a credit card to purchase tokens across many different networks."}),`
`,s.jsx("div",{class:"text--center",children:s.jsx("img",{src:"/img/kit/kit-on-ramp.png",alt:"Enable the on-ramp modal in Sequence Kit to onboard users using fiat currencies with a credit or debit card"})}),`
`,s.jsxs(e.h2,{id:"integration",children:["Integration",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"To integrate the on-ramp feature, follow these steps:"}),`
`,s.jsxs(e.div,{"data-vocs-steps":"true",children:[s.jsxs(e.div,{"data-depth":"3",children:[s.jsxs(e.h3,{id:"1-install-the-kit-checkout-module",children:["1. Install the ",s.jsx(e.code,{children:"kit-checkout"})," Module:",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-install-the-kit-checkout-module",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/kit-checkout"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# or"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/kit-checkout"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# or"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @0xsequence/kit-checkout"})]})]})})]}),s.jsxs(e.div,{"data-depth":"3",children:[s.jsxs(e.h3,{id:"2-place-the-kitcheckoutprovider-below-the-sequence-kit-core-provider-in-your-app",children:["2. Place the ",s.jsx(e.code,{children:"KitCheckoutProvider"})," Below the Sequence Kit Core Provider in your App:",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-place-the-kitcheckoutprovider-below-the-sequence-kit-core-provider-in-your-app",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { KitCheckoutProvider } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/kit-checkout'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" App"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    <"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"SequenceKit"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" config"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"{"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"config"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      <"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"KitCheckoutProvider"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        <"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"Page"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      </"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"KitCheckoutProvider"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    </"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"SequenceKit"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  )"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})]}),s.jsxs(e.div,{"data-depth":"3",children:[s.jsxs(e.h3,{id:"3-adding-funds-with-a-credit-card",children:["3. Adding Funds with a Credit Card",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-adding-funds-with-a-credit-card",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),s.jsxs(e.p,{children:["Call the ",s.jsx(e.code,{children:"triggerAddFunds"})," function to cause a modal to appear"]}),s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { useAddFundsModal } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/kit-checkout'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" MyComponent"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    const"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { "}),s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"triggerAddFunds"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"toggleAddFunds"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" useAddFundsModal"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    const"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" onClick"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"      toggleAddFunds"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        walletAddress: recipientAddress,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      })"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"button"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" onClick"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"{"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"onClick"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">Add Funds</"}),s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"button"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})})]})})]})]})]})}function d(i={}){const{wrapper:e}={...n(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(r,{...i})}):r(i)}export{d as default,a as frontmatter};
