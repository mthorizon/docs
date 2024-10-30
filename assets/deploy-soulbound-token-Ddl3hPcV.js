import{d as o,j as e,e as i}from"./index-B7cEzOlw.js";/* empty css                                */const d={title:"Deploying Soulbound Token Contracts in Sequence Builder",description:"Learn how to deploy Soulbound Token contracts in Sequence Builder for non-transferable, exclusive game assets. This guide covers setup, key steps, and best practices for deploying non-tradable NFTs."};function s(n){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"how-to-deploy-a-soulbound-token-contract-in-sequence-builder",children:["How to Deploy a Soulbound Token Contract in Sequence Builder",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-deploy-a-soulbound-token-contract-in-sequence-builder",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Discover how to set up and deploy Soulbound Token contracts in Sequence Builder. Soulbound Tokens are perfect for creating unique, non-transferable game assets, including Battlepasses, memberships, and exclusive in-game items that stay permanently with the player."}),`
`,e.jsxs(t.h2,{id:"overview-of-soulbound-tokens",children:["Overview of Soulbound Tokens",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-of-soulbound-tokens",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Soulbound Tokens (SBTs) are non-transferable, non-sellable on-chain assets designed to provide exclusive, enduring value in Web3 environments. Since they cannot be transferred or traded, SBTs are ideal for representing permanent, achievement-based, or membership-related digital items. Here are some common use cases:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Game Passes and Memberships"}),": Use Soulbound Tokens for Battlepasses, memberships, or loyalty programs that stay permanently in a user’s wallet, ensuring exclusive access for the intended holder."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Achievement Badges"}),": Reward players with unique achievement badges that serve as a testament to their progress and accomplishments, visible to all but non-tradable."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Event Tickets and Certifications"}),": Provide secure, non-transferable tickets for exclusive in-game events or educational certifications for skills achieved within a game environment."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Identity and Reputation Systems"}),": Establish identity-based or reputation-based tokens that signify trust or credibility, supporting fair-play and user engagement."]}),`
`]}),`
`,e.jsx(t.p,{children:"Soulbound Tokens are especially beneficial for game developers and communities aiming to provide lasting value without the need for speculative trading."}),`
`,e.jsxs(i,{type:"warning",children:[e.jsx(t.p,{children:"Prerequisite: Create a Project"}),e.jsxs(t.p,{children:["This guide assumes that you have already ",e.jsx(t.a,{href:"/solutions/builder/getting-started",children:"signed up for Builder and created a Project"}),"."]})]}),`
`,e.jsxs(t.h2,{id:"step-1-navigate-to-contracts",children:["Step 1: Navigate to contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-navigate-to-contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Start by selecting your ",e.jsx(t.code,{children:"project"})," in the top left corner for which you want to create the collectible, then go to the ",e.jsx(t.code,{children:"Deploy"})," section, select ",e.jsx(t.code,{children:"Contracts"}),", and select the ",e.jsx(t.code,{children:"Contracts"})," button to add a new contract."]}),`
`,e.jsxs(t.h2,{id:"step-2-choose-your-collectible-type",children:["Step 2: Choose your collectible type",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-choose-your-collectible-type",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Select either Web3 Game Item Collection (ERC1155) or NFT Collection (ERC721) for your Soulbound Token. For this guide, we'll walk through a Web3 Game Item Collection (ERC1155), ideal for creating non-transferable Soulbound Tokens."}),`
`,e.jsxs(t.h2,{id:"step-3-specify-contract-details",children:["Step 3: Specify contract details",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-specify-contract-details",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Provide details for the contract by specifying a ",e.jsx(t.code,{children:"Contract Name"})," and ",e.jsx(t.code,{children:"Owner"}),". You also have the option to set Royalties. Ensure that the Owner address matches the Sequence Wallet in the top-right corner, with adequate funds in this wallet on mainnet. For testnet transactions, we sponsor them for you."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/deploy_game_item.png",alt:"deploy game item"})}),`
`,e.jsx(i,{type:"danger",children:e.jsxs(t.p,{children:[`Note:
Changing the `,e.jsx(t.code,{children:"name"})," later will update it across the Sequence stack, but popular explorers will not reindex the information. Your initial entry will remain in these systems."]})}),`
`,e.jsxs(t.h2,{id:"step-4-deploy-your-contract",children:["Step 4: Deploy your contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-4-deploy-your-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Deploy your contract via the popup window at ",e.jsx(t.a,{href:"http://sequence.app/sign-transaction",children:"http://sequence.app/sign-transaction"}),", and confirm by signing the message."]}),`
`,e.jsx("img",{src:"/img/collectibles/sign_deploy_transaction.png",width:"200",alt:"Deploy your contract by signing the message in the popup window from the Sequence Wallet"}),`
`,e.jsxs(t.h2,{id:"step-5-mint-tokens-to-your-wallet-address",children:["Step 5: Mint tokens to your wallet address",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-5-mint-tokens-to-your-wallet-address",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Navigate to the ",e.jsx(t.code,{children:"mint"})," card in the ",e.jsx(t.code,{children:"Write Contract"})," section and input the ",e.jsx(t.code,{children:"to"})," being the wallet address you would like to receive the token to, the ",e.jsx(t.code,{children:"tokenId"})," (typically starting at 0), and ",e.jsx(t.code,{children:"amount"})," of tokens, and finally the ",e.jsx(t.code,{children:"data"})," section you can just input ",e.jsx(t.code,{children:"0x00"}),", which typically represent Additional data with no specified format."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/mint_game_item.png",alt:"mint tokens"})}),`
`,e.jsxs(t.h2,{id:"step-6-confirm-your-minted-collectible",children:["Step 6: Confirm your minted collectible",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-6-confirm-your-minted-collectible",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"And you're done!"}),`
`,e.jsxs(t.p,{children:["You can view the transactions submitted to the blockchain for your wallet address in the ",e.jsx(t.code,{children:"Transactions"})," tab navigation"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/transactions_game_items.png",alt:"view currency transactions"})})]})}function l(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{l as default,d as frontmatter};
