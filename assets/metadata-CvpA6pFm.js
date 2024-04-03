import{u as s,j as e}from"./index-CchMGs7j.js";const o={title:"Metadata API",description:"undefined"};function a(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"metadata-api",children:["Metadata API",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata-api",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.aside,{"data-callout":"note",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://0xsequence.redoc.ly/tag/metadata",children:"Metadata API documentation and endpoints"})})}),`
`,e.jsx(t.p,{children:"The Sequence Metadata API service offers a simple and fast API to query, manage, and update collections, token & NFT metadata for Ethereum-compatible chains."}),`
`,e.jsx(t.aside,{"data-callout":"info",children:e.jsxs(t.p,{children:["Our Metadata service is managed through ",e.jsx(t.a,{href:"HTTPS://SEQUENCE.BUILD",children:"Sequence Builder"}),`. Sign up to grab your
API access key before following the steps below.`]})}),`
`,e.jsxs(t.h2,{id:"creating-collections-tokens-and-managing-metadata",children:["Creating Collections, Tokens, and Managing Metadata",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-collections-tokens-and-managing-metadata",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The below steps walk through an end to end example utilizing our Metadata API in order to deploy an NFT collection, create tokens within that collection, and deploy asset metadata to such as an image to that token."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsxs(t.a,{href:"https://0xsequence.redoc.ly/tag/metadata#operation/metadata-CreateCollection",children:["Call ",e.jsx(t.code,{children:"CreateCollection"})," endpoint"]})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"CreateToken"})," - use returned collectionId from previous request"]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"CreateAsset"})," - use collectionId and your tokenId"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["set ",e.jsx(t.code,{children:"metadataField"})," (assetType) to one of the following",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"image"}),`
`,e.jsx(t.li,{children:"animation_url"}),`
`,e.jsx(t.li,{children:"audio"}),`
`,e.jsx(t.li,{children:"video"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Upload file with PUT method to this endpoint ",e.jsx(t.code,{children:"PUT {metadata-server}/projects/{projectId}/collections/{collectionId}/tokens/{tokenId}/upload/{assetIdOrAssetType}"}),'- use assetId that is returned in step 3 OR, you can pass assetType, such as "image"']}),`
`]}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["For example you can upload to ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/upload/image",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/upload/image"}),' which will find the asset of the type "image" for the token, and will upload there.',`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["You can also pass in the assetId if you prefer, i.e., PUT ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/assets/1/upload",children:"https://metadata.sequence.app/projects/486/collections/1/assets/1/upload"})]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"Asset types include: image, audio, video, animation_url"}),`
`]}),`
`,e.jsxs(t.ol,{start:"5",children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Asset is now privately accessible with JWT token at ",e.jsx(t.code,{children:"GET {metadata-server}/projects/{projectID}/collections/{collectionID}/tokens/{tokenID}/asset/{assetType}"})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["for example: ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/asset/image",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/asset/image"})]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"PublishCollection"})," -- this sets the collection to be accessible by the public"]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"GetCollection"})," -- will return both baseURIs for contract and token level metadata."]}),`
`]}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Collection-level metadata (aka contract-level) metadata: ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1",children:"https://metadata.sequence.app/projects/486/collections/1"})," or ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1.json",children:"https://metadata.sequence.app/projects/486/collections/1.json"})]}),`
`,e.jsxs(t.li,{children:["Token-level metadata: ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/%7BtokenId%7D",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/{tokenId}"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["ie. ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1"})," or ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1.json",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1.json"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.ol,{start:"8",children:[`
`,e.jsx(t.li,{children:"Finally, to use the metadata in your contract, simply update your contract's metadata base URIs to the values above, and everything will simply work."}),`
`]}),`
`,e.jsxs(t.p,{children:[`Below is an architecture demonstrating the steps above of how an NFT collection (ERC721 or ERC1155) is created and managed.
`,e.jsx(t.img,{src:"/img/metadata/metadata_api_architecture.png",alt:"Sequence Support"})]}),`
`,e.jsxs(t.h2,{id:"pricing--usage",children:["Pricing & Usage",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pricing--usage",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["The Sequence Metadata is available for free with moderate request limits, but if your project requires higher limits, please contact the ",e.jsx(t.a,{href:"https://sequence.xyz",children:"Sequence"})," team."]})]})}function l(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{l as default,o as frontmatter};
