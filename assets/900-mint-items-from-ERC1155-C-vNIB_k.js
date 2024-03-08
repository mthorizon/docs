import{u as o,j as e}from"./index-Bd1BbtIx.js";const r={slug:"/solutions/collectibles/contracts/mint-items-from-ERC1155",title:"How to Mint In-Game Items and Achievements in Builder",description:"undefined"};function i(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"how-to-mint-in-game-items-and-achievements-in-builder",children:["How to Mint In-Game Items and Achievements in Builder",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-mint-in-game-items-and-achievements-in-builder",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.h2,{id:"introduction",children:["Introduction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"In this guide, we're going to walk through the process of creating your own in-game assets by minting from an ERC-1155 contract. These assets are commonly used for items and achievements, but could be used for just about any game object."}),`
`,e.jsxs(t.h4,{id:"what-is-an-erc-1155",children:["What is an ERC-1155?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-an-erc-1155",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["ERC-1155 is simply ",e.jsx(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"a multi-token standard"})," that allows the creation of fungible, non-fungible, and semi-fungible tokens all in one contract. For games, this means that you can manage all of your in-game tokens with a single contract."]}),`
`,e.jsxs(t.h4,{id:"what-can-you-do-with-it",children:["What can you do with it?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-can-you-do-with-it",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Your imagination is the limit. We mentioned achievements before, you could mint each as an NFT and grant it to the player. Or let's say your game generates unique items every time a boss is killed. Those items could be minted as tokens with all attributes baked in, and held in the player's own wallet."}),`
`,e.jsx(t.p,{children:"Lets dive in!"}),`
`,e.jsxs(t.h3,{id:"prerequisite-create-a-project-and-deploy-a-smart-contract",children:["Prerequisite: Create a Project and deploy a Smart Contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisite-create-a-project-and-deploy-a-smart-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["This guide assumes that you have already ",e.jsx(t.a,{href:"/solutions/builder/getting-started",children:"signed up for Builder and created a Project"}),"."]}),`
`,e.jsxs(t.p,{children:["Before you get started creating (minting) collectibles, you will need to first deploy the smart contract you wish to mint from. If you have not done so already, go back and do ",e.jsx(t.a,{href:"/solutions/collectibles/contracts/200-deploy-an-item-collection-contract",children:"how to load an item collection through deploying a smart contract"}),"."]}),`
`,e.jsxs(t.h2,{id:"step-1-select-the-collection-for-your-item",children:["Step 1: Select the Collection for your item",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-select-the-collection-for-your-item",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Start by selecting the contract you would like to create an item from. In this example, we are covering ERC-1155, so select you the ERC-1155 contract that you have deployed."}),`
`,e.jsx(t.p,{children:"Once in the project dashboard, you should see the Collection - select it."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_select_contract_mint_achievements.png",alt:"Sequence builder select contract"})}),`
`,e.jsxs(t.h2,{id:"step-2-navigate-to-write-contract",children:["Step 2: Navigate to Write Contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-navigate-to-write-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"When you open your contract, you will see several options. Everything from details like your contract address, type, the network its deployed on - to options for adding gas or help setting up an indexer. Below those details, you have more options to view contract details and interact with it."}),`
`,e.jsxs(t.p,{children:["Within that subset of options, select ",e.jsx(t.code,{children:"Write Contract"}),"."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_navigate_write_contract_mint_achievements.png",alt:"Sequence builder write contract"})}),`
`,e.jsx(t.p,{children:"This will drop down several methods that you can call to the smart contract. You do this by sending a transaction to the smart contract with the included call data."}),`
`,e.jsxs(t.p,{children:["We're here to mint some items, so we'll select the ",e.jsx(t.code,{children:"mint"})," method."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_select_mint_method_mint_achievements.png",alt:"Sequence builder select mint"})}),`
`,e.jsxs(t.h2,{id:"step-3-provide-details-for-the-mint-method",children:["Step 3: Provide details for the Mint method",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-provide-details-for-the-mint-method",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Selecting ",e.jsx(t.code,{children:"mint"})," will expand it to give you a couple of fields to fill out. Fill each of these fields out first:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"to (address)"})," - the address you want these to be minted to, for this example put your own address in."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"tokenId (uint256)"})," - give the collection of items an id, for a first collection enter 0 or 1 here."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"amount (uint256)"})," - enter the amount of items you want to mint in this collection."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"data (bytes)"})," - for this one, enter 0x"]}),`
`]}),`
`,e.jsx(t.aside,{"data-callout":"note",children:e.jsx(t.p,{children:"This type of contract, ERC-1155, can have several different groups of tokens on it - each requiring its own id."})}),`
`,e.jsxs(t.p,{children:["Once you have filled out all of the fields, hit ",e.jsx(t.code,{children:"write"})," to send a transaction to mint."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_fill_mint_details_mint_achievements.png",alt:"Sequence builder fill mint details"})}),`
`,e.jsxs(t.h2,{id:"step-4-mint-and-sign-your-transaction",children:["Step 4: Mint and sign your transaction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-4-mint-and-sign-your-transaction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["After you hit ",e.jsx(t.code,{children:"write"}),", a modal with your wallet will pop-up. In order to create (mint) these items, you will need to send a transaction."]}),`
`,e.jsxs(t.p,{children:["Read the transaction details, then execute the transaction by hitting ",e.jsx(t.code,{children:"confirm"})," on the signature."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_sign_transaction_mint_achievements.png",alt:"Sequence builder sign transactions"})}),`
`,e.jsx(t.p,{children:"After you sign the transaction, the network will take a few seconds (maybe minutes depending on the network and other factors) to confirm your transaction."}),`
`,e.jsxs(t.h2,{id:"step-5-confirm-your-minted-items",children:["Step 5: Confirm your minted items",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-5-confirm-your-minted-items",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"When the transaction is complete, you will have created your items by minting them from the smart contract!"}),`
`,e.jsxs(t.p,{children:["If you click ",e.jsx(t.code,{children:"Balances"}),", you should be able to see the total number of items you minted from your collection."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_confirm_mint_items_mint_achievements.png",alt:"Sequence builder confirm mint"})}),`
`,e.jsx(t.p,{children:"In the example, you can see the 5 items I created just now, along with 4k items that I created in a seperate minting earlier."}),`
`,e.jsxs(t.p,{children:["You can also click ",e.jsx(t.code,{children:"Tokens"})," to see the both of the collections that we created and minted from."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_confirm_nft_mint_achievements.png",alt:"Sequence builder confirm nft"})})]})}function s(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{s as default,r as frontmatter};
