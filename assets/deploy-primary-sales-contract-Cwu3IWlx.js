import{d as s,j as e,e as a}from"./index-Cy8I8Vxd.js";/* empty css                                */const c={title:"Deploying a Primary Sales Contract in Sequence Builder",description:"This guide provides a detailed walkthrough on setting up and deploying a Primary Sales Contract in Builder. It discusses the differences between ERC721 and ERC1155 contracts, walks through the steps of deploying a contract."};function n(i){const t={a:"a",code:"code",div:"div",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h3,{id:"how-to-deploy-a-primary-sales-contract-in-sequence-builder",children:["How to Deploy a Primary Sales Contract in Sequence Builder",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-deploy-a-primary-sales-contract-in-sequence-builder",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"This guide walks through how to setup and deploy the contracts for launching a primary sale - suitable for an NFT Drop, in-game store, and more."}),`
`,e.jsx(a,{type:"warning",children:e.jsxs(t.p,{children:["The Primary Sale feature is currently in early access. To enable them, please visit ",e.jsx(t.a,{href:"https://sequence.build/earlyaccess",children:"https://sequence.build/earlyaccess"})," and turn on the functionality."]})}),`
`,e.jsxs(t.div,{"data-vocs-steps":"true",children:[e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"step-1-navigate-to-contracts",children:["Step 1: Navigate to contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-navigate-to-contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["Start by selecting your desired ",e.jsx(t.code,{children:"project"})," you would like to create a sale for and head to ",e.jsx(t.code,{children:"Contracts > Deploy"}),"."]})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"step-2-deploy-your-chosen-collectible-contract",children:["Step 2: Deploy your chosen collectible contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-deploy-your-chosen-collectible-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["Follow this ",e.jsx(t.a,{href:"/solutions/collectibles/contracts/deploy-an-item-collection",children:"guide"})," in order to deploy a collectible contract as well as upload the collection metadata that you wish to create a sale for."]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/select_web3_game_item.png",alt:"select game item"})})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"step-3-deploy-your-primary-sales-contract",children:["Step 3: Deploy your Primary Sales contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-deploy-your-primary-sales-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsxs(t.p,{children:["Once successfully deployed, return to the contracts page and select ",e.jsx(t.code,{children:"+ Deploy new contract"})," again. Then select the appropriate ERC721 or ERC1155 sale contract that corresponds to your previously deployed collectible contract in step 2 and click ",e.jsx(t.code,{children:"Deploy sale contract"}),"."]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/primary-sales/docs_deploy_sale.png",alt:"Deploy Sale Contract"})})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"step-4-set-your-mint-details-on-the-primary-sales-contract",children:["Step 4: Set your mint details on the Primary Sales contract.",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-4-set-your-mint-details-on-the-primary-sales-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"Navigate to the mint details tab for your primary sales contract. Fill out the mint details with your desired sale parameters."}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/primary-sales/docs_mint_access.png",alt:"Mint Access"})}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Supply Cap"}),": This is the amount of supply of tokens that users can mint via the Sale contract"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Cost"}),": Is the cost amount in GWEI of minting a single token. In this example, we set it to 0 to easily mint from Builder, but when deploying in production this should match what you wish to charge your users."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Start and End Time"}),": Start and end time of the sale. If the current time is within the date range provided, this will activate the sale. Consider setting the date range to the future if desired."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Payment Token"}),": You can select the native token on the chain or a custom currency as well that the sale is in."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Sale Type"}),": You can also opt to choose between a Public or Private mint.  When selecting a private mint, you can also choose a list of allowlisted participants that is uploaded using our ",e.jsx(t.a,{href:"https://sequence.build/project/default/audience/",children:"Audience"})," feature. Important to note, that for a private mint you will need to pass in a merkle proof that corresponds to the merkle root added in the sale details in order to mint. Not to worry though, we provide this logic in our boilerplates by default."]}),`
`]}),e.jsx(t.p,{children:"For this walkthrough, we will assume you are creating a public mint."})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"step-5-add-minterrole-for-sales-contract-to-collection-contract",children:["Step 5: Add MinterRole for Sales Contract to Collection Contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-5-add-minterrole-for-sales-contract-to-collection-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"Copy the Sales contract address, then you can navigate to the specific contract and select the settings to view Permissions."}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_contract_specific_settings.png",alt:"contract settings"})}),e.jsxs(t.p,{children:["Once you have the modal open, select the ",e.jsx(t.code,{children:"Permissions"})," tab and you can ",e.jsx(t.code,{children:"Edit"}),", or, ",e.jsx(t.code,{children:"+ Add Collaborator"}),"."]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_contract_specific_permissions.png",alt:"add collaborator"})}),e.jsxs(t.p,{children:["Then complete the form with the Sales contract address to add as a collaborator and select the dropdown to assign the ",e.jsx(t.code,{children:"Minter"})," role."]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_contract_permissions_dropdown.png",alt:"assign role"})}),e.jsx(t.p,{children:"Finally, complete and sign the transaction update the contract Access Control."})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"step-6",children:["Step 6:",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-6",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"Now that you've got your contracts configured, let's try to do a test mint!"}),e.jsxs(t.p,{children:["Return to your deployed Sale contract and select ",e.jsx(t.code,{children:"Write contract"}),". We will then click on the ",e.jsx(t.code,{children:"mint()"})," function and pass in a few parameters:"]}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"to"}),": this is the address that the NFT is being minted to. Generally this would be the user who paid, but we can simply pass in our Builder address located in the top-right hand corner."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"amount"}),": The amount of NFTs to mint, we will simply mint 1."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"paymentToken"}),": For a custom currency, you would pass in that currency's address. However for native tokens it will be ",e.jsx(t.code,{children:"0x0000000000000000000000000000000000000000"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"maxTotal"}),": The maximum amount of the given currency that can be paid."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"proof"}),": For a public mint, you can simply leave this field blank. In a private mint, this would be the generated proof that corresponds to the user's address & previously provided merkle root."]}),`
`]}),e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/primary-sales/docs_mint_sale.png",alt:"Grant Minter Role"})}),e.jsxs(t.p,{children:["Once all that information is filled out, go ahead and click ",e.jsx(t.code,{children:"Write"})," to build the transaction, then ",e.jsx(t.code,{children:"Confirm"})," to mint the token!"]})]})]}),`
`,e.jsx(t.p,{children:"What's next? You can now utilize the sale contracts publicly on your website for an NFT drop or use these contracts for your in-game store to sell game items to your players. We also recommend taking a look at our boilerplates that leverage the sale contracts to enable various use cases such as Fiat Payments with a credit card or ability to pay in any currency for your sale using currency abstraction."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/0xsequence/demo-nft-checkout/tree/master",children:"Purchase an NFT via the Sales contract with a Credit Card"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/0xsequence/currency-abstraction-demo",children:"Leverage currency abstraction to pay in any currency for your sale"})}),`
`]})]})}function l(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{l as default,c as frontmatter};
