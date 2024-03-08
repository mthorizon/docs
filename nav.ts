import type { Sidebar, TopNav } from 'vocs'


export const topNav = [
  { text: 'Solutions',
  items: [
    { text: 'Wallets', link: '/solutions/wallets/embedded-wallet/01-overview', match: '/solutions/wallets/embedded-wallet/01-overview' },
    { text: 'Marketplace', link: '/solutions/marketplaces/white-label-marketplace', match: '/solutions/marketplaces/white-label-marketplace' },
    { text: 'Collectibles', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155', match: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155' },
    { text: 'Payments', link: '/solutions/nft-checkout', match: '/solutions/nft-checkout' },
    { text: 'No-code Builder', link: '/solutions/builder/overview', match: '/solutions/builder/overview', items: [
      { text: 'Overview', link: '/solutions/builder/overview', match: '/solutions/builder/overview' }, 
    ]
  }
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
        { text: 'Embedded Wallet', collapsed: true, items: [
          {text: 'Overview', link: '/solutions/wallets/embedded-wallet/01-overview'},
          {text: 'Quickstart', link: '/solutions/wallets/embedded-wallet/02-quickstart'},
          {text: 'Manage Sessions', link: '/solutions/wallets/embedded-wallet/03-manage-sessions'},
          {text: 'Use Wallets', link: '/solutions/wallets/embedded-wallet/04-use-wallets'},
          {text: 'Validation', link: '/solutions/wallets/embedded-wallet/05-validation'},
          {text: 'Transaction Receipts', link: '/solutions/wallets/embedded-wallet/06-transaction-receipts'},
        ]
      },
        { text: 'Universal Wallet', collapsed: true, 
        items: [
          {text: 'Overview', link: '/solutions/wallets/universal-wallet/01-overview'},
          {text: 'Quickstart', link: '/solutions/wallets/universal-wallet/02-quickstart'},
          {text: 'Guides', collapsed: true, items: [
            {text: 'Connect Wallet', link: '/solutions/wallets/universal-wallet/03-guides/01-connect-wallet'},
            {text: 'Authenticate Users with Message Signature', link: '/solutions/wallets/universal-wallet/03-guides/02-auth-address'},
            {text: 'Signing & Verifying Messages', link: '/solutions/wallets/universal-wallet/03-guides/03-sign-message'},
            {text: 'No-wallet confirmation signatures', link: '/solutions/wallets/universal-wallet/03-guides/04-session-keys'},
            {text: 'Sending Transactions', link: '/solutions/wallets/universal-wallet/03-guides/05-send-transaction'},
            {text: 'Sending ERC-20 Tokens', link: '/solutions/wallets/universal-wallet/03-guides/06-send-erc20'},
            {text: 'Sending ERC-721 (NFT) Tokens', link: '/solutions/wallets/universal-wallet/03-guides/07-send-erc721'},
            {text: 'Sending ERC-1155 (Collectible) Tokens', link: '/solutions/wallets/universal-wallet/03-guides/08-send-erc1155'},
            {text: 'Sending a Batch of Transactions', link: '/solutions/wallets/universal-wallet/03-guides/09-send-batch-transactions'},
            {text: 'Building Backends with Sequence', link: '/solutions/wallets/universal-wallet/03-guides/10-building-backends'},
          ]
        },
          {text: 'Supported Platforms', link: '/solutions/wallets/universal-wallet//04-platforms'},
          {text: 'Validation', link: '/solutions/wallets/universal-wallet/05-fiat-on-ramps'},
          {text: 'Transaction Receipts', link: '/solutions/wallets/universal-wallet/06-key-management'},
          {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/07-sequence-kit'}
        ]
        }
      ]
    },
    {
      text: 'Marketplace',
      // collapsed: true,
      items: [
        { text: 'White-label Marketplace', link: '/solutions/marketplaces/white-label-marketplace' },
        { text: 'Build your Custom Marketplace', collapsed: true, items: [
          {text: 'Overview', link: '/solutions/marketplaces/orderbook/01-overview'},
          {text: 'Quickstart', link: '/solutions/marketplaces/orderbook/02-quickstart'},
        ]
       }
      ] 
    },
    {
      text: 'Collectibles',
      items: [
        { text: 'Deployable Contracts' , collapsed: true, items: [
          {text: 'Deploy an Item Collection Contract  ', link: '/solutions/collectibles/contracts/200-deploy-an-item-collection-contract'},
          {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
          {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
          {text: 'Mint In-Game Currency (ERC20)', link: '/solutions/collectibles/contracts/903-mint-currency-from-ERC20'},
        ],
      },
        { text: 'Metadata Manager', link: '/solutions/collectibles/metadata/800-manage-contract-metadata-builder' },
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: 'Payments',
      items: [
        { text: 'NFT Checkout', link: '/solutions/nft-checkout' },
        { text: 'Onramps', link: '/solutions/payments/onramps/01-fiat-on-ramps' },
      ]
    },
    {
      text: 'No-code Builder',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/solutions/builder/overview' },
        { text: 'Get Started', link: '/solutions/builder/getting-started' },
        {text: 'Project Management', link: '/solutions/builder/project-management'},
        {text: 'Contracts', link: '/solutions/builder/contracts'},
        {text: 'Wallet SDKs', link: '/solutions/builder/wallet-sdks'},
        {text: 'Gas Tank', link: '/solutions/builder/gas-tank'},
        {text: 'Node Gateway', link: '/solutions/builder/node-gateway'},
        {text: 'Marketplaces', link: '/solutions/builder/marketplaces'},
        {text: 'Indexer', link: '/solutions/builder/indexer'},
        {text: 'Settings', link: '/solutions/builder/project-settings'},
      ]
    },
    {
      text: 'Technical References',
      items: [
        { text: 'Chain Support', link: '/solutions/technical-references/chain-support' },
        { text: 'Smart Contract Wallets', collapsed: true, items: [
          { text: 'Why smart contract wallets?', link: '/solutions/technical-references/wallet-contracts/01-why' },
          { text: 'Universal Deployer', link: '/solutions/technical-references/wallet-contracts/02-universal-deployer' },
          {text: 'Wallet Factory', link: '/solutions/technical-references/wallet-contracts/03-wallet-factory'},
          {text: 'Wallet Configuration', link: '/solutions/technical-references/wallet-contracts/04-wallet-configuration'},
          // {text: 'Modules & Wallet update', link: 'solutions/technical-references/wallet-contracts/05-modules-and-updates'},
          // {text: 'MainModuleUpgradeable & configuration migration', link: 'solutions/technical-references/wallet-contracts/06-main-module-upgradeable'},
          {text: 'Transaction Encoding', link: '/solutions/technical-references/wallet-contracts/07-transaction-encoding'},
          {text: 'Signature Encoding', link: '/solutions/technical-references/wallet-contracts/08-signature-encoding'},
          // {text: 'Nested Transaction Batching', link: 'solutions/technical-references/wallet-contracts/09-nested-transaction-batching'},
          // {text: 'GuestModule and on-demand deployment', link: 'solutions/technical-references/wallet-contracts/10-guest-module'},
          {text: 'Wallet Context', link: '/solutions/technical-references/wallet-contracts/11-wallet-context'},
          {text: 'Contract Audits', link: '/solutions/technical-references/wallet-contracts/12-contract-audits'},
        ] }
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
        { text: 'Embedded Wallet Demo', link: '/guides/templates/template-embedded-wallet' },
        { text: 'Go Relayer', link: '/guides/templates/template-go-relayer' },
        { text: 'Serverless Relayer using Cloudflare', link: '/guides/templates/template-cloudflare-relayer' },
        { text: 'Marketplace API Demo', link: '/guides/templates/template-marketplace-api' }
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

    // apis
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
