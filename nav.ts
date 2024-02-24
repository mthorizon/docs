import type { Sidebar, TopNav } from 'vocs'

export const topNav = [
  { text: 'Overview', link: '/', match: '/intro' },

  // { 
  //   text: 'APIs & SDKs',
  //   items: [
  //     { text: 'Connect to web3', link: '/waas/' },
  //     { text: 'Wallet-as-a-service', link: '/waas/' },
  //     { text: 'Indexer', link: '/indexer' },
  //     { text: 'Relayer', link: '/relayer' },
  //     { text: 'Metadata', link: '/relayer' },
  //     { text: 'Node Gateway', link: '/relayer' },
  //     { text: 'Marketplace API', link: '/relayer' },
  //     { text: 'Mobile', link: '/indexer' },
  //     { text: 'Unity 3D', link: '/indexer' },
  //     { text: 'Unreal Engine', link: '/indexer' }
  //   ]
  // },

  { text: 'Wallets', link: '/wallet', match: '/wallet' },

  { text: 'APIs', link: '/stack', match: '/stack' },

  { 
    text: 'SDKs',
    items: [
      { text: 'Web', link: '/sdk/web', match: '/sdk/web' },
      { text: 'Server-side', link: '/sdk/backend', match: '/sdk/backend' },
      { text: 'Mobile', link: '/sdk/mobile', match: '/sdk/moble' },
      { text: 'Unity 3D', link: '/sdk/unity', match: '/sdk/unity' },
      { text: 'Unreal Engine', link: '/sdk/unreal', match: '/sdk/unreal' }
    ]
  },

  { 
    text: 'Guides',
    items: [
      { text: 'Getting Started', link: '/guides/stub' },
      { text: 'Building web3 games', link: '/guides/stub' },
      { text: 'Building web3 apps', link: '/guides/stub' },
      { text: 'Minting NFTs', link: '/guides/stub' },
      { text: 'Deploying a contract', link: '/guides/stub' },
      { text: 'Signature Validation', link: '/guides/stub' },
      { text: 'Royalties', link: '/guides/stub' },
      { text: 'Airdrops', link: '/guides/stub' },
      { text: 'Writing custom contracts', link: '/guides/stub' },
    ]
  },

  {  text: 'Builder', link: '/builder', match: '/builder' },

  { 
    text: 'Support',
    items: [
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'We\'re hiring!', link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ]
  },
] as TopNav

export const sidebar = {
  // Overview
  '/': [
    {
      text: 'Introduction',
      items: [
        { text: 'The Sequence Web3 Stack', link: '/intro/getting-started' },
        { text: 'Our Vision for web3', link: '/intro/getting-started' },
        { text: 'Ethereum Compatability', link: '/intro' },
        { text: 'Multi-Chain Support', link: '/intro' },
        { text: 'Open Source', link: '/intro' },
      ]
    },
    {
      // Open Web3 Infrastructure ..?
      // middleware ... app layer, etc..
      text: 'The Sequence Stack', // or, "Infrastructure" ..?
      collapsed: true,
      items: [
        { text: 'Introduction', link: '/intro/stack' },
        { text: 'Authentication', link: '/intro/auth' },
        { text: 'Architecture', link: '/intro/arch' },
        // Smart Wallet / Account Abstraction
        // { text: 'Integration',
        // items: [
        //   { text: 'what is', link: '/hihi' },
        //   { text: 'okok', link: '/yes' },
        // ] },
        // TODO: web / unity / mobile, etc..

        // hmm.. signature validation...? where to put this..?
        // how to think of our WaaS vs our Universal stuff..?
        // linked wallets, etc.........
        // We need "Wallets" to have their own section..
      ]
    },
    {
      text: 'Building on web3',
      collapsed: true,
      items: [
        { text: 'Welcome to web3', link: '/intro/welcome-to-web3' },
        { text: 'Tokens, NFTs & Contracts', link: '/intro/tokens-nfts-contracts' }
        // Payments
        // Marketplaces
        // Tools -- aka, builder etc.
        // Let's build!
      ]
    },

    {
      text: 'Chains',
      collapsed: true,
      items: [
        { text: 'something', link: '/intro/chains' },
      ]
    },

    {
      text: 'Research',
      collapsed: true,
      items: [
        { text: 'Smart Wallets / Account Abstraction', link: '/intro/account-abstraction' },
        { text: 'ERC1271', link: '/intro/erc1271' },
        { text: 'P2P Transaction Bundler (ERC5189)', link: '/intro/erc5189' },
      ]
    },

  ],

  // Wallets
  '/wallet': {
    items: [
      { text: 'Introduction', link: '/wallet' }
      // .... etc. sig validation, and all of that..
      // wallet connectors ..
      // etc....
      // some tutorial maybe...
    ]
  },

  // APIs
  '/stack': {
    items: [
      // { text: 'Introduction', link: '/stack' }
      { text: 'Wallet-as-a-service', link: '/stack' },
      { text: 'Indexer', link: '/stack' },
      { text: 'Relayer', link: '/stack' },
      { text: 'Metadata', link: '/stack' },
      { text: 'Node Gateway', link: '/stack' },
      { text: 'Marketplace API', link: '/stack' },
    ]
  },

  // SDKs
  // '/sdk/web': {
  //   items: [
  //     // { text: 'Introduction', link: '/stack' }
  //     { text: 'Intro', link: '/sdk/web' },
  //     { text: 'Getting Started', link: '/sdk/web/getting-started' },
  //   ]
  // },

  '/sdk/web': [
    {
      text: 'Introduction',
      items: [
        { text: 'Intro', link: '/sdk/web' },
        { text: 'Getting Started', link: '/sdk/web/getting-started' },
      ]
    },
    {
      // TODO: just a stub for now..
      text: 'Examples',
      items: [
        { text: 'Demo Dapp', link: '/sdk/web/blah' },
      ]
    }
  ],

  // Guides
  // '/guides': {
  //   items: [

  //   ]
  // },

  // Builder
  '/builder': {
    items: [
      { text: 'Introduction', link: '/builder' },
      { text: 'Contracts', link: '/builder/stub' },
      { text: 'Collections', link: '/builder/stub' },
      { text: 'NFT Metadata', link: '/builder/stub' },
      { text: 'Transactions', link: '/builder/stub' },
      { text: 'Payments', link: '/builder/stub' },
      { text: 'Marketplaces', link: '/builder/stub' },
      { text: 'Analytics', link: '/builder/stub' },
      { text: 'Token Directory', link: '/builder/stub' },
      { text: 'API Access Keys', link: '/builder/stub' },
    ]
  }

} as Sidebar
