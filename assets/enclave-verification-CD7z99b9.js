import{d as i,j as e}from"./index-D9Qc1RWB.js";const r={title:"Enclave Verification Methods - Simple vs. Complex",description:"The WaaS enclave's security hinges on code integrity verification using verified enclaves."};function a(n){const t={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"enclave-verification",children:["Enclave verification",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enclave-verification",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"The WaaS enclave's security relies on code integrity verification."}),`
`,e.jsx(t.p,{children:"You have two verification options for a running enclave based on your risk tolerance and technical resources."}),`
`,e.jsxs(t.h2,{id:"simple-verification-method",children:["Simple Verification Method",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#simple-verification-method",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.h3,{id:"requirements",children:["Requirements",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The verification process works only on Linux or macOS systems. You must have updated versions of these tools installed and set up locally:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.docker.com/",children:"Docker"})}),`
`,e.jsx(t.li,{children:"git"}),`
`,e.jsx(t.li,{children:"make"}),`
`]}),`
`,e.jsxs(t.h3,{id:"determine-the-pcr0",children:["Determine the PCR0",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#determine-the-pcr0",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Visit this page in your browser or through curl: ",e.jsx(t.a,{href:"https://waas.sequence.app/status",children:"https://waas.sequence.app/status"}),"."]}),`
`,e.jsxs(t.p,{children:["Take note of ",e.jsx(t.code,{children:"ver"})," and ",e.jsx(t.code,{children:"pcr0"})," values for later use."]}),`
`,e.jsx(t.p,{children:"Sample output may appear like:"}),`
`,e.jsxs(t.p,{children:["Remember that the checksum can vary between runs, as it verifies the ",e.jsx(t.strong,{children:"file's"})," integrity. Conversely, the PCR0 for the same ",e.jsx(t.strong,{children:"code"})," remains constant, as demonstrated in the example above."]}),`
`,e.jsx(t.p,{children:"Sample output might look like:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`{
  "healthOK": true,
  "startTime": "2024-04-08T17:06:20.177514099Z",
  "uptime": 167168,
  "ver": "v1.1.1",
  "pcr0": "77541a3d09cdf2728417c1537d190be0998cc84f8aec95a4f1e823c91a007d97f276c2453be7f653fd73fb862b42fcee"
}
`})}),`
`,e.jsxs(t.h3,{id:"build-the-enclave-file",children:["Build the enclave file",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-the-enclave-file",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Clone the repository locally, substituting ",e.jsx(t.code,{children:"v1.1.1"})," with the value of ",e.jsx(t.code,{children:"ver"})," from the previous step:"]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`git clone -b v1.1.1 https://github.com/0xsequence/waas-authenticator.git
cd waas-authenticator
`})}),`
`,e.jsxs(t.ol,{start:"2",children:[`
`,e.jsx(t.li,{children:"Run the following command, again substituting the version as before:"}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`make VERSION=v1.1.1 eif
`})}),`
`,e.jsxs(t.ol,{start:"3",children:[`
`,e.jsx(t.li,{children:"Compare the output of the command with the previously noted PCR0 value, for example:"}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`Output written into /out/waas-auth.v1.1.1.eif
BootMeasurement: Sha384 { ... }: {"HashAlgorithm": "Sha384 { ... }", "PCR0": "77541a3d09cdf2728417c1537d190be0998cc84f8aec95a4f1e823c91a007d97f276c2453be7f653fd73fb862b42fcee", "PCR1": "b7ada9ee8a3fa0a2c74c23ddd04a58f0b095d0465327b2d8461b9b81bcbc7236563ff0326c8614fe9205669636955199", "PCR2": "365294f408bcc5913b44110544bb611255d05666f89fd182900330bc117744fa563c2afcf74808b719ac7a29492099c6"}
SHA256 checksum:
3843b48b32b98fa311cbcd1604c0c6931f03c75075212e8bb4c06d02a3d53509  waas-auth.v1.1.1.eif
`})}),`
`,e.jsxs(t.p,{children:["Please note that the checksum might differ between runs as it's only used to verify the integrity of the ",e.jsx(t.strong,{children:"file"}),". However, the PCR0 for the same ",e.jsx(t.strong,{children:"code"})," will always be the same, as can be seen in the example above."]}),`
`,e.jsxs(t.h2,{id:"complex-verification-method",children:["Complex Verification Method",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complex-verification-method",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:['The simple method allows us to compare the PCR0 of the created enclave file with the "live" enclave. This is not foolproof. A mere comparison of two values provides no real evidence. The enclave could have been tampered with, and what we see could be an illusion. Indeed, the PCR0 values for each release are available to the public (',e.jsx(t.a,{href:"https://github.com/0xsequence/waas-authenticator/releases",children:"https://github.com/0xsequence/waas-authenticator/releases"}),")."]}),`
`,e.jsxs(t.p,{children:["Here, ",e.jsx(t.em,{children:"cryptographic attestation"})," becomes necessary. We have not published tools for validation yet, but you can perform it using this AWS guide (",e.jsx(t.a,{href:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html",children:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html"}),")."]}),`
`,e.jsxs(t.p,{children:["Every enclave request returns the attestation document. It comes in a Base64-encoded format in the ",e.jsx(t.code,{children:"X-Attestation-Document"})," response header. A request may also include a ",e.jsx(t.code,{children:"X-Attestation-Nonce"})," header. It contains a value that will be signed and included in the attestation document."]}),`
`,e.jsx(t.p,{children:"For example, you can get the attestation document by running:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-txt",children:`curl -si https://waas.sequence.app/health -H X-Attestation-Nonce:0123456789abcdef | grep x-attestation-document
`})})]})}function c(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default,r as frontmatter};
