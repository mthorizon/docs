import{d as n,j as s}from"./index-DZp8SKDe.js";const l={title:"Transak Integration - Onboarding User Funds with Credit Card On-Ramp",description:"Allow your users to easily purchase cryptocurrencies with their credit card through the Transak integration in your game."};function i(r){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",...n(),...r.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"onboard-user-funds",children:["Onboard User Funds",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onboard-user-funds",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:[`If you wish for your users to be able to pay for things in your game using cryptocurrencies, you'll find our Transak integration to be very helpful.
Transak allows users to purchase a variety of cryptocurrencies on a variety of blockchains using their credit card using a user friendly web interface. Learn more about Transak `,s.jsx(e.a,{href:"https://transak.com/",children:"here"}),"."]}),`
`,s.jsxs(e.h2,{id:"on-ramp-user-funds-via-credit-card",children:["On-Ramp User Funds via Credit Card",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-ramp-user-funds-via-credit-card",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"To generate a link for your user's Transak on-ramping:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Transak"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" onRamp"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" TransakOnRamp"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(userWalletAddress);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" onRampLink"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" onRamp."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTransakLink"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// You'll notice via IntelliSense that there are a number of default values you can provide to help tailor your UX"})]})]})}),`
`,s.jsxs(e.p,{children:["From here, you can open the ",s.jsx(e.code,{children:"onRampLink"})," via ",s.jsx(e.code,{children:"Application.OpenURL"})," or similar. Or, you can also use:"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Transak"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" onRamp"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" TransakOnRamp"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(userWalletAddress);"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"onRamp."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"OpenTransakLink"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(); "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// You'll notice via IntelliSense that there are a number of default values you can provide to help tailor your UX"})]})]})}),`
`,s.jsxs(e.p,{children:["This will automatically call ",s.jsx(e.code,{children:"Application.OpenURL"})," on the generated Transak On-Ramp link."]}),`
`,s.jsxs(e.h2,{id:"check-supported-countries",children:["Check Supported Countries",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#check-supported-countries",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To check the countries supported by Transak (and learn about how they are supported), use the ",s.jsx(e.code,{children:"GetSupportedCountries"})," Task."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"    SupportedCountry"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[] "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"supportedCountries"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" TransakOnRamp."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetSupportedCountries"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Exception"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" e"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Debug."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"LogError"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'$"Encountered error fetching supported countries from Transak: {'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"e"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Message"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'}"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})]})}function o(r={}){const{wrapper:e}={...n(),...r.components};return e?s.jsx(e,{...r,children:s.jsx(i,{...r})}):i(r)}export{o as default,l as frontmatter};
