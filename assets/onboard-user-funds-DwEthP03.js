import{d as t,j as e}from"./index-DFyFnBuw.js";const o={title:"Transak Integration - Onboarding User Funds with Credit Card On-Ramp",description:"Allow your users to easily purchase cryptocurrencies with their credit card through the Transak integration in your game."};function a(r){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"onboard-user-funds",children:["Onboard User Funds",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onboard-user-funds",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[`If you wish for your users to be able to pay for things in your game using cryptocurrencies, you'll find our Transak integration to be very helpful.
Transak allows users to purchase a variety of cryptocurrencies on a variety of blockchains using their credit card using a user friendly web interface. Learn more about Transak `,e.jsx(n.a,{href:"https://transak.com/",children:"here"}),"."]}),`
`,e.jsxs(n.h2,{id:"on-ramp-user-funds-via-credit-card",children:["On-Ramp User Funds via Credit Card",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-ramp-user-funds-via-credit-card",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"To generate a link for your user's Transak on-ramping:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Transak onRamp = new TransakOnRamp(userWalletAddress);
string onRampLink = onRamp.GetTransakLink(); // You'll notice via IntelliSense that there are a number of default values you can provide to help tailor your UX
`})}),`
`,e.jsxs(n.p,{children:["From here, you can open the ",e.jsx(n.code,{children:"onRampLink"})," via ",e.jsx(n.code,{children:"Application.OpenURL"})," or similar. Or, you can also use:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`Transak onRamp = new TransakOnRamp(userWalletAddress);
onRamp.OpenTransakLink(); // You'll notice via IntelliSense that there are a number of default values you can provide to help tailor your UX
`})}),`
`,e.jsxs(n.p,{children:["This will automatically call ",e.jsx(n.code,{children:"Application.OpenURL"})," on the generated Transak On-Ramp link."]}),`
`,e.jsxs(n.h2,{id:"check-supported-countries",children:["Check Supported Countries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#check-supported-countries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To check the countries supported by Transak (and learn about how they are supported), use the ",e.jsx(n.code,{children:"GetSupportedCountries"})," Task."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`try {
    SupportedCountry[] supportedCountries = await TransakOnRamp.GetSupportedCountries();
}
catch (Exception e) {
    Debug.LogError($"Encountered error fetching supported countries from Transak: {e.Message}");
}
`})})]})}function i(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{i as default,o as frontmatter};
