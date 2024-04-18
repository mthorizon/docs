import{d as s,j as e}from"./index-GE-9GwRg.js";const r={title:"Enclave verification",description:"undefined"};function a(i){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"enclave-verification",children:["Enclave verification",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enclave-verification",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The security of an WaaS enclave depends on being able to independently verify the integrity of the code that powers it."}),`
`,e.jsx(n.p,{children:"You have two options when it comes to verifying the integrity of a running enclave depending on your risk tolerance and technical means."}),`
`,e.jsxs(n.h2,{id:"the-easy-way",children:["The easy way",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-easy-way",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"prerequisites",children:["Prerequisites",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The verification procedure will currently only work on Linux or macOS systems. Additionally, you need to have a recent versions of the following tools installed and configured locally:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.docker.com/",children:"Docker"})}),`
`,e.jsx(n.li,{children:"git"}),`
`,e.jsx(n.li,{children:"make"}),`
`]}),`
`,e.jsxs(n.h3,{id:"find-out-the-pcr0",children:["Find out the PCR0",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#find-out-the-pcr0",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Open the following page in the browser or through curl: ",e.jsx(n.a,{href:"https://waas.sequence.app/status",children:"https://waas.sequence.app/status"}),"."]}),`
`,e.jsxs(n.p,{children:["Note the values of ",e.jsx(n.code,{children:"ver"})," and ",e.jsx(n.code,{children:"pcr0"})," - these will be needed later."]}),`
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
`,e.jsxs(n.h2,{id:"the-hard-way",children:["The hard way",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-hard-way",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`The above lets us compare the PCR0 of the built enclave file with the "live" enclave. But it's not foolproof. You might notice that such a simple comparison of two values is not real proof. After all, the enclave might have been tampered with and what we see is make believe. Indeed, the PCR0 values for each release are `,e.jsx(n.a,{href:"https://github.com/0xsequence/waas-authenticator/releases",children:"publicly available"}),"."]}),`
`,e.jsxs(n.p,{children:["This is where ",e.jsx(n.em,{children:"cryptographic attestation"})," comes in. While we haven't yet published tools that would do the validation, it can be performed using ",e.jsx(n.a,{href:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html",children:"this great guide by AWS"}),"."]}),`
`,e.jsxs(n.p,{children:["Every enclave request returns the attestation document in a Base64-encoded format in the ",e.jsx(n.code,{children:"X-Attestation-Document"})," response header. A request might optionally include a ",e.jsx(n.code,{children:"X-Attestation-Nonce"})," header containing a value that will be signed and included in the attestation document as well."]}),`
`,e.jsx(n.p,{children:"For example, you can get the attestation document by running:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"curl -si https://waas.sequence.app/health -H X-Attestation-Nonce:0123456789abcdef | grep x-attestation-document"})})})})]})}function c(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{c as default,r as frontmatter};
