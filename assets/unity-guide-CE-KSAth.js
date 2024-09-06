import{d as t,j as e}from"./index-BGwm5QN0.js";import{V as i}from"./Video-DImB9Kjy.js";const c={title:"Building and Integrating Web3 Game Features with Sequence's Unity SDK",description:"Intro to Jelly Forest - Unity Game Guide introduces a 2D runner game with blockchain features like social sign-in, upgrades, and cosmetic items stored in a smart contract wallet."};function a(s){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"intro-to-jelly-forest---unity-game-guide",children:["Intro to Jelly Forest - Unity Game Guide",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intro-to-jelly-forest---unity-game-guide",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Jelly Forest is a blockchain-enabled 2D runner game. The game features social sign in, multi-tiered upgrades (with higher tier requiring lower tier upgrades as inputs to build/mint), and cosmetic upgrades, all of which are stored in an embedded non-custodial smart contract wallet. There are no transaction signing popups or gas fee payment requirements emposed on players."}),`
`,e.jsx(i,{videoPreviewSrc:"/img/guides/making-of-jelly-forest/JellyForestPreview.png",videoSrc:"/video/unity/JellyForest.mp4"}),`
`,e.jsxs(n.p,{children:["Download it with Google Play ",e.jsx(n.a,{href:"https://play.google.com/store/apps/details?id=app.sequence.jelly_forest",children:"here"}),"!"]}),`
`,e.jsxs(n.p,{children:["Learn ",e.jsx(n.a,{href:"/solutions/technical-references/wallet-contracts/why",children:"why smart contract wallets here"})]}),`
`,e.jsxs(n.p,{children:["Learn ",e.jsx(n.a,{href:"/solutions/wallets/overview#what-are-the-differences-between-these-options",children:"what an embedded wallet is here"})]}),`
`,e.jsxs(n.p,{children:["This guide will walk you through how we built Jelly Forest and how you too can build your own web3 game using ",e.jsx(n.a,{href:"/sdk/unity/overview",children:"Sequence's Unity SDK"}),"!"]}),`
`,e.jsxs(n.h2,{id:"1-build-a-game-loop",children:["1. Build a game loop",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-build-a-game-loop",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Step number one is building basic game loop. Don't forget to think about your monetization strategy and how you'll be using web3 elements first!"}),`
`,e.jsxs(n.p,{children:["For our game loop, we purchased the ",e.jsx(n.a,{href:"https://assetstore.unity.com/packages/templates/systems/2d-3d-infinite-runner-engine-51328",children:"Infinite Runner Engine"})," from the Unity Asset Store. Inside the asset, we found a demo scene ",e.jsx(n.code,{children:"JellyForest"}),", which, with a few tweaks, we were able to get a functional build from on iOS and Android."]}),`
`,e.jsxs(n.h2,{id:"2-integrate-social-sign-in-and-sequences-embedded-wallet-solution",children:["2. Integrate social sign in and Sequence's Embedded Wallet solution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-integrate-social-sign-in-and-sequences-embedded-wallet-solution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"configuration",children:["Configuration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/sdk/unity/installation#package-manager---recommended",children:"Install Sequence's Unity SDK Using Package Manager"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/solutions/builder/getting-started",children:"Sign in to the Sequence Builder Console"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/support/builder/project-management",children:"Create a Project For Your Game in the Builder Console"})}),`
`,e.jsxs(n.li,{children:["Setup an ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet#embedded-wallet-in-builder",children:"Embedded Wallet in the Builder Console"})]}),`
`,e.jsxs(n.li,{children:["In your ",e.jsx(n.code,{children:"SequenceConfig"})," ",e.jsx(n.a,{href:"https://docs.unity3d.com/Manual/class-ScriptableObject.html",children:"scriptable object"})," which you imported via the Samples menu in Package Manager during the ",e.jsx(n.a,{href:"/sdk/unity/installation#package-manager---recommended",children:"installation stage"}),", add your Google and Apple client ids which you added to the Builder as well as your Configuration Key under ",e.jsx(n.code,{children:"WaaSConfigKey"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Don't forget to put your Android and iOS client ids under their respective platforms!"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Add your ",e.jsx(n.a,{href:"/solutions/builder/getting-started#claim-an-api-access-key",children:"Builder API Key from the Builder Console"})," under ",e.jsx(n.code,{children:"Settings > API Access Keys"})," - you want the ",e.jsx(n.code,{children:"prod"})," key"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"social-sign-in",children:["Social Sign In",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#social-sign-in",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create a basic scene where you will have your players login.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In our case, we ",e.jsx(n.a,{href:"https://docs.unity3d.com/Manual/scenes-working-with.html#creating-a-new-scene",children:"created a new scene"})," and added a background image to it"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Create a ",e.jsx(n.code,{children:"Canvas"}),", attach a ",e.jsx(n.code,{children:"Canvas Scaler"}),' component and use the "Scale with Screen Size" UI Scale Mode. This will make it so that the LoginPanel (and any other UI elements under this Canvas) are scaled automatically when switching between build targets.']}),`
`,e.jsxs(n.li,{children:["Drag the ",e.jsx(n.code,{children:"LoginPanel"})," prefab into your Scene Hierarchy under the Canvas. This can be found in the Project window under ",e.jsx(n.code,{children:"Packages > Sequence Embedded Wallet SDK > SequenceFrontend > Prefabs"}),"."]}),`
`,e.jsxs(n.li,{children:["Create a UI manager to call ",e.jsx(n.code,{children:"Open"})," on the ",e.jsx(n.code,{children:"LoginPanel"}),". See ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/UI/LoginScreenUIManager.cs",children:"our implementation"})," below:"]}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private void Start()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    LoginPanel loginPanel = GetComponentInChildren<LoginPanel>();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (loginPanel == null)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        Debug.LogError("LoginPanel not found!");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    loginPanel.Open();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:["Break the reference to the ",e.jsx(n.code,{children:"LoginPanel"})," prefab in the Hierarchy so that you can edit it freely in the scene view",`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Select the ",e.jsx(n.code,{children:"LoginPanel"})," GameObject in the Hierarchy"]}),`
`,e.jsxs(n.li,{children:["Right click the ",e.jsx(n.code,{children:"LoginPanel"})," GameObject in the Hierarchy"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Prefab > Unpack Completely"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Customize the LoginPanel to fit your game's theme"}),`
`]}),`
`,e.jsxs(n.p,{children:["The LoginPanel will handle all of the social sign in logic for you. If you're curious how it's implemented, you can checkout the ",e.jsx(n.code,{children:"LoginPage"})," and ",e.jsx(n.code,{children:"OpenIdAuthenticator"}),` implementations.
The authentication works via the `,e.jsx(n.a,{href:"https://auth0.com/docs/authenticate/login/oidc-conformant-authentication/oidc-adoption-implicit-flow",children:"Open ID Connect Implicit Flow"}),"."]}),`
`,e.jsxs(n.h3,{id:"registering-a-session-with-the-sequence-api",children:["Registering a Session with the Sequence API",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#registering-a-session-with-the-sequence-api",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Once social sign in is complete, you will automatically make a register session request with the Sequence WaaS (Wallet as a Service) APIs. Here's how it works:"}),`
`,e.jsxs(n.p,{children:["When social sign in is complete, the ",e.jsx(n.code,{children:"OpenIdAuthenticator.SignedIn"})," event is fired. This initiates the authorization process in ",e.jsx(n.code,{children:"SequenceLogin.ConnectToWaaS"}),"."]}),`
`,e.jsxs(n.h3,{id:"retrieving-the-users-wallet",children:["Retrieving the User's Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieving-the-users-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In order to retrieve the wallet, you'll need to subscribe to the ",e.jsx(n.code,{children:"SequenceWallet.OnWalletCreated"})," event."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SequenceWallet.OnWalletCreated += OnWalletCreatedHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public void OnWalletCreatedHandler(SequenceWallet wallet) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  // Do something"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["We highly recommend you import ",e.jsx(n.code,{children:"SequenceConnector"}),' via the "Useful Scripts" under Samples in the Package Manager page for the "Sequence Embedded Wallet SDK". ',e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Packages/Sequence-Unity/Sequence/Samples~/Scripts/SequenceConnector.cs",children:"By default, it contains a lot of helpful starting code"})," and acts as a useful interface to communicate with the SDK. We used it quite heavily ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/SequenceConnector.cs",children:"in our integration with JellyForest"}),"."]}),`
`,e.jsxs(n.p,{children:["In JellyForest, we also created a ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/LevelLoader.cs",children:"LevelLoader"})," MonoBehaviour that loads the next scene when the ",e.jsx(n.code,{children:"SequenceWallet.OnWalletCreated"})," event is fired."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private void Awake()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    SequenceWallet.OnWalletCreated += OnWalletCreated;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private void OnWalletCreated(SequenceWallet wallet)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    SceneManager.LoadScene("MenuScene");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["For more information on how auth in Sequence's Embedded Wallet solution works, please see our ",e.jsx(n.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"docs"})," and ",e.jsx(n.a,{href:"https://sequence.xyz/blog/sequence-embedded-wallets",children:"blog post"}),"."]}),`
`,e.jsxs(n.h2,{id:"3-deploy-a-collectibles-contract",children:["3. Deploy a Collectibles Contract",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-deploy-a-collectibles-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Now that our players can sign in and get a wallet, let's add some collectibles!"}),`
`,e.jsxs(n.p,{children:["We highly recommend using an ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"ERC1155"})," contract. They are a flexibly token standard that are well suited for games. You can easily deploy our audited ERC1155 implementation via the Builder Console like this:"]}),`
`,e.jsx(i,{videoPreviewSrc:"/img/builder/builder_deploy_contracts.png",videoSrc:"/video/builder/03_Contracts.mp4"}),`
`,e.jsx(n.p,{children:"This is what we did for Jelly Forest."}),`
`,e.jsxs(n.p,{children:["Once you've deployed your smart contract, don't forget to ",e.jsx(n.a,{href:"/solutions/builder/gas-tank#gas-tank-in-builder",children:'add your contract address as a Sponsored Address on the "Gas Sponsoring"'})," page on the Builder Console! This will make it so that your users have their gas fees automatically sponsored using your compute credits when interacting with your game's smart contracts."]}),`
`,e.jsxs(n.h2,{id:"4-deploy-a-remote-minter",children:["4. Deploy a Remote Minter",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-deploy-a-remote-minter",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"By default, ERC1155 contracts deployed via the Builder Console require callers to have the appropriate permissions in order to mint a token. While this may seem like a nuisance at first glance, this is a good thing! Without this, anyone could call the mint method on your contract and give themselves infinite in-game items!"}),`
`,e.jsx(n.p,{children:"You'll want to deploy a server with a Sequence wallet (or other) and give it minting permissions in the builder."}),`
`,e.jsxs(n.h3,{id:"how-we-did-it-in-jelly-forest",children:["How We Did It in Jelly Forest",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-we-did-it-in-jelly-forest",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In Jelly Forest, all the coins you collect during gameplay are minted as ERC1155 tokens. Here's how we did it:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Sign up for ",e.jsx(n.a,{href:"https://www.cloudflare.com/",children:"Cloudflare"})," - this is how we host the minting service code; please feel free to use any other method you prefer"]}),`
`,e.jsx(n.li,{children:"Open terminal or other command line"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"git clone https://github.com/0xsequence-demos/cloudflare-worker-sequence-relayer.git"})," then ",e.jsx(n.code,{children:"cd cloudflare-worker-sequence-relayer"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"git checkout permissionedMinter"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pnpm install"})," - to install dependancies"]}),`
`,e.jsx(n.li,{children:"Install wrangler"}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"pnpm install wrangler --save-dev"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"alias wrangler='./node_modules/.bin/wrangler'"})})]})}),`
`,e.jsx(n.p,{children:"and login"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"wrangler login"})})})}),`
`,e.jsxs(n.ol,{start:"7",children:[`
`,e.jsxs(n.li,{children:["Open ",e.jsx(n.code,{children:"wrangler.toml"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Give your server a name by changing the ",e.jsx(n.code,{children:"name"})," string"]}),`
`,e.jsxs(n.li,{children:["Create a new ",e.jsx(n.a,{href:"https://ethereum.stackexchange.com/questions/5828/what-is-an-eoa-account",children:"EOA wallet"})," and export the private key. Any EOA wallet is fine. Metamask can be used to easily ",e.jsx(n.a,{href:"https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask",children:"setup a wallet"})," and ",e.jsx(n.a,{href:"https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key",children:"export the private key"}),". Please be very careful with the private key and don't store it in plain text on your computer or commit it to version control! Set this under ",e.jsx(n.code,{children:"PKEY"})]}),`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"CONTRACT_ADDRESS"})]}),`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"PROJECT_ACCESS_KEY"})," - this is your prod API key from the Builder Console you retrieved earlier when setting up the ",e.jsx(n.code,{children:"SequenceConfig"})," scriptable object"]}),`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"CHAIN_HANDLE"})," - if you're not sure what this is, you can see the ",e.jsx(n.code,{children:"CHAIN_HANDLE"})," for each respective network on the Node Gateway page of the Builder Console."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pnpm dev"})," - this will deploy the server locally. You should see which localhost it is deployed to in the command line"]}),`
`,e.jsx(n.li,{children:"Open another command line window"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"curl http://localhost:8787"})," - substitute whichever localhost you are given. This will ping the server."]}),`
`,e.jsx(n.li,{children:"In the command line where the localhost server is running, you should see that the minter's wallet address has been logged"}),`
`,e.jsxs(n.li,{children:["Grant this address minting permissions in the Builder Console",`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Find the contract under ",e.jsx(n.code,{children:"Contracts"})," and click to open it"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.code,{children:"Write Contract"})]}),`
`,e.jsxs(n.li,{children:["Expand ",e.jsx(n.code,{children:"grantRole"})]}),`
`,e.jsxs(n.li,{children:["Under ",e.jsx(n.code,{children:"role"})," enter ",e.jsx(n.code,{children:"0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"})," - this is the Keccak-256 hash of ",e.jsx(n.code,{children:"MINTER_ROLE"})]}),`
`,e.jsxs(n.li,{children:["Under ",e.jsx(n.code,{children:"account"})," paste the minter's wallet address"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"wrangler deploy"})," - this will deploy the code to a ",e.jsx(n.a,{href:"https://developers.cloudflare.com/workers/",children:"Cloudflare Worker"})," and give you a minting URL"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Great! Now, when we send a POST request to our server with a body ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Packages/Sequence-Unity/Sequence/SequenceSDK/Relayer/MintingRequestProver.cs#L103",children:"defined in C#"}),", where the ",e.jsx(n.code,{children:"proof"})," is generated by the client sending the minting request. In the Unity SDK this is implemented by the ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Packages/Sequence-Unity/Sequence/SequenceSDK/Relayer/MintingRequestProver.cs#L27",children:"MintingRequestProver"}),"."]}),`
`,e.jsxs(n.h2,{id:"5-mint-in-game-tokens-to-the-players-inventory",children:["5. Mint In-game Tokens to the Player's Inventory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-mint-in-game-tokens-to-the-players-inventory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Now that we have our permissioned minter server setup, we need to get the client side (the Made With Unity app) hooked up so that we can start giving our players tokens through gameplay. We can send a request to the permissioned minter using the Unity SDK by calling the ",e.jsx(n.code,{children:"PermissionedMinter.MintToken"})," method."]}),`
`,e.jsx(n.p,{children:"In Jelly Forest, as the player runs through the level they collect a lot of coins, these are all ERC1155 tokens. There are still a few challenges we need to solve for in order to provide our players with a great UX."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"How do you read the chain to know what tokens/entitlements the user has in their inventory?"}),`
`,e.jsx(n.li,{children:"Blockchain transactions, while fast on some chains like Arbitrum, are not instant. Collecting a coin (or some other item) then needing to wait a few seconds before it shows up in your inventory in the game is, in general, not a great end-user experience."}),`
`,e.jsxs(n.li,{children:["At first glance, you may be tempted to submit a transaction anytime a user earns a token via your game. However, in most games, especially games like Jelly Forest where players collect a lot of coins (tokens), this will end up submitting a ton of transactions and will cost you a fortune in ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/gas/",children:"gas fees"}),"!"]}),`
`]}),`
`,e.jsx(n.p,{children:"Let's see how we solved for all of these problems in Jelly Forest using the Unity SDK!"}),`
`,e.jsxs(n.h3,{id:"1-reading-the-chain",children:["1. Reading the Chain",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-reading-the-chain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Reading the tokens in a given user's wallet is a complicated process that is made much easier using ",e.jsx(n.a,{href:"/api/indexer/overview",children:"Sequence's Indexer"})," which the ",e.jsx(n.a,{href:"/sdk/unity/read-from-blockchain",children:"Unity SDK implements"}),"."]}),`
`,e.jsx(n.p,{children:"Here's a code snippet from Jelly Forest where we use the Indexer to read all the tokens in a player's wallet from our game's ERC1155 contract."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private Dictionary<BigInteger, TokenBalance> _tokenBalances = new Dictionary<BigInteger, TokenBalance>();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private async Task GetTokenBalances(Page page = null)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (page == null)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        page = new Page();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    GetTokenBalancesReturn balances = await _indexer.GetTokenBalances(new GetTokenBalancesArgs(_userAddress, SequenceConnector.ContractAddress, false, page));"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    int uniqueTokens = balances.balances.Length;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    for (int i = 0; i < uniqueTokens; i++)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        _tokenBalances[balances.balances[i].tokenID] = balances.balances[i];"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (balances.page.more)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        await GetTokenBalances(balances.page);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.h3,{id:"2-building-a-cache",children:["2. Building a Cache",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-building-a-cache",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Since blockchain transactions are not instant but we want to provide our user with instant feedback, we'll make use of a simple in-memory cache."}),`
`,e.jsxs(n.p,{children:["When we first receive our ",e.jsx(n.code,{children:"SequenceWallet"})," in Jelly Forest, ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/SequenceConnector.cs",children:"SequenceConnector"}),", which we used as our primary interface for communicating with the Sequence SDK in our game, creates an ",e.jsx(n.code,{children:"Inventory"}),"."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-focused",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"private void OnWalletCreated(SequenceWallet wallet)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet = wallet;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnSendTransactionComplete += OnSendTransactionCompleteHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnSendTransactionFailed += OnSendTransactionFailedHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnSignMessageComplete += OnSignMessageCompleteHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnDeployContractComplete += OnDeployContractCompleteHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnDeployContractFailed += OnDeployContractFailedHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnDropSessionComplete += OnDropSessionCompleteHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    Wallet.OnSessionsFound += OnSessionsFoundHandler;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line focused",children:e.jsx(n.span,{children:"    Inventory = new Inventory(Indexer, Wallet.GetWalletAddress(), ItemCatalogue);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    _transactionQueuer.Setup(Wallet, Chain);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    _permissionedMinterTransactionQueuer.Setup(Wallet, Chain, "https://sequence-relayer-jelly-forest2.tpin.workers.dev/", ContractAddress);'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Inventory"})," is used as a simple cache in our game. When first created, and when prompted, we use the Indexer to fetch all the tokens in the users wallet. From here, whenever the user earns a token, we update our cache (",e.jsx(n.code,{children:"Inventory"}),") and the on-chain data."]}),`
`,e.jsxs(n.p,{children:["Read the full ",e.jsx(n.code,{children:"Inventory"})," ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Inventory.cs",children:"implementation here"})]}),`
`,e.jsxs(n.h3,{id:"3-using-a-transaction-queue",children:["3. Using a Transaction Queue",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-using-a-transaction-queue",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Sequence's Unity SDK provides a very flexible ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Packages/Sequence-Unity/Sequence/SequenceSDK/Relayer/TransactionQueuer.cs",children:"transaction queueing system"}),"."]}),`
`,e.jsxs(n.p,{children:["In Jelly Forest, we attached a ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Packages/Sequence-Unity/Sequence/SequenceSDK/Relayer/PermissionedMinterTransactionQueuer.cs",children:"PermissionedMinterTransactionQueuer"})," MonoBehaviour to our ",e.jsx(n.code,{children:"SequenceConnector"})," GameObject and ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/SequenceConnector.cs#L59",children:"grab a reference to it in Awake"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/guides/making-of-jelly-forest/TransactionQueuer.png",alt:"PermissionedMinterTransactionQueuer"})}),`
`,e.jsxs(n.p,{children:["Once ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/SequenceConnector.cs#L78",children:"this is setup"}),', all we need to do when a token is collected is call "mint token".']}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-focused",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public class CollectibleToken : Coin"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    protected override void ObjectPicked()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        base.ObjectPicked();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        if (SequenceConnector.Instance == null || SequenceConnector.Instance.Wallet == null)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'            Debug.LogWarning("No minting will happen. Make sure SequenceConnector is in the scene and user is logged in.");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            return;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        }"})}),`
`,e.jsx(n.span,{className:"line focused",children:e.jsx(n.span,{children:"        SequenceConnector.Instance.MintFungibleToken();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["This will update our ",e.jsx(n.code,{children:"Inventory"})," and add a mint transaction to the ",e.jsx(n.code,{children:"PermissionedMinterTransactionQueuer"}),"'s queue. The ",e.jsx(n.code,{children:"PermissionedMinterTransactionQueuer"})," will automatically merge transactions together when possible so that you spend the least amount of money on gas fees as possible."]}),`
`,e.jsx(n.p,{children:"In Jelly Forest, we've configured our transaction queuer to submit transactions every time the player has a game over, but no sooner than every 30 seconds."}),`
`,e.jsxs(n.h4,{id:"how-do-you-determine-how-often-to-submit-your-transactions",children:["How Do You Determine How Often to Submit Your Transactions?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-you-determine-how-often-to-submit-your-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"With our Unity SDK, this becomes more of a game design question than anything else."}),`
`,e.jsxs(n.p,{children:["Our ",e.jsx(n.code,{children:"TransactionQueuers"})," can be configured to submit transactions automatically every X seconds, when promted (via function call) but no sooner than every Y seconds, or when prompted overriding any minimum time threshhold configured (Y seconds)."]}),`
`,e.jsx(n.p,{children:"Here are some things to consider when determining how to configure your transaction queuers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The more frequently you submit transactions, the more gas fees you'll pay. Of course, the EVM-compatible blockchain you select will heavily influence the number and complexity of transactions you can submit before costs become prohibitive."}),`
`,e.jsx(n.li,{children:"The less often you submit tranactions, the further out of sync your game state (cache) will become with the information on-chain. If a transaction were to fail, you will need a way to recover from this without hurting your players' experience of the game."}),`
`]}),`
`,e.jsx(n.p,{children:"As an example from Jelly Forest: we felt that the Shops' transactions were of high importance to the end user. We didn't want to risk a user thinking they had an upgrade/hat and then having the transaction fail and needing to either revoke the upgrade/hat or mint an extra one that the player may not have legitemately earned. So, we made it so that the user waits on the Shop pages until the purchase transaction (and all other transaction in the TransactionQueuers) have succeeded."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"public async Task Buy()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (Status != ItemStatus.Available)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        return;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (SequenceConnector.Instance == null)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        string error = "SequenceConnector not found. User has not logged in";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        Debug.LogError($"Failed to purchase shop item: {error}");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        OnFailedToPurchaseShopItem?.Invoke($"Failed to purchase shop item: {error}");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        return;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    SequenceConnector.Instance.AddToTransactionQueue(new PurchaseShopItemQueueableTransaction(this));"})}),`
`,e.jsx(n.span,{className:"line highlighted",children:e.jsx(n.span,{children:"    TransactionReturn result = await SequenceConnector.Instance.SubmitQueuedTransactions(true, false);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (result is SuccessfulTransactionReturn successfulTransactionReturn)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        BurnTokensFromInventory();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        MintTokenInInventory()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        if (string.IsNullOrWhiteSpace(successfulTransactionReturn.txHash))"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"            GetTransactionReceipt(successfulTransactionReturn);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    else if (result is FailedTransactionReturn failed)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        string error = $"Transaction failed: {failed.error}";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        Debug.LogError(error);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        OnFailedToPurchaseShopItem?.Invoke($"Failed to purchase shop item: {error}");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    else"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'        throw new Exception("Unexpected transaction result type");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.h2,{id:"6-burn-in-game-tokens-in-exchange-for-others",children:["6. Burn In-game Tokens in Exchange for Others",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-burn-in-game-tokens-in-exchange-for-others",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In Jelly Forest, you can purchase powerups and cosmetics by burning coins and (sometimes) lower tier powerups."}),`
`,e.jsxs(n.p,{children:["To enable and enforce this mechanic, we deployed a simple ",e.jsx(n.a,{href:"https://polygonscan.com/address/0x80329e7f4F006E3178Db369425329759157B5a2a#code",children:"BurnToMint smart contract"}),". This contract allows you to specify minting requirements (required token ids and associated amounts) for a given token id. When it receives a batch of ERC1155 tokens and the sender specifies the token id they want to mint in the ",e.jsx(n.code,{children:"data"})," parameter, the contract will check if it received the required amount of each token id; if this passes, the contract burns the tokens and mints the requested token id to the sender (user); otherwise, the transaction fails and reverts."]}),`
`,e.jsx(n.p,{children:"We've given this contract minting permissions for our game contract in the Builder Console:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Find the contract under ",e.jsx(n.code,{children:"Contracts"})," and click to open it"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.code,{children:"Write Contract"})]}),`
`,e.jsxs(n.li,{children:["Expand ",e.jsx(n.code,{children:"grantRole"})]}),`
`,e.jsxs(n.li,{children:["Under ",e.jsx(n.code,{children:"role"})," enter ",e.jsx(n.code,{children:"0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"})," - this is the Keccak-256 hash of ",e.jsx(n.code,{children:"MINTER_ROLE"})]}),`
`,e.jsxs(n.li,{children:["Under ",e.jsx(n.code,{children:"account"})," paste the minter's wallet address"]}),`
`]}),`
`,e.jsx(n.aside,{"data-callout":"danger",children:e.jsxs(n.p,{children:["Warning: the ",e.jsx(n.code,{children:"BurnToMint"})," smart contract shared above has not been audited by a third party. Re-use with caution!"]})}),`
`,e.jsxs(n.p,{children:["When a user purchases an upgrade or cosmetic from the shop, we send a transaction to the ",e.jsx(n.code,{children:"BurnToMint"})," smart contract by adding a ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Items/ShopItem.cs#L109",children:"PurchaseShopItemQueueableTransaction"})," to our ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Packages/Sequence-Unity/Sequence/SequenceSDK/Relayer/SequenceWalletTransactionQueuer.cs",children:"SequenceWalletTransactionQueuer"})," in our ",e.jsx(n.code,{children:"SequenceConnector"}),"."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"SequenceConnector.Instance.AddToTransactionQueue(new PurchaseShopItemQueueableTransaction(this));"})})})}),`
`,e.jsxs(n.h2,{id:"7-building-the-shop-pages-and-setting-the-minting-requirements",children:["7. Building the Shop Pages and Setting the Minting Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#7-building-the-shop-pages-and-setting-the-minting-requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["When building the Shop Pages and setting the prices/minting requirements for the different upgrades and hats in Jelly Forest, we opted to define ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Items/ShopItem.cs",children:"ShopItems"})," using ",e.jsx(n.a,{href:"https://docs.unity3d.com/Manual/class-ScriptableObject.html",children:"Scriptable Objects"})," because they are easy to tweak and visualize since they can be serialized in the Inspector. These scriptable objects are also how we define what each ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Items/Item.cs",children:"Item"})," is and associate them with a token id."]}),`
`,e.jsxs(n.p,{children:["However, it quickly became a pain (not to mention a potential source for bugs) to keep the minting requirements defined in the Scriptable Objects in sync with the minting requirements defined in our ",e.jsx(n.code,{children:"BurnToMint"})," contract on-chain."]}),`
`,e.jsxs(n.p,{children:["We created an ",e.jsx(n.a,{href:"https://learn.unity.com/tutorial/editor-scripting",children:"editor extension"})," for our ",e.jsx(n.code,{children:"ShopItem"})," scriptable objects adding a button that, when pressed, will check if the minting requirements defined on-chain match what is defined in the scriptable object; if they differ, it will send a transaction to update the minting requirements in the ",e.jsx(n.code,{children:"BurnToMint"})," contract on-chain to match the scriptable object. The transaction is submitted via an EOA wallet created from a private key stored as an environment variable on one of our developer's machines. This EOA wallet is the ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/2.x/access-control#ownership-and-ownable",children:"owner"})," of this contract."]}),`
`,e.jsx(n.p,{children:"In fact, our Shop Pages actually query the smart contract every 60 seconds (and every time they open) for changes in minting requirements, updating their UI accordingly. This allows us to make live patches to our game's economy without requiring an update!"}),`
`,e.jsx(n.p,{children:"Click on the video below"}),`
`,e.jsx(i,{width:"500",height:"315",videoPreviewSrc:"/img/guides/making-of-jelly-forest/ShopItemExtensionScreenshot.png",videoSrc:"/video/unity/ShopItemExtension.mp4"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Editor/ShopItemEditorExtension.cs",children:"ShopItemEditorExtension implementation here"}),"."]}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"8-leverage-purchased-items-in-game",children:["8. Leverage Purchased Items In-game",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#8-leverage-purchased-items-in-game",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Ok great, our players can log in, get a wallet, earn tokens, and buy things with their tokens, all that's left is to give your players a reason to want to buy stuff in the first place. In other words, it's time to go work your game developer magic and build some awesome powerups and cosmetics!"}),`
`,e.jsx(n.p,{children:"All you have to do to bring your tokens into your game is check if the user owns enough of the given token id and apply the token's effect."}),`
`,e.jsxs(n.p,{children:["In Jelly Forest, we defined a few different ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Items/ItemCatalogue.cs#L13",children:"PowerUpTypes"})," and assign each ",e.jsx(n.code,{children:"Item"})," a ",e.jsx(n.code,{children:"PowerUpType"})," and tier. Then ",e.jsxs(n.a,{href:"https://github.com/0xsequence/sequence-unity-demo/blob/JellyForest/Scripts/Inventory.cs#L138",children:["we query our ",e.jsx(n.code,{children:"Inventory"})," to find the best power up of each type"]})," that the player owns."]})]})}function o(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{o as default,c as frontmatter};
