
import React, {useEffect, useState} from 'react';

import {sequence} from '0xsequence'
import { SequenceIndexer } from '@0xsequence/indexer'
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import {SequenceWaaS} from '@0xsequence/waas'
import {useSessionHash} from './hooks/useSessionHash.ts'

import embeddedWallet from './EmbeddedWallet/EmbeddedWallet'

function EmbeddedWalletMintWidget(props: any) {

  const { sessionHash } = useSessionHash()

  sequence.initWallet('AQAAAAAAADi4zbq6FAIlrlW4qD-o_xw0-5A', {defaultNetwork: props.network})

  const [isMinting, setIsMinting] = useState(false)
  const [isMintedInPresent, setIsMintedInPresent] = useState(false)
  const [alreadyMinted, setAlreadyMinted] = useState(false)
  const [txHash, setTxHash] = useState<any>(null)

  const handleGoogleLogin = async (tokenResponse: CredentialResponse) => {
    console.log(tokenResponse)

    const res = await embeddedWallet.signIn({
      idToken: tokenResponse.credential!
    }, "Sequence Docs")
    console.log(res)
  }

  const handleButtonClick = async () => {
    try {
      const wallet = await sequence.getWallet()
      const details = await wallet.connect({app: 'Sequence Docs'})
  
      if(details.connected){
        const indexer = new SequenceIndexer(`https://${props.network}-indexer.sequence.app`, 'AQAAAAAAADi4zbq6FAIlrlW4qD-o_xw0-5A')

        // try any contract and account address you'd like :)
        const contractAddress = '0x58eb15e3b19545b5c01cbd38dac7497ef924b168'
        const accountAddress = details.session?.accountAddress

        // query Sequence Indexer for all nft balances of the account on Polygon
        const nftBalances = await indexer.getTokenBalances({
          contractAddress: contractAddress,
          accountAddress: accountAddress,
          includeMetadata: true
        })

        setIsMinting(true)
        let isMintedBoolean = false

        nftBalances.balances.map((token) => {
          if(token.tokenID == '0'){
            isMintedBoolean = true
            setAlreadyMinted(true)
          }
        })

        if(isMintedBoolean){
          setIsMintedInPresent(true)
          document.getElementById('mint-button')!.style!.background! = '#3e3e3e'
        } else {
          const url = 'https://docs-collectible.tpin.workers.dev';
          const data = {
            address: details.session?.accountAddress
          };
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          setTxHash(await res.text())
          setIsMintedInPresent(true)
          document.getElementById('mint-button')!.style!.background! = '#3e3e3e'
        }
      }
    }catch(err){
      console.log('user closed the wallet')
    }
  };

  const openWallet = () => {
    console.log('opening wallet')
    const wallet = sequence.getWallet()
    const path = "wallet/collectibles/421614/0x58eB15E3B19545B5c01Cbd38Dac7497ef924B168/0";
    wallet.openWallet(path);
  }
  const signOut = async () => {
    const sessions = await embeddedWallet.listSessions()
    await embeddedWallet.dropSession({ sessionId: sessions[0].id })
  }
  return (
    <div className="widget">
      <GoogleOAuthProvider clientId="908369456253-9ki3cl7bauhhu61hgtb66c1ioo0u2n24.apps.googleusercontent.com" nonce={sessionHash} key={sessionHash}>
      <div className="widget-header">
      </div>
      <div className="widget-body">

        <img className='mint-image' src={'https://media.discordapp.net/attachments/1091126083895693312/1220699875637985360/morganmoskalyk_a_style_of_this_53c1a28d-df6c-4500-bdb9-1f9b6cec5c97.png?ex=660fe459&is=65fd6f59&hm=a7a871f3fe3245149f07b76e96b5aa2a05754add5d305f311e164f050d21f15c&=&format=webp&quality=lossless&width=560&height=560'}/>
        <br/>
        <div style={{float:'left'}}>
            <button className='mint-button' id="mint-button" disabled={isMinting || txHash != null} onClick={handleButtonClick}>{isMinting ? isMintedInPresent ? alreadyMinted ? "already minted ✓" : "minted ✓" : 'minting...' : 'collect'}</button>
            { isMintedInPresent || alreadyMinted ? <button className='mint-button' id="mint-button" onClick={() => openWallet()}>{'open wallet'}</button> : null }
        </div>
        <button className='mint-button' id="mint-button" disabled={isMinting || txHash != null} onClick={signOut}>sign out</button>
        <GoogleLogin 
           nonce={sessionHash}
           key={sessionHash}
           onSuccess={handleGoogleLogin} shape="circle" width={230} />
      
      </div> 
      <div className="widget-footer">
        <br/>
        {isMintedInPresent && txHash ? <div className="dashed-box">
          <a href={`https://sepolia.arbiscan.io/tx/${txHash}`} target="_blank">{`arbiscan.io: ${txHash.slice(0,8)}`}...</a>
        </div> : <p>Create a wallet and mint a free collectible on {props.network.replace('-', ' ')} in seconds</p>}
      
      </div>
		</GoogleOAuthProvider>
    </div>

  );
}

export default EmbeddedWalletMintWidget;
