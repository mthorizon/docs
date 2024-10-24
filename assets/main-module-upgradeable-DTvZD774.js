import{d as i,j as e}from"./index-DxUkgJ2c.js";const l={title:"Upgradeable Main Module for Wallet Configuration Migration",description:"The Main Module Upgradeable is a key contract in the wallet system, allowing for seamless upgrades without changing the wallet address."};function n(a){const t={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"main-module-upgradeable--configuration-migration",children:["Main Module Upgradeable & configuration migration",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#main-module-upgradeable--configuration-migration",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:`The Main Module Upgradeable is the main contract that holds the logic for the wallet.
It is upgradeable, meaning that the logic can be changed without changing the address of the wallet.`}),`
`,e.jsxs(t.p,{children:["When the wallet is deployed, the ",e.jsx(t.code,{children:"MainModule"}),` is used as the initial code implementation.
This module uses the counterfactual address of the wallet to validate the `,e.jsx(t.code,{children:"imageHash"}),` of the wallet configuration.
When the wallet configuration is updated, the `,e.jsx(t.code,{children:"MainModule"})," will automatically replace the wallet code implementation with ",e.jsx(t.code,{children:"MainModuleUpgradeable"}),", while handling the storage initialization."]})]})}function d(a={}){const{wrapper:t}={...i(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(n,{...a})}):n(a)}export{d as default,l as frontmatter};
