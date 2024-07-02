import{d as r,j as e}from"./index-Crpb7LAF.js";const s={title:"Sequence - Web3 Gaming Platform - Unity SDK Setup",description:"Documentation for Unity SDK setup for the Sequence infrastructure stack for web3 gaming."};function i(t){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"getting-started-with-the-builtin-gui",children:["Getting Started With the Builtin GUI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started-with-the-builtin-gui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Once you have the ",e.jsx(n.code,{children:"SequencePlugin"})," folder, you'll need to go to your project directory and create a ",e.jsx(n.code,{children:"Plugins"}),` folder in it,
then copy over the `,e.jsx(n.code,{children:"SequencePlugin"})," folder into the ",e.jsx(n.code,{children:"Plugins"})," folder. If a ",e.jsx(n.code,{children:"Plugins"})," folder already exists just copy the ",e.jsx(n.code,{children:"SequencePlugin"})," folder into it."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Launch your project, then allow it to update the UProject Settings."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To find the ",e.jsx(n.code,{children:"SequencePlugin"})," content folder in your content drawer enable view plugin content"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"If you wish to use the in built sequence UI for login you have to do the following:"}),`
`,e.jsxs(n.p,{children:["a) Create a C++ Class that Inherits from ",e.jsx(n.strong,{children:"[Pawn]"})," If you don't know how to do this refer to the doc ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-cplusplus-class-wizard-in-unreal-engine?application_version=5.2",children:"Creating C++ Classes in Unreal"}),`,
for the purpose of these docs I'll refer to the C++ Class created here as the `,e.jsx(n.strong,{children:"[C++ Parent]"})]}),`
`,e.jsxs(n.p,{children:["b) In ",e.jsx(n.strong,{children:"[C++ Parent]"})," .h file include the Header ",e.jsx(n.strong,{children:"[SequenceAPI.h]"})," this will allow you to access the ",e.jsx(n.strong,{children:"[USequenceWallet]"})]}),`
`,e.jsxs(n.p,{children:["c) Create a BlueprintCallable function within the ",e.jsx(n.strong,{children:"[C++ Parent]"})," that accepts ",e.jsx(n.strong,{children:"[FCredentials_BE]"})," as a Parameter."]}),`
`,e.jsxs(n.p,{children:["d) Create a Blueprint that inherits from ",e.jsx(n.strong,{children:"[C++ Parent]"}),", Then Attach the following Actor component to it ",e.jsx(n.strong,{children:"[AC_SequencePawn_Component]"}),`. For in depth specifics on how to setup this blueprint
please refer to the demonstration BP Graph `,e.jsx(n.a,{href:"ReadmeImages/Example_BP.PNG",children:"Image"}),", this is the BP Graph of ",e.jsx(n.strong,{children:"[BP_CustomSpectatorPawn]"}),` contained within the plugins content folder, & serves as a template for your
own Blueprint graph.`]}),`
`,e.jsxs(n.p,{children:["The important part here is forwarding the Credentials received from the inbuilt UI to your ",e.jsx(n.strong,{children:"[C++ Parent]"})," by binding to the delegate from ",e.jsx(n.strong,{children:"[AC_SequencePawn_Component]"}),`,
that gives you Credentials `,e.jsx(n.strong,{children:"[Auth_Success_Forwarder]"}),` & Calling your Blueprint Callable C++ function.
You can do this by swapping the SetupCredentials BlueprintCallable Function for your own Blueprint Callable Function from `,e.jsx(n.strong,{children:"[C++ Parent]"}),"."]}),`
`,e.jsxs(n.p,{children:[`d i) For those who aren't familiar with Unreal's Blueprint system you can create a blueprint by right clicking in the content
drawer, then click blueprint class. Within the blueprint class selector select the All Classes dropdown & search`,e.jsx(n.br,{}),`
`,"for your ",e.jsx(n.strong,{children:"[C++ Parent]"})," class you just made."]}),`
`,e.jsx(n.p,{children:`d ii) For those who aren't familiar with Unreal's delegate system, There will be a red empty box on a delegate you'll wish
to bind to. Click on this box and drag out into the blueprint editor. From the menu that appears Click the Add Event dropdown
then click add custom event.`}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Note: You can simply duplicate the ",e.jsx(n.strong,{children:"[BP_CustomSpectatorPawn]"}),` but since it & its parent class reside within the realm of the plugin,
during updates all code you place there could potentially be lost. These are here as a reference for how things should be done. If you wish to use these components
it's recommended you duplicate the BP_CustomSpectatorPawn out of the plugin folder, then update it's parent class to a C++ class of your own making that also
resides outside the plugins content folder.`]}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Some additional setup of the GameMode will need to be done prior to any UI showing up. The SequencePlugin comes bundled with an example
GameMode `,e.jsx(n.strong,{children:"[GM_Sequence]"})," stored within ",e.jsx(n.strong,{children:"[Demonstration]"}),` in the plugin content folder. Duplicate this GameMode and move it outside the plugin folder.
Then open up `,e.jsx(n.strong,{children:"[GM_Sequence]"})," and set the DefaultPawn to the Pawn Blueprint you've just made."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Lastly in Project Settings you'll need to set this GameMode as the default GameMode. Specifically in ProjectSettings -> Maps & Modes"}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`If you don't know what some of the Entities referred to above are / how they work in unreal please refer to the following Docs:
To learn more about GameModes and GameMode state refer to `,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/game-mode-and-game-state-in-unreal-engine?application_version=5.2",children:"these docs"}),`
To learn more about Pawns refer to `,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/pawn-in-unreal-engine?application_version=5.2",children:"these docs"}),`
`,e.jsx(n.a,{href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/Pawn/",children:"Pawns"}),`
`,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/components-in-unreal-engine?application_version=5.2",children:"Components"}),`
`,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/player-controllers-in-unreal-engine?application_version=5.2",children:"PlayerController"}),`
`,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-widgets-in-unreal-engine?application_version=5.2",children:"UI in Unreal"}),`
`,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/cpp-and-blueprints-example?application_version=5.2",children:"C++ & Blueprints"}),`
`,e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/using-the-cplusplus-class-wizard-in-unreal-engine?application_version=5.2",children:"Creating C++ Classes in Unreal"})]}),`
`,e.jsxs(n.h5,{id:"take-away-notes-on-setup",children:["Take away notes on setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#take-away-notes-on-setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`This isn't the only way you can setup the Builtin GUI, this is here as a quick start reference for those
just getting started with unreal.`})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default,s as frontmatter};
