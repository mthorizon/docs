import{d as r,j as e}from"./index-Dbg4ExiF.js";const a={title:"Wallet Connector Integration FAQs for Next.js",description:"FAQ using Wallet Connectors."};function i(n){const s={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Below are frequently asked questions related to the integration of the Sequence wallet connector."}),`
`,e.jsxs(s.h2,{id:"nextjs",children:["NextJs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nextjs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"why-does-my-wallet-integration-produce-an-error-when-used-with-nextjs",children:["Why does my wallet integration produce an error when used with next.js?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-does-my-wallet-integration-produce-an-error-when-used-with-nextjs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Wallet libraries and connectors must be rendered in the browser. This is particularly true for Wagmi and Wagmi-based libraries. Attempts to render the page elsewhere, such as on backend server, can produce errors in some situations. Rendering on the server is therefore highly discouraged."}),`
`,e.jsxs(s.p,{children:["The method for fixing this issue will depend on the folder structure. The ",e.jsx(s.code,{children:"pages"})," folder structure is available for all versions of NextJs, while the ",e.jsx(s.code,{children:"app"})," folder structure is only available for NextJs version 13 and above and may require being turned on through an experimental setting."]}),`
`,e.jsxs(s.p,{children:["See using wallet libraries with ",e.jsx(s.a,{href:"/sdk/typescript/connectors/FAQ#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-pages-directory-all-versions-of-nextjs",children:"next.js pages directory"})]}),`
`,e.jsxs(s.p,{children:["See using wallet libraries with ",e.jsx(s.a,{href:"/sdk/typescript/connectors/FAQ#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only",children:"next.js app directory(NextJs 13+ feature)"})]}),`
`,e.jsxs(s.h3,{id:"how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-pages-directory-all-versions-of-nextjs",children:["How do I use a wallet library and connector with next.js using the ",e.jsx(s.code,{children:"pages"})," directory (all versions of NextJs)?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-pages-directory-all-versions-of-nextjs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The content of the application which depends on Wagmi hooks must be mounted only once the application is rendered in the client. This is a limitation due to wagmi when used with NextJs, and all wagmi-based libraries will inherit this limitation. To do so we can use a ",e.jsx(s.code,{children:"useEffect"})," hook to wait before rendering the application."]}),`
`,e.jsx(s.p,{children:"In the example below, we wait until the app is mounted in the client before rendering the rest of the application:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { useIsMounted } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '../hooks'"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Home "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '../components/Home'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" Page"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" isMounted"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" useIsMounted"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"isMounted) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"return"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" null"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    <>"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      <"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"Home"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    </>"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  )"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Page"})]})]})}),`
`,e.jsxs(s.p,{children:["A full code example of this setup working with the Wagmi library can be found ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-wagmi-next/tree/mount-hook",children:"on github"}),`.
The method described above is the one recommended by Wagmi and is demonstrated in their `,e.jsx(s.a,{href:"https://github.com/wagmi-dev/wagmi/blob/0.12.x/examples/_dev/src/pages/index.tsx",children:"official example"}),"."]}),`
`,e.jsxs(s.h3,{id:"how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only",children:["How do I use a wallet library and connector with next.js using the ",e.jsx(s.code,{children:"app"})," directory (version 13 and above only)?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["NextJs 13 and above allows using a new folder structure in which the content is placed in an ",e.jsx(s.code,{children:"app"}),` directory. Enabling this feature may require explicitly indicating it with an experimental setting.
When using such a folder structure, NextJs allows the declaration of Client Components which are components that will be rendered in the browser.
A wrapper component containing the wallet library initialized with all the connectors must be declared with the `,e.jsx(s.code,{children:'"use client"'})," directive. The ",e.jsx(s.code,{children:'"use client"'})," directive is what will turn the wrapper component into a Client Component to be rendered in the browser."]}),`
`,e.jsx(s.p,{children:"In addition, there is a bug with wagmi and nextJs when using the autoConnect feature which causes"}),`
`,e.jsxs(s.p,{children:["In the example below, we declare a wrapper component with the ",e.jsx(s.code,{children:'"use client"'})," directive:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"use client"'}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // this directive informs next.js that the component is a Client Component to be rendered in the browser"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" WagmiWrapper"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ({ "}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"children"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wagmiClient"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createClient"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    autoConnect: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    connectors,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    provider,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    webSocketProvider,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  });"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"WagmiConfig"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" client"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"{"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"wagmiClient"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"      {"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"children"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    </"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"WagmiConfig"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  );"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WagmiWrapper"})]})]})}),`
`,e.jsx(s.p,{children:"This wrapper component can then be imported normally and wrap the rest of the application. The child components can be a combination of Client and Server components."}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// We import a custom wrapper component that initializes the wallet library and all its connectors"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// An example of the content of this wrapper component can be found here: https://github.com/0xsequence/demo-dapp-wagmi-next/blob/master/components/WagmiProvider.tsx"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" WagmiWrapper "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" './WagmiWrapper'"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// We can then wrap our entire app with this browser's rendered component"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" MyApp"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ "}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"Component"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"pageProps"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AppProps"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"WagmiWrapper"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      <"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"Component"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:" {"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pageProps"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#F47067"},children:"}"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" />"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    </"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:"WagmiWrapper"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  );"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.p,{children:["A full code example using Nextjs and the ",e.jsx(s.code,{children:"app"})," directory can be found ",e.jsx(s.a,{href:"https://github.com/0xsequence/demo-dapp-wagmi-next/tree/use-client-method",children:"on github"}),`.
The method described above is the one recommended by Wagmi through their NextJs example which can be consulted by running the command `,e.jsx(s.code,{children:"npx create-wagmi"})," and selecting the nextJs option."]}),`
`,e.jsxs(s.p,{children:["Click ",e.jsx(s.a,{href:"https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components",children:"here"})," for more information about Client Components."]})]})}function o(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{o as default,a as frontmatter};
