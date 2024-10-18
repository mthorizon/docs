import{d as a,j as s}from"./index-Daxqvjsd.js";const l={title:"Sequence - Web3 Gaming Platform - Universal Wallet Quickstart",description:"Quickstart for Universal Wallet for the Sequence infrastructure stack for web3 gaming."};function n(i){const e={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",...a(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"quickstart",children:["Quickstart",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quickstart",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h2,{id:"try-a-demo",children:["Try a Demo",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#try-a-demo",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.aside,{"data-callout":"info",children:s.jsxs(e.p,{children:["Try out the Universal Wallet leveraging Sequence Kit at our ",s.jsx(e.a,{href:"https://0xsequence.github.io/kit/",children:"demo"})]})}),`
`,s.jsxs(e.h2,{id:"template",children:["Template",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#template",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.aside,{"data-callout":"info",children:s.jsxs(e.p,{children:["Get started quickly with a ",s.jsx(e.a,{href:"https://github.com/0xsequence/kit/tree/master/examples/react",children:"template"})," using Sequence Kit"]})}),`
`,s.jsxs(e.h2,{id:"install",children:["Install",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#install",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The sequence.js SDK is composed of several sub-packages combined into a single meta-package called ",s.jsx(e.code,{children:"0xsequence"}),`.
To add the SDK to your project, add a dependency on 0xsequence to your package.json:`]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,s.jsx(e.p,{children:"or"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pnpm"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,s.jsx(e.p,{children:"or"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"yarn"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xsequence"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ethers"})]})})}),`
`,s.jsxs(e.p,{children:[`If you know that your project only requires specific sub-packages, you can also depend on those directly with
`,s.jsx(e.code,{children:"npm add @0xsequence/<sub-package name>"}),"."]}),`
`,s.jsx(e.p,{children:"Your package.json should look something like this (actual version may vary):"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "name"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"my-dapp"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#B31D28",fontStyle:"italic","--shiki-dark":"#FF938A","--shiki-dark-font-style":"italic"},children:"  ..."})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "dependencies"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "0xsequence"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"^1.0.0"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "ethers"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#B31D28",fontStyle:"italic","--shiki-dark":"#FF938A","--shiki-dark-font-style":"italic"},children:"^"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"5.7"}),s.jsx(e.span,{style:{color:"#B31D28",fontStyle:"italic","--shiki-dark":"#FF938A","--shiki-dark-font-style":"italic"},children:"."}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    ..."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}"})})]})}),`
`,s.jsxs(e.h4,{id:"cdn-distribution-as-native-js",children:["CDN distribution as native JS",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cdn-distribution-as-native-js",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Optionally, ",s.jsx(e.code,{children:"0xsequence"})," can be installed as a JS script source (UMD distribution) via:"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"script"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" src"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://cdn.ethers.io/lib/ethers-5.7.umd.min.js"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"></"}),s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"script"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"script"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" src"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://unpkg.com/0xsequence@latest/dist/0xsequence.umd.min.js"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"></"}),s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"script"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]})]})})]})}function d(i={}){const{wrapper:e}={...a(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{d as default,l as frontmatter};
