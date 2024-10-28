import{d as c,j as e}from"./index-CeIcJMRO.js";const l={title:"Managing Collections in Sequence Builder - Create, Link Contracts, Add Collectibles, and Update Settings",description:"The Sequence Builder allows you to manage Collections of collectible metadata, including details, images, and properties. You can link Collections to deployable contracts for easy crafting flows. Control updates and public/private viewing of collection info on Sequence servers."};function i(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"collections",children:["Collections",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#collections",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"The Sequence Builder offers the ability to manage Collections of collectible metadata, including: collectible details, images, and properties. Within the Builder, Collections can be linked to deployable contracts from the Builder for easy crafting flows."}),`
`,e.jsx(t.p,{children:"Media and metadata is saved to Sequence servers where certain functionality allows you to have control over updates and public or private viewing of your collection information."}),`
`,e.jsx(t.aside,{"data-callout":"tip",children:e.jsxs(t.p,{children:[e.jsx(t.a,{href:"/api/metadata/overview",children:"APIs"})," are also available to manage your NFT collection metadata."]})}),`
`,e.jsxs(t.h2,{id:"1-create-a-collection",children:["1. Create a Collection",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-create-a-collection",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["First navigate to your project from the top left hand drop down of ",e.jsx(t.a,{href:"https://sequence.build",children:"Sequence Builder"})," and select the ",e.jsx(t.code,{children:"Collections"})," page view from the left nav, then select the ",e.jsx(t.code,{children:"+ Create a collection"})]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_create_collection.png",alt:"create collection"})}),`
`,e.jsxs(t.p,{children:["Then input your details for the collection, like ",e.jsx(t.code,{children:"Collection Name"}),", ",e.jsx(t.code,{children:"Description"})," for the contract info, ",e.jsx(t.code,{children:"Collection Data"})," being ",e.jsx(t.code,{children:"Visible (Public)"})," or ",e.jsx(t.code,{children:"Private (Hidden)"})," where for the data to be viewable select Visible (Public), and include your projects ",e.jsx(t.code,{children:"External Link"})," to a website."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_create_collection_input_details.png",alt:"add details to collection"})}),`
`,e.jsxs(t.h2,{id:"2-link-a-contract",children:["2. Link a Contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-link-a-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["After a collection has been created you can first link a contract by deploying a collectible contract (i.e. ",e.jsx(t.code,{children:"ERC1155"})," or ",e.jsx(t.code,{children:"ERC721"}),") and having the ",e.jsx(t.code,{children:"baseMetadataURI"})," being set on the deployment by selecting the ",e.jsx(t.code,{children:"Link contract"})]}),`
`,e.jsxs(t.p,{children:["Then select the ",e.jsx(t.code,{children:"Deploy new contract"})]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_collections_link_contract.png",alt:"link a contract"})}),`
`,e.jsx(t.p,{children:"Select your contract type or upload your own"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_link_contract_choose_contract_type.png",alt:"contract type"})}),`
`,e.jsx(t.p,{children:"Next, you will be able to see the details of the contract type"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_link_contract_confirm_contract.png",alt:"contract type chosen"})}),`
`,e.jsxs(t.p,{children:["And complete your contract details, specifying the ",e.jsx(t.code,{children:"Network"}),", ",e.jsx(t.code,{children:"Contract Name"}),", and ",e.jsx(t.code,{children:"Royalties"}),", whether to publish the Collectible on the ",e.jsx(t.a,{href:"/api/indexer/metadata-tips#metadata-tips--notes-on-spam",children:"Token Directory"})," and finally select ",e.jsx(t.code,{children:"Deploy Contract"})," to then complete the transaction signing in the Sequence popup."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_deploy_contract.png",alt:"contract details"})}),`
`,e.jsxs(t.p,{children:["Then you will notice if you check out the ",e.jsx(t.code,{children:"Read Contract"})," section tab of the contract, if you ",e.jsx(t.code,{children:"Read"})," from the ",e.jsx(t.code,{children:"baseURI"})," it will show you the metadata url from Sequence where when read from the Indexer, ",e.jsx(t.code,{children:"<token_id>.json"})," will get appended to the end to reference the json for the collectible."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collection_read_base_uri.png",alt:"read base uri"})}),`
`,e.jsxs(t.h2,{id:"3-create-a-collectible",children:["3. Create a Collectible",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-create-a-collectible",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["In order to create a Collectible as part of the Collection, return to the ",e.jsx(t.code,{children:"Collections"})," page and select the ",e.jsx(t.code,{children:"+ Add a collectible"})]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_add_a_collectible.png",alt:"add a collectible"})}),`
`,e.jsxs(t.p,{children:["Then update the details like ",e.jsx(t.code,{children:"Collectible Name"})," and ",e.jsx(t.code,{children:"Description"}),", then upload your artwork by selecting the greyish field"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_update_art_and_details.png",alt:"update collectible details"})}),`
`,e.jsxs(t.h4,{id:"add-a-metadata-property",children:["Add a metadata property",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-a-metadata-property",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["You can also add certain properties to your collectible, by selecting the ",e.jsx(t.code,{children:"+ Add a property"})," which can be useful for inscribing more information like numbers or strings when using the metadata in any game."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collection_add_property.png",alt:"add a property"})}),`
`,e.jsx(t.p,{children:"Assigning the key and value to each property"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collection_assign_properties.png",alt:"asign properties"})}),`
`,e.jsx(t.p,{children:"Complete the prior steps until you get your final result of a collectible added to a collection"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_final_result_of_collectible.png",alt:"final result of collectible added"})}),`
`,e.jsxs(t.h2,{id:"4-update-info-in-settings",children:["4. Update Info in Settings",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-update-info-in-settings",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"At any point you can update the details for your collectible in the settings"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_access_settings.png",alt:"settings"})}),`
`,e.jsxs(t.p,{children:["Once in settings, you can update any one of the information fields, like: ",e.jsx(t.code,{children:"Collection Name"}),", ",e.jsx(t.code,{children:"Description"}),", visibility of ",e.jsx(t.code,{children:"Collection data"}),", and an ",e.jsx(t.code,{children:"External Link"})," to reference a website on the web."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_update_info.png",alt:"settings"})}),`
`,e.jsxs(t.h4,{id:"delete-collection-data",children:["Delete Collection Data",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#delete-collection-data",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["You can delete all of the Collection data for the contract by selecting ",e.jsx(t.code,{children:"Delete collection data"})," which will permanently delete data all data, an action that cannot be undone."]}),`
`,e.jsxs(t.h2,{id:"5-reference-metadata-token-uri",children:["5. Reference Metadata Token URI",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-reference-metadata-token-uri",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Currently in order to ",e.jsx(t.code,{children:"Link Contract"})," you can't use predeployed contracts, but you can read the ",e.jsx(t.code,{children:"Token Metadata URI"})," from the Collection to set your existing contracts' ",e.jsx(t.code,{children:"setBaseMetadataURI"}),". The URI can be retrieved by accessing ",e.jsx(t.code,{children:"Metadata URIs"})," button"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_metadata_uris.png",alt:"copy metadata uris"})}),`
`,e.jsxs(t.p,{children:["Then copy the ",e.jsx(t.code,{children:"Token Metadata URI"})," from the modal and use the URI to write to a contract with the ",e.jsx(t.code,{children:"setBaseMetadataURI"})," function, or, use to reference metadata directly in an application by appending a ",e.jsx(t.code,{children:"<token_id>.json"})," to the URI to access the metadata"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collections/collections_token_metadata_uri.png",alt:"access metadata uris"})})]})}function a(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,l as frontmatter};
