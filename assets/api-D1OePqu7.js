import{d as l,j as e}from"./index-liIajBV0.js";const c={title:"Sequence - Web3 Gaming Platform - Unreal SDK Authentication",description:"Documentation for Unreal SDK authentication for the Sequence infrastructure stack for web3 gaming."};function a(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"sequence-api",children:["Sequence API",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-api",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[`In order to gain access to the SequenceAPI be sure to #include "Sequence/SequenceAPI.h"
After you've completed initial authentication and have intercepted the credentials either through your UI or ours, to use the Sequence API you'll need to create a `,e.jsx(n.code,{children:"[USequenceWallet*]"})," by using:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Automatically tries to read stored credentials on disk and initialize with them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   if none are found returns a TOptional<USequenceWallet*> Pointer without any set Credentials"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"USequenceWallet::Get()"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   USequenceWallet * Wallet = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   //Use here"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   returns a TOptional<USequenceWallet*> Pointer set with the "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   given Credentials"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"USequenceWallet::Get(const FCredentials_BE& Credentials)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   USequenceWallet * Wallet = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   //Use here"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"/*"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   returns a TOptional<USequenceWallet*> Pointer set with the "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   given Credentials & ProviderUrl"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"*/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"USequenceWallet::Get(const FCredentials_BE& Credentials,const FString& ProviderUrl);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials,"ProviderUrl");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   USequenceWallet * Wallet = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   //Use here"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.p,{children:["Once you have your ",e.jsx(n.code,{children:"[USequenceWallet]"})," you can feel free to call any of the functions Supplied by the object, as the register call is now automatically done for you."]}),`
`,e.jsxs(n.h2,{id:"usequencewallet-static-access--persistence",children:["USequenceWallet, Static Access & Persistence",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usequencewallet-static-access--persistence",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`USequenceWallet is now a Subsystem of GameInstance, what this means is not only can you access it from anywhere
as if it was a static variable in your C++ code. But it also persists for the lifetime of your game. That is
no data is reset when a level is changed in your games!`}),`
`,e.jsxs(n.h2,{id:"usequencewallet-functions",children:["USequenceWallet Functions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usequencewallet-functions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"example-signmessage",children:["Example SignMessage",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-signmessage",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"used-to-sign-a-message",children:["Used to Sign a message",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#used-to-sign-a-message",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TSuccessCallback<FSignedMessage> OnResponse = [=] (const FSignedMessage& Response)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	//Response is the signed message"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const FFailureCallback OnFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	UE_LOG(LogTemp,Display,TEXT("Error Message: %s"),*Error.Message);'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'   const FString Message = "Hi";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Api->SignMessage(Message,OnResponse,OnFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})})]})}),`
`,e.jsxs(n.h3,{id:"example-sendtransaction",children:["Example SendTransaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-sendtransaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"used-to-send-a-transaction--perform-contract-calls",children:["Used to send a transaction / perform contract calls",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#used-to-send-a-transaction--perform-contract-calls",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`Note: if you want call contracts with the Raw type you'll want include the header
`,e.jsx(n.code,{children:'#include "ABI/ABI.h"'})," in order to use the ABI to encode the data for a contract call."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback OnFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		UE_LOG(LogTemp,Display,TEXT("Error Message: %s"),*Error.Message);'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Create the Transaction object list"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	TArray<TUnion<FRawTransaction,FERC20Transaction,FERC721Transaction,FERC1155Transaction>> Txn;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Create the transactions you wish to perform"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //ERC20"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	FERC20Transaction T20;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T20.to = "0x0E0f9d1c4BeF9f0B8a2D9D4c09529F260C7758A2";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T20.tokenAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T20.value = "1000";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //ERC721"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	FERC721Transaction T721;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	T721.safe = true;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T721.id = "54530968763798660137294927684252503703134533114052628080002308208148824588621";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T721.to = "0x0E0f9d1c4BeF9f0B8a2D9D4c09529F260C7758A2";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T721.tokenAddress = "0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //ERC1155"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	FERC1155Transaction T1155;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T1155.to = "0x0E0f9d1c4BeF9f0B8a2D9D4c09529F260C7758A2";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T1155.tokenAddress = "0x631998e91476DA5B870D741192fc5Cbc55F5a52E";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	FERC1155TxnValue Val;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	Val.amount = "1";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	Val.id = "66635";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	T1155.vals.Add(Val);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Raw (Example contract call)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'    FString FunctionSignature = "balanceOf(address,uint256)";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	TFixedABIData Account = ABI::Address(FAddress::From("0E0f9d1c4BeF9f0B8a2D9D4c09529F260C7758A2"));'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	TFixedABIData Id = ABI::UInt32(0x01);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	TArray<ABIEncodeable*> Arr;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	Arr.Add(&Account);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	Arr.Add(&Id);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	FUnsizedData EncodedData = ABI::Encode(FunctionSignature, Arr);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	FRawTransaction T;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T.data = "0x" + EncodedData.ToHex();'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T.to = "0x64d9f9d527abe2a1c1ce3fada98601c4ac5bfdd2";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	T.value = "0";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Now append your transaction requests to the Txn object"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	Txn.Push(TUnion<FRawTransaction,FERC20Transaction,FERC721Transaction,FERC1155Transaction>(T20));//ERC20"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	Txn.Push(TUnion<FRawTransaction,FERC20Transaction,FERC721Transaction,FERC1155Transaction>(T721));//ERC721"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	Txn.Push(TUnion<FRawTransaction,FERC20Transaction,FERC721Transaction,FERC1155Transaction>(T1155));//ERC1155"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	Txn.Push(TUnion<FRawTransaction,FERC20Transaction,FERC721Transaction,FERC1155Transaction>(T));//ContractCall"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Now send the transaction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"      USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->SendTransaction(Txn,[=](const FTransactionResponse& Transaction)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"          TSharedPtr<FJsonObject> Json = Transaction.Json;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  TSharedPtr<FJsonObject> Receipt = Transaction.Receipt;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  TSharedPtr<FJsonObject> NativeReceipt = Transaction.NativeReceipt;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  TSharedPtr<FJsonObject> Request = Transaction.Request;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  TArray<TSharedPtr<FJsonValue>> Simulations = Transaction.Simulations;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  FString TxHash = Transaction.TxHash;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  FString IdentifyingCode = Transaction.IdentifyingCode;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       	  FString MetaTxHash = Transaction.MetaTxHash;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   },OnFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-listsessions",children:["Example ListSessions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-listsessions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"lists-the-active-sessions",children:["Lists the active sessions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lists-the-active-sessions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<TArray<FSession>> OnSuccess = [=](TArray<FSession> Response)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       //Response is a list of Sessions"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback OnFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		UE_LOG(LogTemp,Display,TEXT("Error Message: %s"),*Error.Message);'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them  "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->ListSessions(OnSuccess,OnFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-closesession",children:["Example CloseSession",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-closesession",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"closes-the-session",children:["Closes the session",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#closes-the-session",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const TFunction<void(FString)> OnSuccess = [=](const FString& Response)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//Response is just a confirmation string"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback OnFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		UE_LOG(LogTemp,Display,TEXT("Error Message: %s"),*Error.Message);'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->CloseSession(OnSuccess,OnFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-signout",children:["Example SignOut",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-signout",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"closes-the-session--clears-out-cached-credentials-with-blank-ones",children:["Closes the session & clears out cached credentials with blank ones",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#closes-the-session--clears-out-cached-credentials-with-blank-ones",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->SignOut();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-registersession",children:["Example RegisterSession",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-registersession",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"used-to-register-a-session-done-automatically-for-you-by-uauthenticator",children:["Used to register a session (done automatically for you by UAuthenticator)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#used-to-register-a-session-done-automatically-for-you-by-uauthenticator",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TFunction<void(FCredentials_BE)> OnSuccess = [=](FCredentials_BE Response)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Successful registration"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback OnFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'		UE_LOG(LogTemp,Display,TEXT("Error Message: %s"),*Error.Message);'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->RegisterSession(OnSuccess,OnFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-getwalletaddress",children:["Example GetWalletAddress",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-getwalletaddress",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"gets-the-wallet-address-currently-being-used",children:["Gets the wallet address currently being used",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gets-the-wallet-address-currently-being-used",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->GetWalletAddress();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-getnetworkid",children:["Example GetNetworkId",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-getnetworkid",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"gets-the-network-id-being-used",children:["Gets the network id being used",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gets-the-network-id-being-used",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->GetNetworkId();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-updatenetworkid",children:["Example UpdateNetworkId",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-updatenetworkid",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"used-to-update-the-stored-network-id",children:["Used to update the stored network id",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#used-to-update-the-stored-network-id",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->UpdateNetworkId(137);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"example-updateproviderurl",children:["Example UpdateProviderUrl",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-updateproviderurl",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"used-to-update-the-provider-url-of-the-wallet",children:["Used to update the provider url of the wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#used-to-update-the-provider-url-of-the-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	   Api->UpdateProviderURL("NewProviderUrl");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"indexer--the-wallet",children:["Indexer & the Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#indexer--the-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`The indexer is tied nicely with the wallet to allow for ease of use.
One thing to note is the NetworkId you set with your wallet is the one that will be used with
the indexer. The default network we set is `,e.jsx(n.code,{children:"137"})]}),`
`,e.jsxs(n.h3,{id:"ping",children:["Ping",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TSuccessCallback<bool> GenericSuccess = [=](const bool bSuccess)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Ping response is in bSuccess"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	//Ping failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Api->Ping(GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.h3,{id:"version",children:["Version",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#version",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FVersion> GenericSuccess = [=](const FVersion& version)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response contained in FVersion"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//Version Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->Version(GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"runtimestatus",children:["RunTimeStatus",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#runtimestatus",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FRuntimeStatus> GenericSuccess = [=](const FRuntimeStatus& runTimeStatus)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response is in FRunTimeStatus"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    };"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//RunTimeStatus Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       Api->RunTimeStatus(GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"getchainid",children:["GetChainID",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getchainid",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TSuccessCallback<int64> GenericSuccess = [=](const int64 chainID)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    //Response in int64"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	//GetChainID Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   Api->GetChainID(GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"}"})})]})}),`
`,e.jsxs(n.h3,{id:"getetherbalance",children:["GetEtherBalance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getetherbalance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FEtherBalance> GenericSuccess = [=](const FEtherBalance& etherBalance)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response in FEtherBalance"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//GetEtherBalance Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->GetEtherBalance(Api->GetWalletAddress(), GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"gettokenbalances",children:["GetTokenBalances",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gettokenbalances",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FGetTokenBalancesReturn> GenericSuccess = [=](const FGetTokenBalancesReturn& tokenBalances)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response in FGetTokenBalancesReturn"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//GetTokenBalances Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   FGetTokenBalancesArgs args;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.accountAddress = Api->GetWalletAddress();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.includeMetaData = true;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->GetTokenBalances(args, GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"gettokensupplies",children:["GetTokenSupplies",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gettokensupplies",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FGetTokenSuppliesReturn> GenericSuccess = [=](const FGetTokenSuppliesReturn& tokenSupplies)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response is in FGetTokenSuppliesReturn"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//GetTokenSupplies Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   FGetTokenSuppliesArgs args;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	   args.contractAddress = "0x01";//Testing Contract Address in hex with leading 0x'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.includeMetaData = true;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->GetTokenSupplies(args, GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"### GetTokenSuppliesMap"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FGetTokenSuppliesMapReturn> GenericSuccess = [=](const FGetTokenSuppliesMapReturn& tokenSuppliesMap)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response is in FGetTokenSuppliesMapReturn"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //GetTokenSuppliesMap Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();    "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   TMap<FString, FTokenList> tokenMap;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   const TPair<FString,FTokenList> item;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   tokenMap.Add(item);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       FGetTokenSuppliesMapArgs args;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.includeMetaData = true;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.tokenMap = tokenMap;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->GetTokenSuppliesMap(args, GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"getbalanceupdates",children:["GetBalanceUpdates",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getbalanceupdates",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FGetBalanceUpdatesReturn> GenericSuccess = [=](const FGetBalanceUpdatesReturn& balanceUpdates)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response in FGetBalanceUpdatesReturn"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//GetBalanceUpdates Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   FGetBalanceUpdatesArgs args;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'	   args.contractAddress = "0x0E0f9d1c4BeF9f0B8a2D9D4c09529F260C7758A2";'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.page.page = 10;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.page.more = true;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->GetBalanceUpdates(args, GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsxs(n.h3,{id:"gettransactionhistory",children:["GetTransactionHistory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gettransactionhistory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TSuccessCallback<FGetTransactionHistoryReturn> GenericSuccess = [=](const FGetTransactionHistoryReturn& transactionHistory)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"        //Response is in FGetTransactionHistoryReturn"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	const FFailureCallback GenericFailure = [=](const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"		//GetTransactionHistory Failure"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"   "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const FCredentials_BE Credentials;//Replace this var with your own credentials however you choose to get them"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    const TOptional<USequenceWallet*> WalletOptional = USequenceWallet::Get(Credentials);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    if (WalletOptional.IsSet() && WalletOptional.GetValue())"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"       USequenceWallet * Api = WalletOptional.GetValue();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   FGetTransactionHistoryArgs args;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.filter.accountAddress = Api->GetWalletAddress();"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.includeMetaData = true;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.page.page = 0;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   args.page.more = true;    "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"	   Api->GetTransactionHistory(args, GenericSuccess, GenericFailure);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    }"})})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Assuming you've setup your controlling Pawn with the ",e.jsx(n.strong,{children:"[AC_SequencePawn_Component]"}),`
The sequence pawn component has functions to do the following:`]}),`
`,e.jsx(n.p,{children:"Setup Sequence (sets up the sequence based systems), requires playerController input"}),`
`,e.jsx(n.p,{children:"Show GUI Shows the UI"}),`
`,e.jsx(n.p,{children:"Hide GUI Hides the UI"}),`
`,e.jsx(n.p,{children:"GUI Visible Simple Visibility test for the UI"}),`
`,e.jsx(n.p,{children:"Switch Platform (Switches which mode the UI will be in and how it will be displayed)"}),`
`,e.jsx(n.p,{children:"Note: this doesn't rotate the application into any one view it just makes the UI responsive to that type of view."}),`
`,e.jsx(n.p,{children:"Modes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Desktop (default)"}),`
`,e.jsx(n.li,{children:"Mobile Portrait (Custom built for portrait mode reducing the X width where ever possible)"}),`
`,e.jsx(n.li,{children:"Mobile Landscape"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h4,{id:"unreal-tfunctions--async-best-practices",children:["Unreal TFunctions & Async Best Practices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unreal-tfunctions--async-best-practices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"We make use of TFunctions with some callbacks:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"TSuccessCallback"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TFunction<void(FString)> OnResponse = **[Capturable variables]**(const FString& Response)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"//callback body where we can process Response"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FFailureCallback"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const TFunction<void(FSequenceError)> OnFailureTest = **[Capturable variables]**(const FSequenceError& Error)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"//callback body where we can process Error"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"};"})})]})}),`
`,e.jsxs(n.p,{children:[`One thing to be aware of is keep an eye on capturables if you have lots of nested TFunctions it's very easy to miss
something and start over writing memory. If you require lots of nesting swapping to a better approach using
UFUNCTION callbacks helps to avoid these problems similar to how things are done in `,e.jsx(n.strong,{children:"[UAuthenticator.h/cpp]"})]}),`
`,e.jsxs(n.h2,{id:"blockchain-functionality",children:["Blockchain Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockchain-functionality",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Most users of the Sequence SDK will not need to interact with cryptographic functions directly."}),`
`,e.jsxs(n.h3,{id:"binary-data",children:["Binary Data",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#binary-data",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["We encapsulate binary data using the ",e.jsx(n.code,{children:"FBinaryData"})," structs, which is a wrapper around a pointer to a shared byte array ",e.jsx(n.code,{children:"TSharedPtr<TArray<uint8>>"}),`.
Binary data is further subtyped into `,e.jsx(n.code,{children:"FUnsizedData"}),", which represents data of any variable size, and ",e.jsx(n.code,{children:"TSizedData<TSize>"}),", which represents data of a required byte length ",e.jsx(n.code,{children:"TSize"}),"."]}),`
`,e.jsxs(n.p,{children:["Important cryptographic types of set size, such as 32-byte private keys, are defined as subtypes of ",e.jsx(n.code,{children:"TSizedData"}),"- for example, we define ",e.jsx(n.code,{children:"FPrivateKey : TSizedData<32>"}),`.
These can also be loaded from hex strings using `,e.jsx(n.code,{children:"From(FString Str)"}),", such as ",e.jsx(n.code,{children:'FPrivateKey::From("0x0...0");'}),". Ensure that the input string is the correct size."]}),`
`,e.jsxs(n.h3,{id:"the-abi",children:["The ABI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-abi",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To call contracts on the blockchain, you will need to encode any data you wish to pass as arguments using the ABI. To read more about the ABI and its specification, check out the ",e.jsx(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:"solidity docs"}),"."]}),`
`,e.jsxs(n.p,{children:["Our ABI implementation centers around the ",e.jsx(n.code,{children:"ABI"})," class in ",e.jsx(n.code,{children:"ABI/ABI.h"}),", which provides functions to convert the following types: ",e.jsx(n.code,{children:"UInt32"}),", ",e.jsx(n.code,{children:"Int32"}),", ",e.jsx(n.code,{children:"Bool"}),", ",e.jsx(n.code,{children:"FAddress"}),", and ",e.jsx(n.code,{children:"FString"}),". Any other data may be transformed directly into ",e.jsx(n.code,{children:"TFixedABIArray"})," or ",e.jsx(n.code,{children:"TDynamicABIArray"})," for fixed-length and dynamic length arrays respectively, or to ",e.jsx(n.code,{children:"TFixedABIData"})," and ",e.jsx(n.code,{children:"TDynamicABIData"})," for fixed-length and dynamic length binary data."]}),`
`,e.jsxs(n.p,{children:["Once you have your data stored in ",e.jsx(n.code,{children:"ABIEncodeable"})," types, you can provide the ABI an array of the type ",e.jsx(n.code,{children:"TArray<ABIEncodeable*>"})," to ",e.jsx(n.code,{children:"ABI::Encode"}),` to receive the binary encoding of the arguments.
See `,e.jsx(n.code,{children:"TestABI.cpp"})," for an example."]}),`
`,e.jsxs(n.h3,{id:"cryptographic-functions",children:["Cryptographic Functions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-functions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Eth/Crypto.h"})," provides some important ethereum functions for interacting directly with the blockchain:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Derives a public key from a private key"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FPublicKey GetPublicKey(FPrivateKey PrivateKey);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Derives an address from the public key"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FAddress GetAddress(FPublicKey PublicKey);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Finds a keccak hash for some binary data"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FHash256 GetKeccakHash(FBinaryData &Data);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"// Derives contract address from a given sending address and nonce"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"FAddress GetContractAddress(FAddress Sender, FBlockNonce Nonce);"})})]})}),`
`,e.jsxs(n.h3,{id:"raw-ethereum-transactions",children:["Raw Ethereum Transactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#raw-ethereum-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"EthTransaction.h"})," contains a struct designed for managing raw ethereum transactions, including functions to sign and hash them. Note that transactions should usually be handled via the Sequence wallet interface, which sends the transactions via the Sequence WAAS."]})]})}function r(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default,c as frontmatter};
