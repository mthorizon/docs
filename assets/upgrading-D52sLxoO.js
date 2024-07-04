import{d as r,j as e}from"./index-Cpb5byZC.js";const a={title:"Sequence - Web3 Gaming Platform - Unreal SDK Authentication",description:"Documentation for Unreal SDK authentication for the Sequence infrastructure stack for web3 gaming."};function s(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"upgrading",children:["Upgrading",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"manually-upgrading-from-previous-versions",children:["Manually Upgrading from previous versions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manually-upgrading-from-previous-versions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["IF you are using release Beta_1_0_3 or older please backup the values you stored in ",e.jsx(n.code,{children:"PluginConfig/Config.h"})," or ",e.jsx(n.code,{children:"Config/Config.h"}),`
After you've backed up your configuration data, Delete the entirety of the SequencePlugin directory. And drop
in the new updated version.`]}),`
`,e.jsx(n.p,{children:`We now are opting to use .ini files to store configurations for the plugin rather than storing them in the plugin itself.
This will make integrating updates to the plugin much simpler.`}),`
`,e.jsxs(n.p,{children:["To do this please go to [YourProjectDirectory]/Config And create a file named ",e.jsx(n.strong,{children:"[SequenceConfig.ini]"})]}),`
`,e.jsxs(n.p,{children:["Within ",e.jsx(n.strong,{children:"[SequenceConfig.ini]"})," add the following lines:"]}),`
`,e.jsxs(n.p,{children:[`[/Script/Sequence.Config]
FallbackEncryptionKey = ""
WaaSTenantKey = ""
ProjectAccessKey = ""
GoogleClientID = ""
AppleClientID = ""
FacebookClientID = ""
DiscordClientID = ""
RedirectUrl = "`,e.jsx(n.a,{href:"https://api.sequence.app",children:"https://api.sequence.app"}),'"']}),`
`,e.jsx(n.p,{children:`Here is where you'll fill in the various configuration values for the plugin.
For the time being we don't support Facebook or Discord authentication so feel free to ignore those 2 clientId's for now.`}),`
`,e.jsxs(n.h3,{id:"upgrading-to-unreal-54",children:["Upgrading to Unreal 5.4",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading-to-unreal-54",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`If your project is currently on 5.2 or 5.3, then for this version you'll want to upgrade to 5.4.
To do this close the Unreal Editor, Close your Code Editor. Right click on your Unreal Project
file. Then select Switch Unreal Engine Version, Choose 5.4 and click okay. Once done. Open your
code editor and rebuild your source code.`}),`
`,e.jsxs(n.p,{children:["As way of future proofing we recommend installing visual studio 2022 in accordance with ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine",children:"these docs"}),`
as Unreal 5.4 and onward will be dropping support for visual studio 2019.`]}),`
`,e.jsxs(n.h3,{id:"yourprojectbuildcs",children:["YourProject.Build.cs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#yourprojectbuildcs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`In some instances your build.cs may not update properly for your project when this happens you'll be unable to import plugin,
if this occurs in your Projects Build.cs file please check the private Dependency module such that it includes "SequencePlugin":`}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    public SequenceTest(ReadOnlyTargetRules Target) : base(Target)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore" });'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //The line below is what you want"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		PrivateDependencyModuleNames.AddRange(new string[] { "SequencePlugin" });'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		// Uncomment if you are using Slate UI"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		// PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		// Uncomment if you are using online features"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		// PrivateDependencyModuleNames.Add("OnlineSubsystem");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		// To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	}"})})]})})]})}function o(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as default,a as frontmatter};
