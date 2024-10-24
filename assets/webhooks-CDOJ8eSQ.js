import{d as i,j as e,e as n}from"./index-Db4owo0g.js";/* empty css                                */const h={title:"Managing Webhooks in Sequence Builder",description:"The content discusses the use of webhooks in Sequence Builder for game builders to listen to events on multiple blockchains."};function r(t){const o={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.header,{children:e.jsxs(o.h1,{id:"webhooks-in-sequence-builder",children:["Webhooks in Sequence Builder",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#webhooks-in-sequence-builder",children:e.jsx(o.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(o.p,{children:"Sequence Builder equips game builders with an indexer that listens to events across the many blockchains that we offer by providing an https callback"}),`
`,e.jsx(n,{type:"warning",children:e.jsxs(o.p,{children:["If you prefer a programmatic way to add webhooks that uses cURL, TypeScript or Go, check out ",e.jsx(o.a,{href:"/api/indexer/examples/webhook-listener",children:"this walkthrough"}),"."]})}),`
`,e.jsxs(o.h4,{id:"what-data-can-i-listen-to-for-my-game",children:["What data can I listen to for my game?",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-data-can-i-listen-to-for-my-game",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Mints from a contract"}),`
`,e.jsx(o.li,{children:"TokenID transfers"}),`
`,e.jsx(o.li,{children:"Transactions by an account address"}),`
`,e.jsx(o.li,{children:"Event topics emitted by a contract"}),`
`,e.jsx(o.li,{children:"Event topic hashes emitted by a contract"}),`
`]}),`
`,e.jsxs(o.h2,{id:"creating-webhooks",children:["Creating Webhooks",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-webhooks",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(o.p,{children:"The following steps guide you through creating your webhook"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"/solutions/builder/webhooks#select-project-and-go-to-webhooks-section",children:"Select Project and go to Webhooks Section"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"/solutions/builder/webhooks#select-network-and-add-new-webhook",children:"Select Network and Add New Webhook"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"/solutions/builder/webhooks#complete-webhook-details",children:"Complete Webhook Details"})}),`
`]}),`
`,e.jsxs(o.div,{"data-vocs-steps":"true",children:[e.jsxs(o.div,{"data-depth":"3",children:[e.jsxs(o.h3,{id:"select-project-and-go-to-webhooks-section",children:["Select Project and go to Webhooks Section",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#select-project-and-go-to-webhooks-section",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),e.jsxs(o.p,{children:["Select your project in the top left hand corner, select the ",e.jsx(o.code,{children:"Indexer"})," section in the sidebar, and select the ",e.jsx(o.code,{children:"Webhooks"})," tab."]}),e.jsx(o.p,{children:e.jsx(o.img,{src:"/img/builder/builder_indexer_webhooks_select.png",alt:"indexer webhooks select"})})]}),e.jsxs(o.div,{"data-depth":"3",children:[e.jsxs(o.h3,{id:"select-network-and-add-new-webhook",children:["Select Network and Add New Webhook",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#select-network-and-add-new-webhook",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),e.jsxs(o.p,{children:["In the dropdown beneath the webhooks tab, select the network you're looking to create a webhook for based on the ones in your project. If you don't see the network you're looking for, you can always ",e.jsx(o.a,{href:"/support/builder/project-settings#3-network-settings",children:"add a network"}),", then ",e.jsx(o.code,{children:"+ Add New Webhook"}),`
`,e.jsx(o.img,{src:"/img/builder/builder_indexer_webhooks_add_new_webhook.png",alt:"indexer webhooks add new webhook"})]})]}),e.jsxs(o.div,{"data-depth":"3",children:[e.jsxs(o.h3,{id:"complete-webhook-details",children:["Complete Webhook Details",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complete-webhook-details",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),e.jsxs(o.p,{children:["Complete the required details like webhook ",e.jsx(o.code,{children:"URL"}),", ",e.jsx(o.code,{children:"Contract Address(es)"}),", and 'Events'."]}),e.jsxs(o.p,{children:["For the Events field, we are able to parse any arbitrary contract event, however you must input the event exactly as written in your smart contract. For example, for detecting transfer events you would input: ",e.jsx(o.code,{children:"Transfer(address indexed from, address indexed to, uint256 amount)"})," with the ",e.jsx(o.code,{children:"indexed"})," keyword. You can find an example of general event types ",e.jsx(o.a,{href:"/api/indexer/examples/webhook-listener#on-chain-token-event-types",children:"here"})," for common use cases along with Sequence specific ones."]}),e.jsxs(o.p,{children:["Once your desired fields are input, select ",e.jsx(o.code,{children:"Add Webhook"}),"."]}),e.jsxs(n,{type:"info",children:[e.jsxs(o.p,{children:["If you require a webhook endpoint you can use ",e.jsx(o.a,{href:"https://webhook.site/",children:"webhook.site"})]}),e.jsx(o.p,{children:"Or, you can use template code with one of the following:"}),e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://github.com/0xsequence-demos/template-nodejs-webhook-server",children:"Nodejs TypeScript Webhook"})," (combined with ",e.jsx(o.a,{href:"https://ngrok.com/",children:"ngrok"}),")"]})]}),e.jsx(o.p,{children:e.jsx(o.img,{src:"/img/builder/builder_indexer_webhooks_add_webhook.png",alt:"add a webhook with details"})}),e.jsx(o.p,{children:"And you're done!"})]})]}),`
`,e.jsxs(o.h2,{id:"removing-or-updating-webhooks",children:["Removing or Updating Webhooks",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#removing-or-updating-webhooks",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(o.p,{children:"The following steps guide you through creating your updating or removing your webhook"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"/solutions/builder/webhooks#select-project-and-go-to-webhooks-section",children:"Select Project and go to Webhooks Section"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"/solutions/builder/webhooks#select-the-gear-to-update-or-remove-your-webhook",children:"Select the Gear to Update or Remove your Webhook"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"/solutions/builder/webhooks#update-or-remove-webhook",children:"Update or Remove Webhook"})}),`
`]}),`
`,e.jsxs(o.div,{"data-vocs-steps":"true",children:[e.jsxs(o.div,{"data-depth":"3",children:[e.jsxs(o.h3,{id:"select-project-and-go-to-webhooks-section-1",children:["Select Project and go to Webhooks Section",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#select-project-and-go-to-webhooks-section-1",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),e.jsxs(o.p,{children:["Select your project in the top left hand corner, select the ",e.jsx(o.code,{children:"Indexer"})," section in the sidebar, and select the ",e.jsx(o.code,{children:"Webhooks"})," tab."]}),e.jsx(o.p,{children:e.jsx(o.img,{src:"/img/builder/builder_indexer_webhooks_select.png",alt:"indexer webhooks select"})})]}),e.jsxs(o.div,{"data-depth":"3",children:[e.jsxs(o.h3,{id:"select-the-gear-to-update-or-remove-your-webhook",children:["Select the Gear to Update or Remove your Webhook",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#select-the-gear-to-update-or-remove-your-webhook",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),e.jsxs(o.p,{children:["In the webhooks screen, select the gear ",e.jsx(o.code,{children:"⚙"})," for the webhook you want to remove or update"]}),e.jsx(o.p,{children:e.jsx(o.img,{src:"/img/builder/builder_indexer_webhook_select.png",alt:"click update webhook"})})]}),e.jsxs(o.div,{"data-depth":"3",children:[e.jsxs(o.h3,{id:"update-or-remove-webhook",children:["Update or Remove Webhook",e.jsx(o.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-or-remove-webhook",children:e.jsx(o.div,{"data-autolink-icon":!0})})]}),e.jsxs(o.p,{children:["Then you can either ",e.jsx(o.code,{children:"Update Webhook"})," or ",e.jsx(o.code,{children:"Remove"})," your webhook by selecting either option"]}),e.jsx(o.p,{children:e.jsx(o.img,{src:"/img/builder/builder_indexer_webhooks_update_or_remove.png",alt:"update or remove"})})]})]})]})}function a(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default,h as frontmatter};
