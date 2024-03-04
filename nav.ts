import type { Sidebar, TopNav } from 'vocs'

// NOTE/TODO: below are a WIP ... just trying to think
// of the site structure, and how to organize the content.
//
// Trying to think from the perspective of the reader, that
// is a game developer or app developer. And want to speak
// into their filters, etc..
//
// As well, we want it to be educational, easy to follow,
// how-to, etc... and comprehensive too.. 
//
// We can add / link API references too (can be external links)


export const topNav = [
  { text: 'Solutions',
  items: [
    { text: 'Wallets', link: '/solutions/embedded-wallet', match: '/solutions/embedded-wallet' },
    { text: 'Marketplace', link: '/solutions/white-label-marketplace', match: '/solutions/white-label-marketplace' },
    { text: 'Collectibles', link: '/solutions/contracts', match: '//solutions/contracts' },
    { text: 'Payments', link: '/solutions/nft-checkout', match: '/solutions/nft-checkout' },
    { text: 'No-code Builder', link: '/solutions/builder', match: '/solutions/builder' }
  ]
},


  { 
    text: 'Guides',
    items: [
      { text: 'Web3 Game with WebGL', link: '/guides/webgl-guide', match: '/guides/webgl-guide' },
      { text: 'Web3 Game with Unity', link: '/guides/unity-guide', match: '/guides/unity-guide' },
      { text: 'Lootboxes', link: '/guides/lootbox', match: '/guides/lootbox' },
      { text: 'Custom Marketplace', link: '/guides/template-marketplace-api', match: '/guides/template-marketplace-api' }
    ]
  },
  { 
    text: 'SDKs',
    items: [
      { text: 'Unity', link: '/sdk/unity', match: '/sdk/unity' },
      { text: 'Unreal', link: '/sdk/unreal', match: '/sdk/unreal' },
      { text: 'Node.js', link: '/sdk/nodejs', match: '/sdk/nodejs' },
      { text: 'Sequence Kit', link: '/sdk/sequence-kit', match: '/sdk/sequence-kit' },
      { text: 'Go', link: '/sdk/go', match: '/sdk/go' },
      { text: 'Android', link: '/sdk/android', match: '/sdk/android' },
      { text: 'React Native', link: '/sdk/reactnative', match: '/sdk/reactnative' },
      { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ]
  },

  // replace links.
  { 
    text: 'APIs',
    items: [
      { text: 'Marketplace API', link: '/api/marketplace' },
      { text: 'Transactions API', link: '/api/transaction' },
      { text: 'Indexer API', link: '/api/indexer' },
      { text: 'Embedded Wallets API', link: '/api/embedded-wallet' },
      { text: 'Metadata API', link: '/api/metadata' },
      { text: 'Node Gateway', link: '/api/node-gateway' }
        ]
  },

  { 
    text: 'Support',
    items: [
      { text: 'Token Directory', link: '/support/token-directory' },
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'We\'re hiring!', link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ]
  }
] as TopNav

export const sidebar = {
  // Overview
  '/solutions': [
    {
      text: 'Wallets',
      items: [
        { text: 'Embedded Wallet', link: '/solutions/embedded-wallet', 
        
        // collapsed: true,
        
        // items: [
          
        // { text: 'Rainbow Kit', link: '/' },
        // { text: 'Web3Modal', link: '/wallet/web3modal' }
        // ]
      
      
      
      },
        { text: 'Universal Wallet', link: '/solutions/universal-wallet' }
      ]
    },
    {
      text: 'Marketplace',
      // collapsed: true,
      items: [
        { text: 'White-label Marketplace', link: '/solutions/white-label-marketplace' },
        { text: 'Build your Custom Marketplace', link: '/solutions/orderbook' }
      ]
    },
    {
      text: 'Collectibles',
      // collapsed: true,
      items: [
        { text: 'Deployable Contracts', link: '/solutions/contracts' },
        { text: 'Metadata Manager', link: '/solutions/metadata-manager' },
        { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: 'Payments',
      items: [
        { text: 'NFT Checkout', link: '/solutions/nft-checkout' },
        { text: 'Onramps', link: '/solutions/onramps' },
      ]
    },
    {
      text: 'No-code Builder',
      items: [
        { text: 'Overview', link: '/solutions/builder' }
      ]
    },
    {
      text: 'Technical References',
      items: [
        { text: 'Ethereum Compatibility', link: '/solutions/ethereum-compatibility' },
        { text: 'Chain Support', link: '/solutions/chain-support' },
      ]
    },
    
  ],

  '/guides': [
    {
      text: 'Build a game with WebGL',
      collapsed: true,
      items: [
        { text: 'Integrate SequenceKit with WaaS', link: '/guides/webgl-guide#integrate-sequencekit-with-waas' },
        { text: 'Deploy a collectibles contract', link: '/guides/webgl-guide#deploy-a-collectibles-contract' },
        { text: 'Deploy a remote minter', link: '/guides/webgl-guide#deploy-a-remote-minter' },
        { text: 'Mint in-game achievement tokens', link: '/guides/webgl-guide#mint-in-game-achievement-tokens' },
        { text: 'Burn in-game achievement tokens', link: '/guides/webgl-guide#burn-in-game-achievement-tokens' },
        { text: 'Integrate an embedded marketplace', link: '/guides/webgl-guide#integrate-an-embedded-marketplace' },
        { text: 'Leverage purchased items in-game', link: '/guides/webgl-guide#leverage-purchased-items-in-game' },
      ]
    },
    {
      text: 'Build a mobile Unity game',
      collapsed: true,
      items: [
        { text: 'Integrate SequenceKit with WaaS', link: '/guides/unity-guide#integrate-sequencekit-with-waas' },
        { text: 'Deploy a collectibles contract', link: '/guides/unity-guide#deploy-a-collectibles-contract' },
        { text: 'Deploy a remote minter', link: '/guides/unity-guide#deploy-a-remote-minter' },
        { text: 'Mint in-game achievement tokens', link: '/guides/unity-guide#mint-in-game-achievement-tokens' },
        { text: 'Burn in-game achievement tokens', link: '/guides/unity-guide#burn-in-game-achievement-tokens' },
        { text: 'Integrate an embedded marketplace', link: '/guides/unity-guide#integrate-an-embedded-marketplace' },
        { text: 'Leverage purchased items in-game', link: '/guides/unity-guide#leverage-purchased-items-in-game' },
      ]
    },
    {
      text: 'Build a lootbox with AI minting',
      link: '/guides/lootbox'
    },
    {
      text: 'Integrate token rewards into your Discord server',
      link: '/guides/discord'
    },
    {
      text: 'Templates',
      items: [
        { text: 'Embedded Wallet Demo', link: '/guides/template-embedded-wallet' },
        { text: 'Go Relayer', link: '/guides/template-go-relayer' },
        { text: 'Serverless Relayer using Cloudflare', link: '/guides/template-cloudflare-relayer' },
        { text: 'Marketplace API Demo', link: '/guides/template-marketplace-api' }
      ]
    }
  ],

  // SDKs
  '/sdk': [
    {
      text: 'Game Engine',
      // collapsed: true,
      items: [
        { text: 'Unreal', link: '/sdk/unreal' },
        { text: 'Unity', link: '/sdk/unity' }
      ]
    },
    {
      text: 'Mobile',
      // collapsed: true,
      items: [
        { text: 'Android', link: '/sdk/android' },
        { text: 'iOS', link: '/sdk/iOS' },
        { text: 'React Native', link: '/sdk/react-native' }
      ]
    },
    {
      text: 'Web3',
      // collapsed: true,
      items: [
        { text: 'SequenceKit', link: '/sdks/sequence-kit' },
        { text: 'TypeScript', link: '/sdk/typescript' },
        { text: 'Go', link: '/sdk/go' }
      ]
    },
    {
      text: 'Common Questions',
      collapsed: true,
      items: [
        { text: 'How do I do signature validation?', link: '/wallet/sig-validation' }
        // ...
      ]
    },
  ],

    // SDKs
    '/api': [
      {
        text: 'APIs',
        // collapsed: true,
        items: [
          { text: 'Embedded Wallet', link: '/api/embedded-wallet' },
          { text: 'Indexer', link: '/api/indexer' },
          { text: 'Marketplace', link: '/api/marketplace' },
          { text: 'Metadata', link: '/api/metadata' },
          { text: 'Transaction', link: '/api/transaction' },
          { text: 'Node Gateway', link: '/api/node-gateway' },
        ]
      },
    ],
  


  // Builder
  // TODO: I just mocked below for some structure.. but
  // we should change it up as we go..
  '/builder': [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/builder' },
        { text: 'Setting up your project', link: '/builder/stub' },
        { text: 'API Access Keys', link: '/builder/stub' },
      ]
    },
    {
      text: 'Contracts',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/contracts/getting-started' },
        { text: 'Creating a contract', link: '/builder/contracts/create' },
      ]
    },
    {
      text: 'Collections',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/collections/getting-started' },
        { text: 'Creating a collection', link: '/builder/collections/create' },
      ]
    },
    {
      text: 'NFT Metadata',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/metadata/getting-started' },
        { text: 'Creating metadata', link: '/builder/metadata/create' },
      ]
    },
    {
      text: 'Transactions',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/transactions/getting-started' },
        { text: 'Gas Tanks', link: '/builder/transactions/gas-tanks' }, // TODO ..
      ]
    },
    {
      text: 'Payments',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/etc' },
        { text: 'etc', link: '/builder/etc' },
      ]
    },
    {
      text: 'Marketplaces',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/etc' },
        { text: 'etc', link: '/builder/etc' },
      ]
    },
    {
      text: 'Analytics',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/etc' },
        { text: 'etc', link: '/builder/etc' },
      ]
    },
    {
      text: 'Settings',
      // collapsed: true,
      items: [
        { text: 'Getting started', link: '/builder/etc' },
        { text: 'etc', link: '/builder/etc' },
      ]
    }
  ],

  // Support
  '/support': {
    items: [
      { text: 'Support', link: '/support' },
      { text: 'Token Directory', link: '/support/token-directory' },
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'We\'re hiring!', link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ]
  }

} as Sidebar
