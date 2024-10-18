import{d as l,j as s}from"./index-Daxqvjsd.js";const a={title:"OnRamp",description:"undefined"};function i(e){const r={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(r.header,{children:s.jsxs(r.h1,{id:"onramp",children:["OnRamp",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onramp",children:s.jsx(r.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(r.p,{children:[`If you wish for your users to be able to pay for things in your game using cryptocurrencies, you'll find our Transak integration to be very helpful.
Transak allows users to purchase a variety of cryptocurrencies on a variety of blockchains using their credit card using a user friendly web interface. Learn more about Transak `,s.jsx(r.a,{href:"https://transak.com/",children:"here"}),"."]}),`
`,s.jsxs(r.h2,{id:"on-ramp-user-funds-via-credit-card",children:["On-Ramp User Funds via Credit Card",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-ramp-user-funds-via-credit-card",children:s.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(r.p,{children:"To generate a link for your user's Transak on-ramping:"}),`
`,s.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(r.code,{children:[s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"UTransakOnRamp"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Transak "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UTransakOnRamp"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"::"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Init"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"UserWalletAddress"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FString OnRampLink "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Transak->"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetTransakLink"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"USD"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"100"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"BTC"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"network1,network2"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// You can tailor the user experience by providing different default values for the parameters."})})]})}),`
`,s.jsxs(r.p,{children:["From here, you can open the OnRampLink using ",s.jsx(r.code,{children:"FPlatformProcess::LaunchURL"}),". Alternatively, you can use:"]}),`
`,s.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(r.code,{children:[s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"UTransakOnRamp"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Transak "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UTransakOnRamp"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"::"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Init"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"UserWalletAddress"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Transak->"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"OpenTransakLink"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"USD"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"100"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"BTC"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"network1,network2"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// This will automatically open the generated Transak On-Ramp link in the default web browser."})})]})}),`
`,s.jsxs(r.h2,{id:"check-supported-countries",children:["Check Supported Countries",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#check-supported-countries",children:s.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(r.p,{children:["To check the countries supported by Transak and learn about how they are supported, use the ",s.jsx(r.code,{children:"GetSupportedCountries"})," method."]}),`
`,s.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(r.code,{children:[s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Transak->"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetSupportedCountries"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    []("}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TArray"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FSupportedCountry"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> "}),s.jsx(r.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"SupportedCountries"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Handle the supported countries, e.g., log their names"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        for"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" FSupportedCountry"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Country : SupportedCountries) {"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"            UE_LOG"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(LogTemp, Log, "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TEXT"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Country: '}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"%s"}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Country.CountryName);"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    []("}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FSequenceError"}),s.jsx(r.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Error"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Handle any errors that occur"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        UE_LOG"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(LogTemp, Error, "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TEXT"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Encountered error fetching supported countries from Transak: '}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"%s"}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Error.ErrorMessage);"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,s.jsxs(r.h2,{id:"using-transak-from-usequencewallet",children:["Using Transak from USequenceWallet",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-transak-from-usequencewallet",children:s.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(r.p,{children:["You can also access the Transak functionalities straight from ",s.jsx(r.code,{children:"USequenceWallet"}),":"]}),`
`,s.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(r.code,{children:[s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" TOptional"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"USequenceWallet"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*>"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WalletOptional "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" USequenceWallet"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"::"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Get"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (WalletOptional."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"IsSet"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&&"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WalletOptional."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetValue"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"())"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	USequenceWallet"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Wallet "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WalletOptional."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetValue"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Wallet->"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"GetSupportedTransakCountries"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    []("}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TArray"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FSupportedCountry"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> "}),s.jsx(r.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"SupportedCountries"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Handle the supported countries, e.g., log their names"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        for"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" FSupportedCountry"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Country : SupportedCountries) {"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"            UE_LOG"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(LogTemp, Log, "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TEXT"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Country: '}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"%s"}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Country.CountryName);"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    []("}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"FSequenceError"}),s.jsx(r.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Error"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Handle any errors that occur"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        UE_LOG"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(LogTemp, Error, "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"TEXT"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Encountered error fetching supported countries from Transak: '}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"%s"}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Error.ErrorMessage);"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    );"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Open the Transak link in the default browser"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Wallet->"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"OpenTransakLink"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"USD"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"100"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"BTC"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"network1,network2"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})})]})}function c(e={}){const{wrapper:r}={...l(),...e.components};return r?s.jsx(r,{...e,children:s.jsx(i,{...e})}):i(e)}export{c as default,a as frontmatter};
