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
  { text: 'Overview', link: '/', match: '/intro' },

  { text: 'Wallets', link: '/wallet', match: '/wallet' },

  { 
    text: 'Stack',
    items: [
      { text: 'Wallet-as-a-service', link: '/waas' },
      { text: 'Indexer', link: '/indexer' },
      { text: 'Relayer', link: '/relayer' },
      { text: 'Metadata', link: '/relayer' },
      { text: 'Node Gateway', link: '/node-gateway' },
      { text: 'Marketplace API', link: '/marketplace-api' },
      // { text: 'Builder', link: '/builder', match: false },
    ]
  },

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
      { text: 'Getting Started', link: '/guides/getting-started', match: '/guides/getting-started' },
      { text: 'Building web3 games', link: '/guides/stub', match: '/guides/stub' },
      { text: 'Building web3 apps', link: '/guides/stub', match: '/guides/stub' },
      { text: 'Minting NFTs', link: '/guides/minting-nfts', match: '/guides/minting-nfts' },
      { text: 'Deploying a contract', link: '/guides/stub', match: '/guides/stub' },
      { text: 'Signature Validation', link: '/guides/stub', match: '/guides/stub' },
      { text: 'Royalties', link: '/guides/stub', match: '/guides/stub' },
      { text: 'Airdrops', link: '/guides/stub', match: '/guides/stub' },
      { text: 'Writing custom contracts', link: '/guides/stub', match: '/guides/stub' },
    ]
  },

  {  text: 'Builder', link: '/builder', match: '/builder' },

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
  '/': [
    {
      text: 'Introduction',
      items: [
        { text: 'The Sequence Web3 Stack', link: '/intro/getting-started' },
        { text: 'Our Vision for web3', link: '/intro/vision' },
        { text: 'Ethereum Compatability', link: '/intro/eth-compat' },
        { text: 'Open Source', link: '/intro/open-source' },
      ]
    },
    {
      text: 'Building on web3',
      // collapsed: true,
      items: [
        { text: 'Welcome to web3', link: '/intro/welcome-to-web3' },
        { text: 'Tokens, NFTs & Contracts', link: '/intro/tokens-nfts-contracts' },
        { text: 'Wallets', link: '/intro/wallets' },
        { text: 'APIs', link: '/intro/apis' },
        { text: 'Payments', link: '/intro/payments' },
        { text: 'Marketplaces', link: '/intro/marketplaces' },
        { text: 'Tools', link: '/intro/tools' },
        { text: 'Let\s build some games!', link: '/intro/lets-build-games' },
        { text: 'Let\s build some apps!', link: '/intro/lets-build-apps' },
      ]
    },
    {
      text: 'Chains',
      // collapsed: true,
      items: [
        { text: 'List of supported chains', link: '/intro/chains' },
        { text: 'Multi-chain support', link: '/intro/multi-chain' },
        { text: 'L2 & L3 chains', link: '/intro/l2-l3-chains' },
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
  // TODO: this is just a WIP ToC ... still need lots more thinking..
  '/wallet': [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/wallet' },
        { text: 'Etc', link: '/wallet/getting-started' },
      ]
    },
    {
      text: 'Sequence Kit',
      items: [
        { text: 'Getting started', link: '/wallet/kit/getting-started' },
        { text: 'Connect', link: '/wallet/kit/connect' },
        // TODO: .. other topic ideas....:
        // authentication .. email auth, social sign-in
        // metamask, wallet connect, ...etc...
        { text: 'Embedded Wallet UI', link: '/wallet/kit/wallet-ui' },
        { text: 'NFT Checkout', link: '/wallet/kit/nft-checkout' },
      ]
    },
    {
      text: 'Smart WaaS',
      items: [
        { text: 'What is Smart WaaS?', link: '/waas' },
        { text: 'Authentication', link: '/waas/auth' },
        // ...
      ]
    },
    {
      text: 'Integrations',
      items: [
        { text: 'Email', link: '/wallet/email' },
        { text: 'OAuth', link: '/wallet/oauth' },
        { text: 'Social sign-in', link: '/wallet/social' },
        { text: 'MetaMask', link: '/wallet/metamask' },
        { text: 'Wallet Connect', link: '/wallet/wallet-connect' },
        { text: 'Coinbase Wallet', link: '/wallet/coinbase-wallet' },
      ]
    },
    {
      text: 'Signature Validation',
      items: [
        { text: 'etc', link: '/wallet/sig-validation' },
        { text: 'etc..', link: '/wallet/sig-validation' },
        // ...
      ]
    },
    {
      text: 'Other Wallet Connectors',
      collapsed: true,
      items: [
        { text: 'Rainbow Kit', link: '/wallet/rainbow-kit' },
        { text: 'Web3Modal', link: '/wallet/web3modal' },
      ]
    }
  ],

  // WaaS
  '/waas': [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/waas' },
        { text: 'Etc', link: '/waas/getting-started' },
      ]
    },
    {
      text: 'Authentication',
      items: [
        { text: 'Getting started', link: '/waas/auth/getting-started' },
        { text: 'Connect', link: '/waas/auth/connect' },
      ]
    }
  ],

  // Indexer
  '/indexer': [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/indexer' },
      ]
    },
    {
      text: 'Blah',
      items: [
        { text: 'Getting started', link: '/indexer/getting-started' },
        { text: 'Blah blah', link: '/indexer/blah' },
      ]
    }
  ],

  // TODO: ... need to add for relayer, metadata, node-gateway, marketplace-api, etc...
  // ...............

  // SDKs
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

  // Guides -- Getting Started
  '/guides/getting-started': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Lets Go', link: '/guides/getting-started' },
        { text: 'Setting up your project', link: '/guides/getting-started/project' },
      ]
    },
    {
      text: 'Etc',
      items: [
        { text: 'More stuff', link: '/guides/getting-started/more' },
      ]
    }
  ],

  // Guides -- Minting NFTs
  '/guides/minting-nfts': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Lets Go', link: '/guides/minting-nfts' },
        { text: 'Setting up your project', link: '/guides/minting-nfts/project' },
      ]
    },
    {
      text: 'Etc',
      items: [
        { text: 'More stuff', link: '/guides/minting-nfts/more' },
      ]
    }
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
