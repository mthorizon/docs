import{d as r,j as e,e as a}from"./index-C9_G5bvZ.js";/* empty css                                */const d={title:"Managing Tokens in Sequence - How to Add and Verify Tokens in the Token Directory",description:"The Token Directory by Sequence is an open resource on GitHub used to filter spam from verified tokens. Users can manually add new tokens to be visible in wallets and infrastructure by updating wallet settings or the token directory."};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"token-directory",children:["Token Directory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-directory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Sequence maintains an open ",e.jsx(n.a,{href:"https://github.com/0xsequence/token-directory/",children:"token directory on github"}),", that allows Sequence infrastructure to filter spam from verified tokens."]}),`
`,e.jsxs(n.p,{children:["While the infrastructure also watches sources like ",e.jsx(n.a,{href:"https://www.coingecko.com/",children:"CoinGecko"})," and ",e.jsx(n.a,{href:"https://opensea.com",children:"OpenSea"})," for verified contracts, all new tokens that are to be used - not verified from these sources - must be maintained manually."]}),`
`,e.jsx(n.p,{children:"When tokens are added to various blockchains, the default is for these tokens to not be included in the default wallet settings."}),`
`,e.jsx(n.p,{children:"Allowing these tokens to be seen by the wallet and infrastructure (even for testnets) can be done with one of the following steps:"}),`
`,e.jsxs(n.h2,{id:"how-to-make-tokens-appear-in-stack",children:["How to make tokens appear in stack",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-make-tokens-appear-in-stack",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/support/token-directory#1-update-wallet-settings",children:"Update Wallet Settings"})," (For Single Wallet): One can update their wallet settings and make a token appear only for a single wallet"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/support/token-directory#2-update-token-directory",children:"Update Token Directory"})," (For All Wallets & Indexer): One can update the token directory to make a token appear for all wallets and Indexer infrastructure"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"1-update-wallet-settings",children:["1. Update Wallet Settings",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-update-wallet-settings",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Navigate to ",e.jsx(n.a,{href:"https://sequence.app/settings/general",children:"Settings > General"})," and untoggle ",e.jsx(n.code,{children:"Hide Unverified Tokens"}),"."]}),`
`,e.jsx(a,{type:"warning",children:e.jsxs(n.p,{children:["Note ",e.jsx("br",{}),`
This can be useful for testing and immediate token appearance`]})}),`
`,e.jsxs(n.h3,{id:"2-update-token-directory-recommended",children:["2. Update Token Directory (Recommended)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-update-token-directory-recommended",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Create a pull request in the ",e.jsx(n.a,{href:"https://github.com/0xsequence/token-directory/tree/master/index",children:"token directory on github"})," updating the ",e.jsx(n.code,{children:"index"})," folder for the specified network and token type and append to the ",e.jsx(n.code,{children:"tokens"})," array, with updated fields for the specified token:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`{
      "chainId": <chain_id>,
      "address": "<address>",
      "name": "<name>",
      "type": "<type>,
      "symbol": "<SYMBOL>",
      "deployed": true,
      "logoURI": "<logo_uri_thumbnail>"
      "extensions": {
        "link": <token_homepage_url_link>,
        "description": <description>,
        "ogImage": "<og_image_banner>",
        "originChainId": <origin_chain_id>,
        "originAddress": <origin_address>
      }
}
`})}),`
`,e.jsxs(n.h3,{id:"logouri-vs-ogimage",children:[e.jsx(n.code,{children:"logoURI"})," vs ",e.jsx(n.code,{children:"ogImage"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#logouri-vs-ogimage",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"When adding images to describe your token, there are 2 possible options for accomplishing this."}),`
`,e.jsxs(n.p,{children:["The first is the ",e.jsx(n.code,{children:"logoURI"})," of size 40x40px which represents the rendered thumbnail beside a token in your wallet list"]}),`
`,e.jsxs(n.p,{children:["The second is the ",e.jsx(n.code,{children:"ogImage"})," of size 1200x640px which represents the rendered banner at the top of a token page when viewing in the wallet."]}),`
`,e.jsxs(n.h3,{id:"in-wallet",children:["In Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#in-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/metadata/verified_token_logoURI.png",alt:"Verified Token Metadata"})}),`
`,e.jsxs(n.h3,{id:"for-a-token",children:["For a Token",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-a-token",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/metadata/verified_token_metadata.png",alt:"Verified Token Metadata"})})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default,d as frontmatter};
