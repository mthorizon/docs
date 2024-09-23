import{d as a,j as e}from"./index-CrY7oxuv.js";const r={title:"Enclave Verification Methods - Simple vs. Complex",description:"The WaaS enclave's security hinges on code integrity verification using verified enclaves."};function i(s){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"enclave-verification",children:["Enclave verification",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enclave-verification",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The WaaS enclave's security relies on code integrity verification."}),`
`,e.jsx(n.p,{children:"You have two verification options for a running enclave based on your risk tolerance and technical resources."}),`
`,e.jsxs(n.h2,{id:"simple-verification-method",children:["Simple Verification Method",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#simple-verification-method",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"requirements",children:["Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The verification process works only on Linux or macOS systems. You must have updated versions of these tools installed and set up locally:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.docker.com/",children:"Docker"})}),`
`,e.jsx(n.li,{children:"git"}),`
`,e.jsx(n.li,{children:"make"}),`
`]}),`
`,e.jsxs(n.h3,{id:"determine-the-pcr0",children:["Determine the PCR0",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#determine-the-pcr0",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Visit this page in your browser or through curl: ",e.jsx(n.a,{href:"https://waas.sequence.app/status",children:"https://waas.sequence.app/status"}),"."]}),`
`,e.jsxs(n.p,{children:["Take note of ",e.jsx(n.code,{children:"ver"})," and ",e.jsx(n.code,{children:"pcr0"})," values for later use."]}),`
`,e.jsx(n.p,{children:"Sample output may appear like:"}),`
`,e.jsxs(n.p,{children:["Remember that the checksum can vary between runs, as it verifies the ",e.jsx(n.strong,{children:"file's"})," integrity. Conversely, the PCR0 for the same ",e.jsx(n.strong,{children:"code"})," remains constant, as demonstrated in the example above."]}),`
`,e.jsx(n.p,{children:"Sample output might look like:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'  "healthOK": true,'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'  "startTime": "2024-04-08T17:06:20.177514099Z",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'  "uptime": 167168,'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'  "ver": "v1.1.1",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'  "pcr0": "77541a3d09cdf2728417c1537d190be0998cc84f8aec95a4f1e823c91a007d97f276c2453be7f653fd73fb862b42fcee"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.h3,{id:"build-the-enclave-file",children:["Build the enclave file",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-the-enclave-file",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Clone the repository locally, substituting ",e.jsx(n.code,{children:"v1.1.1"})," with the value of ",e.jsx(n.code,{children:"ver"})," from the previous step:"]}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"git clone -b v1.1.1 https://github.com/0xsequence/waas-authenticator.git"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"cd waas-authenticator"})})]})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Run the following command, again substituting the version as before:"}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"make VERSION=v1.1.1 eif"})})})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Compare the output of the command with the previously noted PCR0 value, for example:"}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Output written into /out/waas-auth.v1.1.1.eif"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'BootMeasurement: Sha384 { ... }: {"HashAlgorithm": "Sha384 { ... }", "PCR0": "77541a3d09cdf2728417c1537d190be0998cc84f8aec95a4f1e823c91a007d97f276c2453be7f653fd73fb862b42fcee", "PCR1": "b7ada9ee8a3fa0a2c74c23ddd04a58f0b095d0465327b2d8461b9b81bcbc7236563ff0326c8614fe9205669636955199", "PCR2": "365294f408bcc5913b44110544bb611255d05666f89fd182900330bc117744fa563c2afcf74808b719ac7a29492099c6"}'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SHA256 checksum:"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"3843b48b32b98fa311cbcd1604c0c6931f03c75075212e8bb4c06d02a3d53509  waas-auth.v1.1.1.eif"})})]})}),`
`,e.jsxs(n.p,{children:["Please note that the checksum might differ between runs as it's only used to verify the integrity of the ",e.jsx(n.strong,{children:"file"}),". However, the PCR0 for the same ",e.jsx(n.strong,{children:"code"})," will always be the same, as can be seen in the example above."]}),`
`,e.jsxs(n.h2,{id:"complex-verification-method",children:["Complex Verification Method",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complex-verification-method",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:['The simple method allows us to compare the PCR0 of the created enclave file with the "live" enclave. This is not foolproof. A mere comparison of two values provides no real evidence. The enclave could have been tampered with, and what we see could be an illusion. Indeed, the PCR0 values for each release are available to the public (',e.jsx(n.a,{href:"https://github.com/0xsequence/waas-authenticator/releases",children:"https://github.com/0xsequence/waas-authenticator/releases"}),")."]}),`
`,e.jsxs(n.p,{children:["Here, ",e.jsx(n.em,{children:"cryptographic attestation"})," becomes necessary. We have not published tools for validation yet, but you can perform it using this AWS guide (",e.jsx(n.a,{href:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html",children:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html"}),")."]}),`
`,e.jsxs(n.p,{children:["Every enclave request returns the attestation document. It comes in a Base64-encoded format in the ",e.jsx(n.code,{children:"X-Attestation-Document"})," response header. A request may also include a ",e.jsx(n.code,{children:"X-Attestation-Nonce"})," header. It contains a value that will be signed and included in the attestation document."]}),`
`,e.jsx(n.p,{children:"For example, you can get the attestation document by running:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"curl -si https://waas.sequence.app/health -H X-Attestation-Nonce:0123456789abcdef | grep x-attestation-document"})})})})]})}function c(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default,r as frontmatter};
