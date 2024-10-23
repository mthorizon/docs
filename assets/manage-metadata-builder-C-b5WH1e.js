import{d as n,j as e}from"./index-CaUurAf5.js";const d={title:"Managing Token Metadata in Sequence Builder with Pinata",description:"This guide explains how to manage token metadata in Sequence Builder with the help from Pinata for IPFS hosting."};function i(t){const a={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.header,{children:e.jsxs(a.h1,{id:"how-to-manage-item-metadata-in-sequence-builder",children:["How to Manage Item Metadata in Sequence Builder",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-manage-item-metadata-in-sequence-builder",children:e.jsx(a.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(a.h2,{id:"introduction",children:["Introduction",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["Following this guide, you can easily manage token metadata for your contract items in Sequence Builder, with a little help from ",e.jsx(a.a,{href:"https://www.pinata.cloud/",children:"Pinata"})," for IPFS hosting."]}),`
`,e.jsxs(a.h2,{id:"step-1-prepare-your-token-images-and-metadata",children:["Step 1: Prepare Your Token Images and Metadata",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-prepare-your-token-images-and-metadata",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["First things first, gather all your token images. For each token, you'll need a metadata file named ",e.jsx(a.code,{children:"id.json"})," (like ",e.jsx(a.code,{children:"1.json"}),", ",e.jsx(a.code,{children:"2.json"}),", etc.). These files should look something like this at a minimum:"]}),`
`,e.jsx(a.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(a.code,{children:[e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "name"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Token Name"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "description"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Token Description"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "image"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ipfs://"'})]}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsx(a.p,{children:"As you can guess, you can build from these basics. You could have your unique item attributes embedded in this token and generated on the fly."}),`
`,e.jsxs(a.h2,{id:"step-2-set-up-on-pinatacloud",children:["Step 2: Set Up on Pinata.cloud",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-set-up-on-pinatacloud",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["Head over to ",e.jsx(a.a,{href:"https://www.pinata.cloud/",children:"Pinata.cloud"})," and create an account. Upload each of your token images as separate files. Next, update the metadata JSON files with the ",e.jsx(a.code,{children:"ipfs"})," address for each token. To do this, simply copy the CID (Content Identifier) for each file from Pinata and paste it after ",e.jsx(a.code,{children:"ipfs://"})," in your JSON files. It should look like this:"]}),`
`,e.jsx(a.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(a.code,{children:[e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "name"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Token Name"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "description"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Token Description"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(a.span,{className:"line",children:[e.jsx(a.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "image"'}),e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(a.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ipfs://QmdJzQExj2wnNY7pNNn4KauzckjH4vA5xhoxmmis919Ev3"'})]}),`
`,e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/1.jpeg",alt:"Configure Pinata"})}),`
`,e.jsxs(a.h2,{id:"step-3-upload-your-metadata-files",children:["Step 3: Upload Your Metadata Files",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-upload-your-metadata-files",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"Now, gather all your JSON metadata files into a single folder on your computer. Use Pinata's 'Upload > Folder' feature to upload this folder. Then, copy the CID for the entire folder."}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/2.jpeg",alt:"Upload Metadata"})}),`
`,e.jsxs(a.h2,{id:"step-4-get-the-folder-url",children:["Step 4: Get the Folder URL",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-4-get-the-folder-url",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"Click on name of the folder you created on Pinata. This will open a new tab showing all your uploaded JSON files. Copy the URL of this folder."}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/3.jpeg",alt:"Get Folder URL from Pinata"})}),`
`,e.jsxs(a.h2,{id:"step-5-set-up-on-sequence-builder",children:["Step 5: Set Up on Sequence Builder",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-5-set-up-on-sequence-builder",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["Navigate to ",e.jsx(a.a,{href:"https://sequence.build/",children:"Sequence Builder"}),', set up your account, and create your project on the network of your choice. In the Contracts section, click on "Deploy New Contract".']}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/4.jpeg",alt:"Configure Contract on Builder"})}),`
`,e.jsxs(a.h2,{id:"step-6-deploy-your-contract",children:["Step 6: Deploy Your Contract",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-6-deploy-your-contract",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:'Select "Web3 Game Item Collection (ERC-1155)" and name your contract. Sequence Builder will automatically deploy your contract on-chain.'}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/5.jpeg",alt:"Deploy Contract"})}),`
`,e.jsxs(a.h2,{id:"step-7-move-to-contract-details",children:["Step 7: Move to Contract Details",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-7-move-to-contract-details",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"Once you sign the transaction, your contract is ready! Click on it to view the details screen."}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/6.jpeg",alt:"Contract Details"})}),`
`,e.jsxs(a.h2,{id:"step-8-update-contract-attributes",children:["Step 8: Update Contract Attributes",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-8-update-contract-attributes",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"Navigate to the “Write Contract” section. This is where you can modify attributes of your freshly deployed ERC-1155 contract. Two methods are what you should focus on for now:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"setBaseMetadataURI"})," allows the creator to set the base metadata URL for this contract. You want this to point to the JSON files you’ve created, depending on NFT ID."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"mint"})," mints one of your tokens and sends it to an address of your choosing."]}),`
`]}),`
`,e.jsxs(a.h2,{id:"step-9-set-the-base-metadata-uri",children:["Step 9: Set the Base Metadata URI",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-9-set-the-base-metadata-uri",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["Scroll to ",e.jsx(a.code,{children:"setBaseMetadataURI"}),", expand it, and under ",e.jsx(a.code,{children:"tokenBaseURI"})," paste the URL for the JSON folder preview you got from Pinata earlier. It should look something like this:"]}),`
`,e.jsx(a.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(a.code,{children:e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"https://azure-wooden-lemur-911.mypinata.cloud/ipfs/QmW5gvYGWb98GsN8VjTRWu4pLn6jryEXNxZKNWpPhVwtDm/"})})})}),`
`,e.jsxs(a.p,{children:["Click “Write” and you will be prompted to sign again. This will modify the contract on-chain to set the metadata base. Essentially any token ID you provide will be appended to this URL, along with the ",e.jsx(a.code,{children:".json"})," suffix. So if you mint token ID 123, it will look for ",e.jsx(a.code,{children:"tokenBaseURI + 123.json"}),"."]}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/7.jpeg",alt:"Base Metadata Setup"})}),`
`,e.jsxs(a.h2,{id:"step-10-minting-time",children:["Step 10: Minting Time",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-10-minting-time",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(a.p,{children:["Finally, it's time to mint! Scroll up to ",e.jsx(a.code,{children:"mint"}),", expand it, and fill in the details:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"to (address)"}),": This is the address that the token will be sent to. Use your Sequence wallet address or any other valid address."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"tokenId (uint256)"}),": This is your token ID. As long as you have a ",e.jsx(a.code,{children:"tokenId.json"})," file already uploaded to pinata.cloud under the folder, it will work."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"amount (uint256)"}),": The number of tokens to mint (usually 1)."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"data (bytes)"}),": Enter ",e.jsx(a.code,{children:"0x00"})," for this simple process."]}),`
`]}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/8.jpeg",alt:"Mint test"})}),`
`,e.jsxs(a.h2,{id:"step-11-finalize-and-admire",children:["Step 11: Finalize and Admire",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-11-finalize-and-admire",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:`Click "Write" and sign the transaction. Congratulations, you've just minted a token! Head over to the "Tokens" section to see your minted tokens with their names and images.`}),`
`,e.jsx(a.p,{children:e.jsx(a.img,{src:"/img/guides/manage-contract-metadata-builder/9.jpeg",alt:"Finalize Minting"})}),`
`,e.jsxs(a.h2,{id:"step-12-updating-metadata",children:["Step 12: Updating Metadata",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-12-updating-metadata",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a.p,{children:"If you make mistakes with the token metadata, you can always update it and then call the Sequence Metadata refresh endpoint to reload the specific tokens:"}),`
`,e.jsx(a.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(a.code,{children:e.jsx(a.span,{className:"line",children:e.jsx(a.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'curl -X GET "https://metadata.sequence.app/tokens/mumbai/0xb392c99d9f8e3e0b248e5c283818be5bf5cecca7/1/refresh"'})})})}),`
`,e.jsxs(a.p,{children:["This is in the format: ",e.jsx(a.code,{children:"https://metadata.sequence.app/tokens/<chain-name>/<contract-address>/<token-id>/refresh"})]}),`
`,e.jsxs(a.p,{children:["Now that you are ready to mint, you might want to read about ",e.jsx(a.a,{href:"/guides/mint-collectibles-serverless",children:"how you can launch your own serverless endpoint for securely minting tokens"}),"."]})]})}function r(t={}){const{wrapper:a}={...n(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(i,{...t})}):i(t)}export{r as default,d as frontmatter};
