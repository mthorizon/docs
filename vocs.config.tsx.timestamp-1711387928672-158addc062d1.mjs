// vocs.config.tsx
import { defineConfig } from "file:///home/mwm/Projects/sequence/docs-v2/node_modules/.pnpm/vocs@1.0.0-alpha.40_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0_rollup@4.12.0_typescript@5.3.3/node_modules/vocs/_lib/index.js";

// nav.ts
var topNav = [
  {
    text: "Solutions",
    items: [
      { text: "Wallets", link: "/solutions/wallets/embedded-wallet/01-overview", match: "/solutions/wallets/embedded-wallet/01-overview" },
      { text: "Marketplace", link: "/solutions/marketplaces/white-label-marketplace", match: "/solutions/marketplaces/white-label-marketplace" },
      { text: "Collectibles", link: "/solutions/collectibles/contracts/900-mint-items-from-ERC1155", match: "/solutions/collectibles/contracts/900-mint-items-from-ERC1155" },
      { text: "Payments", link: "/solutions/nft-checkout", match: "/solutions/nft-checkout" },
      {
        text: "No-code Builder",
        link: "/solutions/builder/overview",
        match: "/solutions/builder/overview",
        items: [
          { text: "Overview", link: "/solutions/builder/overview", match: "/solutions/builder/overview" }
        ]
      }
    ]
  },
  {
    text: "Guides",
    items: [
      { text: "Web3 Game with WebGL", link: "/guides/webgl-guide", match: "/guides/webgl-guide" },
      { text: "Web3 Game with Unity", link: "/guides/unity-guide", match: "/guides/unity-guide" },
      { text: "Lootboxes", link: "/guides/lootbox", match: "/guides/lootbox" },
      { text: "Custom Marketplace", link: "/guides/templates/template-marketplace-api", match: "/guides/templates/template-marketplace-api" }
    ]
  },
  {
    text: "SDKs",
    items: [
      { text: "Unity", link: "/sdk/unity/01-overview", match: "/sdk/unity/01-overview" },
      { text: "Unreal", link: "/sdk/unreal", match: "/sdk/unreal" },
      { text: "Node.js", link: "/sdk/nodejs", match: "/sdk/nodejs" },
      { text: "Sequence Kit", link: "/sdk/sequence-kit/01-overview", match: "/sdk/sequence-kit/01-overview" },
      { text: "Go", link: "/sdk/go/go", match: "/sdk/go/overview" },
      { text: "Android", link: "/sdk/android", match: "/sdk/android" },
      { text: "React Native", link: "/sdk/reactnative", match: "/sdk/reactnative" },
      { text: "iOS", link: "/sdk/iOS", match: "/sdk/iOS" }
    ]
  },
  // replace links.
  {
    text: "APIs",
    items: [
      { text: "Marketplace API", link: "/api/marketplace" },
      { text: "Transactions API", link: "/api/transaction" },
      { text: "Indexer API", link: "/api/indexer" },
      { text: "Embedded Wallets API", link: "/api/embedded-wallet" },
      { text: "Metadata API", link: "/api/metadata" },
      { text: "Node Gateway", link: "/api/node-gateway" }
    ]
  },
  {
    text: "Support",
    items: [
      { text: "Token Directory", link: "/support/token-directory" },
      { text: "Discord", link: "https://discord.gg/sequence" },
      { text: "FAQ", link: "https://support.sequence.xyz" },
      { text: "We're hiring!", link: "https://horizon.io/careers" },
      { text: "Contact Us", link: "https://support.sequence.xyz" }
    ]
  }
];
var sidebar = {
  // Overview
  "/solutions": [
    {
      text: "Wallets",
      items: [
        {
          text: "Embedded Wallet",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/embedded-wallet/01-overview" },
            { text: "Quickstart", link: "/solutions/wallets/embedded-wallet/02-quickstart" },
            { text: "Manage Sessions", link: "/solutions/wallets/embedded-wallet/03-manage-sessions" },
            { text: "Use Wallets", link: "/solutions/wallets/embedded-wallet/04-use-wallets" },
            { text: "Validation", link: "/solutions/wallets/embedded-wallet/05-validation" },
            { text: "Transaction Receipts", link: "/solutions/wallets/embedded-wallet/06-transaction-receipts" }
          ]
        },
        {
          text: "Universal Wallet",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/universal-wallet/01-overview" },
            { text: "Quickstart", link: "/solutions/wallets/universal-wallet/02-quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Connect Wallet", link: "/solutions/wallets/universal-wallet/03-guides/01-connect-wallet" },
                { text: "Authenticate Users with Message Signature", link: "/solutions/wallets/universal-wallet/03-guides/02-auth-address" },
                { text: "Signing & Verifying Messages", link: "/solutions/wallets/universal-wallet/03-guides/03-sign-message" },
                { text: "No-wallet confirmation signatures", link: "/solutions/wallets/universal-wallet/03-guides/04-session-keys" },
                { text: "Sending Transactions", link: "/solutions/wallets/universal-wallet/03-guides/05-send-transaction" },
                { text: "Sending ERC-20 Tokens", link: "/solutions/wallets/universal-wallet/03-guides/06-send-erc20" },
                { text: "Sending ERC-721 (NFT) Tokens", link: "/solutions/wallets/universal-wallet/03-guides/07-send-erc721" },
                { text: "Sending ERC-1155 (Collectible) Tokens", link: "/solutions/wallets/universal-wallet/03-guides/08-send-erc1155" },
                { text: "Sending a Batch of Transactions", link: "/solutions/wallets/universal-wallet/03-guides/09-send-batch-transactions" },
                { text: "Building Backends with Sequence", link: "/solutions/wallets/universal-wallet/03-guides/10-building-backends" }
              ]
            },
            { text: "Sequence Kit", link: "/solutions/wallets/universal-wallet/04-sequence-kit" },
            { text: "Supported Platforms", link: "/solutions/wallets/universal-wallet/05-platforms" },
            { text: "Fiat On-Ramps", link: "/solutions/wallets/universal-wallet/06-fiat-on-ramps" },
            { text: "Key Management", link: "/solutions/wallets/universal-wallet/07-key-management" }
          ]
        }
      ]
    },
    {
      text: "Marketplace",
      // collapsed: true,
      items: [
        { text: "White-label Marketplace", link: "/solutions/marketplaces/white-label-marketplace" },
        {
          text: "Build your Custom Marketplace",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/marketplaces/orderbook/01-overview" },
            { text: "Quickstart", link: "/solutions/marketplaces/orderbook/02-quickstart" },
            { text: "Get Top Orders", link: "/solutions/marketplaces/orderbook/03-get-top-orders" },
            { text: "Get Orderbook", link: "/solutions/marketplaces/orderbook/04-get-orderbook" },
            { text: "Get User Activities", link: "/solutions/marketplaces/orderbook/05-get-user-activities" },
            { text: "Orderbook Transactions", link: "/solutions/marketplaces/orderbook/06-orderbook-transactions" }
          ]
        }
      ]
    },
    {
      text: "Collectibles",
      items: [
        {
          text: "Deployable Contracts",
          collapsed: true,
          items: [
            { text: "Deploy an Item Collection Contract  ", link: "/solutions/collectibles/contracts/200-deploy-an-item-collection-contract" },
            { text: "Mint In-Game Items and Achievements (ERC1155)", link: "/solutions/collectibles/contracts/900-mint-items-from-ERC1155" },
            { text: "Mint Digital Collectibles (ERC721)", link: "/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721" },
            { text: "Mint In-Game Currency (ERC20)", link: "/solutions/collectibles/contracts/903-mint-currency-from-ERC20" }
          ]
        },
        {
          text: "Metadata",
          collapsed: true,
          items: [
            { text: "Manage Metadata in Builder", link: "/solutions/collectibles/metadata/800-manage-metadata-builder" }
          ]
        }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: "Payments",
      items: [
        { text: "NFT Checkout", link: "/solutions/nft-checkout" },
        { text: "Onramps", link: "/solutions/payments/onramps/01-fiat-on-ramps" }
      ]
    },
    {
      text: "No-code Builder",
      collapsed: true,
      items: [
        { text: "Overview", link: "/solutions/builder/overview" },
        { text: "Get Started", link: "/solutions/builder/getting-started" },
        { text: "Project Management", link: "/solutions/builder/project-management" },
        { text: "Contracts", link: "/solutions/builder/contracts" },
        { text: "Wallet SDKs", link: "/solutions/builder/wallet-sdks" },
        { text: "Gas Tank", link: "/solutions/builder/gas-tank" },
        { text: "Node Gateway", link: "/solutions/builder/node-gateway" },
        { text: "Marketplaces", link: "/solutions/builder/marketplaces" },
        { text: "Indexer", link: "/solutions/builder/indexer" },
        { text: "Settings", link: "/solutions/builder/project-settings" }
      ]
    },
    {
      text: "Technical References",
      items: [
        { text: "Chain Support", link: "/solutions/technical-references/chain-support" },
        { text: "Smart Contract Wallets", collapsed: true, items: [
          { text: "Why smart contract wallets?", link: "/solutions/technical-references/wallet-contracts/01-why" },
          { text: "Universal Deployer", link: "/solutions/technical-references/wallet-contracts/02-universal-deployer" },
          { text: "Wallet Factory", link: "/solutions/technical-references/wallet-contracts/03-wallet-factory" },
          { text: "Wallet Configuration", link: "/solutions/technical-references/wallet-contracts/04-wallet-configuration" },
          // {text: 'Modules & Wallet update', link: 'solutions/technical-references/wallet-contracts/05-modules-and-updates'},
          // {text: 'MainModuleUpgradeable & configuration migration', link: 'solutions/technical-references/wallet-contracts/06-main-module-upgradeable'},
          { text: "Transaction Encoding", link: "/solutions/technical-references/wallet-contracts/07-transaction-encoding" },
          { text: "Signature Encoding", link: "/solutions/technical-references/wallet-contracts/08-signature-encoding" },
          // {text: 'Nested Transaction Batching', link: 'solutions/technical-references/wallet-contracts/09-nested-transaction-batching'},
          // {text: 'GuestModule and on-demand deployment', link: 'solutions/technical-references/wallet-contracts/10-guest-module'},
          { text: "Wallet Context", link: "/solutions/technical-references/wallet-contracts/11-wallet-context" },
          { text: "Contract Audits", link: "/solutions/technical-references/wallet-contracts/12-contract-audits" }
        ] }
      ]
    }
  ],
  "/guides": [
    {
      text: "Build a game with WebGL",
      collapsed: true,
      items: [
        { text: "Integrate SequenceKit with WaaS", link: "/guides/webgl-guide#integrate-sequencekit-with-waas" },
        { text: "Deploy a collectibles contract", link: "/guides/webgl-guide#deploy-a-collectibles-contract" },
        { text: "Deploy a remote minter", link: "/guides/webgl-guide#deploy-a-remote-minter" },
        { text: "Mint in-game achievement tokens", link: "/guides/webgl-guide#mint-in-game-achievement-tokens" },
        { text: "Burn in-game achievement tokens", link: "/guides/webgl-guide#burn-in-game-achievement-tokens" },
        { text: "Integrate an embedded marketplace", link: "/guides/webgl-guide#integrate-an-embedded-marketplace" },
        { text: "Leverage purchased items in-game", link: "/guides/webgl-guide#leverage-purchased-items-in-game" }
      ]
    },
    {
      text: "Build a mobile Unity game",
      collapsed: true,
      items: [
        { text: "Integrate SequenceKit with WaaS", link: "/guides/unity-guide#integrate-sequencekit-with-waas" },
        { text: "Deploy a collectibles contract", link: "/guides/unity-guide#deploy-a-collectibles-contract" },
        { text: "Deploy a remote minter", link: "/guides/unity-guide#deploy-a-remote-minter" },
        { text: "Mint in-game achievement tokens", link: "/guides/unity-guide#mint-in-game-achievement-tokens" },
        { text: "Burn in-game achievement tokens", link: "/guides/unity-guide#burn-in-game-achievement-tokens" },
        { text: "Integrate an embedded marketplace", link: "/guides/unity-guide#integrate-an-embedded-marketplace" },
        { text: "Leverage purchased items in-game", link: "/guides/unity-guide#leverage-purchased-items-in-game" }
      ]
    },
    {
      text: "Build a lootbox with AI minting",
      link: "/guides/lootbox"
    },
    {
      text: "Integrate token rewards into your Discord server",
      link: "/guides/discord"
    },
    {
      text: "Templates",
      items: [
        { text: "Embedded Wallet Demo", link: "/guides/templates/template-embedded-wallet" },
        { text: "Building Backend Relaying Server", link: "/guides/templates/02-building-relaying-server" },
        { text: "Serverless Minting of Collectibles", link: "/guides/templates/03-mint-collectibles-serverless" },
        { text: "Marketplace API Demo", link: "/guides/templates/template-marketplace-api" }
      ]
    }
  ],
  // SDKs
  "/sdk": [
    {
      text: "Game Engine",
      // collapsed: true,
      items: [
        { text: "Unreal", link: "/sdk/unreal" },
        {
          text: "Unity",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/unity/01-overview" },
            { text: "Installation", link: "/sdk/unity/02-installation" },
            { text: "Setup", link: "/sdk/unity/03-setup" },
            { text: "Authentication", link: "/sdk/unity/04-authentication" },
            { text: "Write to blockchain", link: "/sdk/unity/05-write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/06-read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/07-sign-messages" },
            { text: "Deploy Contracts", link: "/sdk/unity/08-deploy-contracts" },
            { text: "Wallet UI", link: "/sdk/unity/09-wallet-ui" },
            {
              text: "Advanced",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/sdk/unity/Advanced/01-introduction" },
                { text: "Wallets", link: "/sdk/unity/Advanced/02-wallets" },
                { text: "Clients", link: "/sdk/unity/Advanced/03-clients" },
                { text: "Transfers", link: "/sdk/unity/Advanced/04-transfers" },
                { text: "Contracts", link: "/sdk/unity/Advanced/05-contracts" },
                { text: "Tokens", link: "/sdk/unity/Advanced/06-tokens" }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "Mobile",
      items: [
        { text: "Android", link: "/sdk/android" },
        { text: "iOS", link: "/sdk/iOS" },
        { text: "React Native", link: "/sdk/react-native" }
      ]
    },
    {
      text: "Web3",
      items: [
        {
          text: "SequenceKit",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/sequence-kit/01-overview" },
            { text: "Quickstart", link: "/sdk/sequence-kit/02-getting-started" },
            { text: "Configuration", link: "/sdk/sequence-kit/03-configuration" },
            { text: "Checkout", link: "/sdk/sequence-kit/04-checkout" },
            { text: "Custom Connectors", link: "/sdk/sequence-kit/05-custom-connectors" }
          ]
        },
        {
          text: "TypeScript",
          collapsed: true,
          items: [
            { text: "Connect Wallet", link: "/sdk/typescript/03-guides/01-connect-wallet" },
            { text: "Authenticate Users with Message Signature", link: "/sdk/typescript/03-guides/02-auth-address" },
            { text: "Signing & Verifying Messages", link: "/sdk/typescript/03-guides/03-sign-message" },
            { text: "No-wallet confirmation signatures", link: "/sdk/typescript/03-guides/04-session-keys" },
            { text: "Sending Transactions", link: "/sdk/typescript/03-guides/05-send-transaction" },
            { text: "Sending ERC-20 Tokens", link: "/sdk/typescript/03-guides/06-send-erc20" },
            { text: "Sending ERC-721 (NFT) Tokens", link: "/sdk/typescript/03-guides/07-send-erc721" },
            { text: "Sending ERC-1155 (Collectible) Tokens", link: "/sdk/typescript/03-guides/08-send-erc1155" },
            { text: "Sending a Batch of Transactions", link: "/sdk/typescript/03-guides/09-send-batch-transactions" },
            { text: "Building Backends with Sequence", link: "/sdk/typescript/03-guides/10-building-backends" },
            {
              text: "Wallet Connectors",
              items: [
                { text: "Overview", link: "/sdk/typescript/03-guides/connectors/01-overview" },
                { text: "SequenceKit", link: "/sdk/sequence-kit/01-overview" },
                { text: "Wagmi", link: "/sdk/typescript/03-guides/connectors/03-wagmi" },
                { text: "RainbowKit", link: "/sdk/typescript/03-guides/connectors/04-rainbow-kit" },
                { text: "Web3 Onboard", link: "/sdk/typescript/03-guides/connectors/05-web3-onboard" },
                { text: "Web3 React V6", link: "/sdk/typescript/03-guides/connectors/06-web3-react-v6" },
                { text: "Web3Modal", link: "/sdk/typescript/03-guides/connectors/07-web3modal" },
                { text: "FAQ", link: "/sdk/typescript/03-guides/connectors/08-FAQ" }
              ]
            }
          ]
        },
        {
          text: "Go",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/go/overview" }
          ]
        }
      ]
    },
    {
      text: "Common Questions",
      collapsed: true,
      items: [
        { text: "How do I do signature validation?", link: "/wallet/sig-validation" }
        // ...
      ]
    }
  ],
  // apis
  "/api": [
    {
      text: "APIs",
      // collapsed: true,
      items: [
        { text: "Embedded Wallet", link: "/api/embedded-wallet" },
        { text: "Indexer", link: "/api/indexer" },
        { text: "Marketplace", link: "/api/marketplace" },
        { text: "Metadata", link: "/api/metadata" },
        { text: "Transaction", link: "/api/transaction" },
        { text: "Node Gateway", link: "/api/node-gateway" }
      ]
    }
  ],
  // Support
  "/support": {
    items: [
      { text: "Support", link: "/support" },
      { text: "Token Directory", link: "/support/token-directory" },
      { text: "Discord", link: "https://discord.gg/sequence" },
      { text: "FAQ", link: "https://support.sequence.xyz" },
      { text: "We're hiring!", link: "https://horizon.io/careers" },
      { text: "Contact Us", link: "https://support.sequence.xyz" }
    ]
  }
};

// vocs.config.tsx
var vocs_config_default = defineConfig({
  title: "Sequence",
  // ogImageUrl: {
  //   '/': '/og-image.png',
  //   '/docs':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  //   '/op-stack':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // },
  // iconUrl: { light: '/favicons/light.png', dark: '/favicons/dark.png' },
  logoUrl: { light: "/img/sequence-composite-light.svg", dark: "/img/sequence-composite-dark.svg" },
  // rootDir: '.',
  basePath: "/",
  topNav,
  sidebar,
  // NOTE: taking up valuable space, will move those
  // to footer and other sections
  // socials: [
  //   {
  //     icon: 'github',
  //     link: 'https://github.com/0xsequence',
  //   },
  //   {
  //     icon: 'discord',
  //     link: 'https://discord.gg/sequence',
  //   },
  //   {
  //     icon: 'x',
  //     link: 'https://x.com/0xsequence',
  //   },
  // ],
  theme: {
    // accentColor: {
    //   light: '#442CA8',
    //   dark: '#99ADED',
    // },
    variables: {
      fontFamily: {
        default: "Inter"
        // mono: 'Roboto Mono'
      }
      // color: {
      //   background: {
      //     light: '#eeeeee',
      //     dark: '#111111',
      //   },
      // background5: {
      //   light: '#dddddd',
      //   dark: '#111111',
      // }
      // backgroundDark: {
      //   light: '#dddddd',
      //   dark: '#151515'
      // }
    }
  }
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIC8vIGljb25Vcmw6IHsgbGlnaHQ6ICcvZmF2aWNvbnMvbGlnaHQucG5nJywgZGFyazogJy9mYXZpY29ucy9kYXJrLnBuZycgfSxcbiAgbG9nb1VybDogeyBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsIGRhcms6ICcvaW1nL3NlcXVlbmNlLWNvbXBvc2l0ZS1kYXJrLnN2ZycgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG5cbiAgLy8gTk9URTogdGFraW5nIHVwIHZhbHVhYmxlIHNwYWNlLCB3aWxsIG1vdmUgdGhvc2VcbiAgLy8gdG8gZm9vdGVyIGFuZCBvdGhlciBzZWN0aW9uc1xuICAvLyBzb2NpYWxzOiBbXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ2dpdGh1YicsXG4gIC8vICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tLzB4c2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ2Rpc2NvcmQnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBpY29uOiAneCcsXG4gIC8vICAgICBsaW5rOiAnaHR0cHM6Ly94LmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyBdLFxuXG4gIHRoZW1lOiB7XG4gICAgLy8gYWNjZW50Q29sb3I6IHtcbiAgICAvLyAgIGxpZ2h0OiAnIzQ0MkNBOCcsXG4gICAgLy8gICBkYXJrOiAnIzk5QURFRCcsXG4gICAgLy8gfSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgZGVmYXVsdDogJ0ludGVyJyxcbiAgICAgICAgLy8gbW9ubzogJ1JvYm90byBNb25vJ1xuICAgICAgfVxuICAgICAgLy8gY29sb3I6IHtcbiAgICAgIC8vICAgYmFja2dyb3VuZDoge1xuICAgICAgLy8gICAgIGxpZ2h0OiAnI2VlZWVlZScsXG4gICAgICAvLyAgICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgLy8gICB9LFxuICAgICAgICAvLyBiYWNrZ3JvdW5kNToge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZERhcms6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTUxNTE1J1xuICAgICAgICAvLyB9XG5cbiAgICAgIH1cbiAgICB9XG5cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL213bS9Qcm9qZWN0cy9zZXF1ZW5jZS9kb2NzLXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9td20vUHJvamVjdHMvc2VxdWVuY2UvZG9jcy12Mi9uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbXdtL1Byb2plY3RzL3NlcXVlbmNlL2RvY3MtdjIvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyLCBUb3BOYXYgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgY29uc3QgdG9wTmF2ID0gW1xuICB7IHRleHQ6ICdTb2x1dGlvbnMnLFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldycsIG1hdGNoOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldycgfSxcbiAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZScsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZScsIG1hdGNoOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2UnIH0sXG4gICAgeyB0ZXh0OiAnQ29sbGVjdGlibGVzJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDAtbWludC1pdGVtcy1mcm9tLUVSQzExNTUnLCBtYXRjaDogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDAtbWludC1pdGVtcy1mcm9tLUVSQzExNTUnIH0sXG4gICAgeyB0ZXh0OiAnUGF5bWVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9uZnQtY2hlY2tvdXQnLCBtYXRjaDogJy9zb2x1dGlvbnMvbmZ0LWNoZWNrb3V0JyB9LFxuICAgIHsgdGV4dDogJ05vLWNvZGUgQnVpbGRlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSwgXG4gICAgXVxuICB9XG5dXG59LFxuXG4gIHsgXG4gICAgdGV4dDogJ0d1aWRlcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1dlYjMgR2FtZSB3aXRoIFdlYkdMJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnLCBtYXRjaDogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnIH0sXG4gICAgICB7IHRleHQ6ICdXZWIzIEdhbWUgd2l0aCBVbml0eScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlJywgbWF0Y2g6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlJyB9LFxuICAgICAgeyB0ZXh0OiAnTG9vdGJveGVzJywgbGluazogJy9ndWlkZXMvbG9vdGJveCcsIG1hdGNoOiAnL2d1aWRlcy9sb290Ym94JyB9LFxuICAgICAgeyB0ZXh0OiAnQ3VzdG9tIE1hcmtldHBsYWNlJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScsIG1hdGNoOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtbWFya2V0cGxhY2UtYXBpJyB9XG4gICAgXVxuICB9LFxuICB7IFxuICAgIHRleHQ6ICdTREtzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVW5pdHknLCBsaW5rOiAnL3Nkay91bml0eS8wMS1vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bml0eS8wMS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1VucmVhbCcsIGxpbms6ICcvc2RrL3VucmVhbCcsIG1hdGNoOiAnL3Nkay91bnJlYWwnIH0sXG4gICAgICB7IHRleHQ6ICdOb2RlLmpzJywgbGluazogJy9zZGsvbm9kZWpzJywgbWF0Y2g6ICcvc2RrL25vZGVqcycgfSxcbiAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMS1vdmVydmlldycsIG1hdGNoOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL2dvJywgbWF0Y2g6ICcvc2RrL2dvL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnLCBtYXRjaDogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL3JlYWN0bmF0aXZlJywgbWF0Y2g6ICcvc2RrL3JlYWN0bmF0aXZlJyB9LFxuICAgICAgeyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJywgbWF0Y2g6ICcvc2RrL2lPUycgfVxuICAgIF1cbiAgfSxcblxuICAvLyByZXBsYWNlIGxpbmtzLlxuICB7IFxuICAgIHRleHQ6ICdBUElzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UnIH0sXG4gICAgICB7IHRleHQ6ICdUcmFuc2FjdGlvbnMgQVBJJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb24nIH0sXG4gICAgICB7IHRleHQ6ICdJbmRleGVyIEFQSScsIGxpbms6ICcvYXBpL2luZGV4ZXInIH0sXG4gICAgICB7IHRleHQ6ICdFbWJlZGRlZCBXYWxsZXRzIEFQSScsIGxpbms6ICcvYXBpL2VtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgIHsgdGV4dDogJ01ldGFkYXRhIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhJyB9LFxuICAgICAgeyB0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JyB9XG4gICAgICAgIF1cbiAgfSxcblxuICB7IFxuICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdXZVxcJ3JlIGhpcmluZyEnLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXVxuICB9XG5dIGFzIFRvcE5hdlxuXG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IHtcbiAgLy8gT3ZlcnZpZXdcbiAgJy9zb2x1dGlvbnMnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1dhbGxldHMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzAyLXF1aWNrc3RhcnQnfSxcbiAgICAgICAgICB7dGV4dDogJ01hbmFnZSBTZXNzaW9ucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzAzLW1hbmFnZS1zZXNzaW9ucyd9LFxuICAgICAgICAgIHt0ZXh0OiAnVXNlIFdhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wNC11c2Utd2FsbGV0cyd9LFxuICAgICAgICAgIHt0ZXh0OiAnVmFsaWRhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzA1LXZhbGlkYXRpb24nfSxcbiAgICAgICAgICB7dGV4dDogJ1RyYW5zYWN0aW9uIFJlY2VpcHRzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvMDYtdHJhbnNhY3Rpb24tcmVjZWlwdHMnfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnVW5pdmVyc2FsIFdhbGxldCcsIGNvbGxhcHNlZDogdHJ1ZSwgXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMi1xdWlja3N0YXJ0J30sXG4gICAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDMtZ3VpZGVzLzAxLWNvbm5lY3Qtd2FsbGV0J30sXG4gICAgICAgICAgICB7dGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAzLWd1aWRlcy8wMi1hdXRoLWFkZHJlc3MnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2lnbmluZyAmIFZlcmlmeWluZyBNZXNzYWdlcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDMtc2lnbi1tZXNzYWdlJ30sXG4gICAgICAgICAgICB7dGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDQtc2Vzc2lvbi1rZXlzJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAzLWd1aWRlcy8wNS1zZW5kLXRyYW5zYWN0aW9uJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDYtc2VuZC1lcmMyMCd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAzLWd1aWRlcy8wNy1zZW5kLWVyYzcyMSd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAzLWd1aWRlcy8wOC1zZW5kLWVyYzExNTUnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDktc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMTAtYnVpbGRpbmctYmFja2VuZHMnfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgICAge3RleHQ6ICdTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDQtc2VxdWVuY2Uta2l0J30sXG4gICAgICAgICAge3RleHQ6ICdTdXBwb3J0ZWQgUGxhdGZvcm1zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzA1LXBsYXRmb3Jtcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnRmlhdCBPbi1SYW1wcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wNi1maWF0LW9uLXJhbXBzJ30sXG4gICAgICAgICAge3RleHQ6ICdLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wNy1rZXktbWFuYWdlbWVudCd9XG4gICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01hcmtldHBsYWNlJyxcbiAgICAgIC8vIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1doaXRlLWxhYmVsIE1hcmtldHBsYWNlJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL3doaXRlLWxhYmVsLW1hcmtldHBsYWNlJyB9LFxuICAgICAgICB7IHRleHQ6ICdCdWlsZCB5b3VyIEN1c3RvbSBNYXJrZXRwbGFjZScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svMDItcXVpY2tzdGFydCd9LFxuICAgICAgICAgIHt0ZXh0OiAnR2V0IFRvcCBPcmRlcnMnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rLzAzLWdldC10b3Atb3JkZXJzJ30sXG4gICAgICAgICAge3RleHQ6ICdHZXQgT3JkZXJib29rJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay8wNC1nZXQtb3JkZXJib29rJ30sXG4gICAgICAgICAge3RleHQ6ICdHZXQgVXNlciBBY3Rpdml0aWVzJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay8wNS1nZXQtdXNlci1hY3Rpdml0aWVzJ30sXG4gICAgICAgICAge3RleHQ6ICdPcmRlcmJvb2sgVHJhbnNhY3Rpb25zJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay8wNi1vcmRlcmJvb2stdHJhbnNhY3Rpb25zJ30sXG4gICAgICAgIF1cbiAgICAgICB9XG4gICAgICBdIFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NvbGxlY3RpYmxlcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdEZXBsb3lhYmxlIENvbnRyYWN0cycgLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdEZXBsb3kgYW4gSXRlbSBDb2xsZWN0aW9uIENvbnRyYWN0ICAnLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzIwMC1kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uLWNvbnRyYWN0J30sXG4gICAgICAgICAge3RleHQ6ICdNaW50IEluLUdhbWUgSXRlbXMgYW5kIEFjaGlldmVtZW50cyAoRVJDMTE1NSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMC1taW50LWl0ZW1zLWZyb20tRVJDMTE1NSd9LFxuICAgICAgICAgIHt0ZXh0OiAnTWludCBEaWdpdGFsIENvbGxlY3RpYmxlcyAoRVJDNzIxKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAyLW1pbnQtY29sbGVjdGlibGVzLWZyb20tRVJDNzIxJ30sXG4gICAgICAgICAge3RleHQ6ICdNaW50IEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAzLW1pbnQtY3VycmVuY3ktZnJvbS1FUkMyMCd9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnTWV0YWRhdGEnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnTWFuYWdlIE1ldGFkYXRhIGluIEJ1aWxkZXInLGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9tZXRhZGF0YS84MDAtbWFuYWdlLW1ldGFkYXRhLWJ1aWxkZXInIH1cbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnUGF5bWVudHMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnTkZUIENoZWNrb3V0JywgbGluazogJy9zb2x1dGlvbnMvbmZ0LWNoZWNrb3V0JyB9LFxuICAgICAgICB7IHRleHQ6ICdPbnJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy8wMS1maWF0LW9uLXJhbXBzJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05vLWNvZGUgQnVpbGRlcicsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0dldCBTdGFydGVkJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgIHt0ZXh0OiAnUHJvamVjdCBNYW5hZ2VtZW50JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9wcm9qZWN0LW1hbmFnZW1lbnQnfSxcbiAgICAgICAge3RleHQ6ICdDb250cmFjdHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cyd9LFxuICAgICAgICB7dGV4dDogJ1dhbGxldCBTREtzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93YWxsZXQtc2Rrcyd9LFxuICAgICAgICB7dGV4dDogJ0dhcyBUYW5rJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuayd9LFxuICAgICAgICB7dGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5J30sXG4gICAgICAgIHt0ZXh0OiAnTWFya2V0cGxhY2VzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9tYXJrZXRwbGFjZXMnfSxcbiAgICAgICAge3RleHQ6ICdJbmRleGVyJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9pbmRleGVyJ30sXG4gICAgICAgIHt0ZXh0OiAnU2V0dGluZ3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3Qtc2V0dGluZ3MnfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZWNobmljYWwgUmVmZXJlbmNlcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDaGFpbiBTdXBwb3J0JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnU21hcnQgQ29udHJhY3QgV2FsbGV0cycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdXaHkgc21hcnQgY29udHJhY3Qgd2FsbGV0cz8nLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzAxLXdoeScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml2ZXJzYWwgRGVwbG95ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzAyLXVuaXZlcnNhbC1kZXBsb3llcicgfSxcbiAgICAgICAgICB7dGV4dDogJ1dhbGxldCBGYWN0b3J5JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvd2FsbGV0LWNvbnRyYWN0cy8wMy13YWxsZXQtZmFjdG9yeSd9LFxuICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzA0LXdhbGxldC1jb25maWd1cmF0aW9uJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdNb2R1bGVzICYgV2FsbGV0IHVwZGF0ZScsIGxpbms6ICdzb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvd2FsbGV0LWNvbnRyYWN0cy8wNS1tb2R1bGVzLWFuZC11cGRhdGVzJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdNYWluTW9kdWxlVXBncmFkZWFibGUgJiBjb25maWd1cmF0aW9uIG1pZ3JhdGlvbicsIGxpbms6ICdzb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvd2FsbGV0LWNvbnRyYWN0cy8wNi1tYWluLW1vZHVsZS11cGdyYWRlYWJsZSd9LFxuICAgICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzA3LXRyYW5zYWN0aW9uLWVuY29kaW5nJ30sXG4gICAgICAgICAge3RleHQ6ICdTaWduYXR1cmUgRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzA4LXNpZ25hdHVyZS1lbmNvZGluZyd9LFxuICAgICAgICAgIC8vIHt0ZXh0OiAnTmVzdGVkIFRyYW5zYWN0aW9uIEJhdGNoaW5nJywgbGluazogJ3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzA5LW5lc3RlZC10cmFuc2FjdGlvbi1iYXRjaGluZyd9LFxuICAgICAgICAgIC8vIHt0ZXh0OiAnR3Vlc3RNb2R1bGUgYW5kIG9uLWRlbWFuZCBkZXBsb3ltZW50JywgbGluazogJ3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzEwLWd1ZXN0LW1vZHVsZSd9LFxuICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IENvbnRleHQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzExLXdhbGxldC1jb250ZXh0J30sXG4gICAgICAgICAge3RleHQ6ICdDb250cmFjdCBBdWRpdHMnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzEyLWNvbnRyYWN0LWF1ZGl0cyd9LFxuICAgICAgICBdIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFxuICBdLFxuXG4gICcvZ3VpZGVzJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIGdhbWUgd2l0aCBXZWJHTCcsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgU2VxdWVuY2VLaXQgd2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjaW50ZWdyYXRlLXNlcXVlbmNla2l0LXdpdGgtd2FhcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGEgY29sbGVjdGlibGVzIGNvbnRyYWN0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSByZW1vdGUgbWludGVyJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjZGVwbG95LWEtcmVtb3RlLW1pbnRlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWludCBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlI21pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1cm4gaW4tZ2FtZSBhY2hpZXZlbWVudCB0b2tlbnMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNidXJuLWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgYW4gZW1iZWRkZWQgbWFya2V0cGxhY2UnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNpbnRlZ3JhdGUtYW4tZW1iZWRkZWQtbWFya2V0cGxhY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0xldmVyYWdlIHB1cmNoYXNlZCBpdGVtcyBpbi1nYW1lJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGQgYSBtb2JpbGUgVW5pdHkgZ2FtZScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgU2VxdWVuY2VLaXQgd2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjaW50ZWdyYXRlLXNlcXVlbmNla2l0LXdpdGgtd2FhcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGEgY29sbGVjdGlibGVzIGNvbnRyYWN0JywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSByZW1vdGUgbWludGVyJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtcmVtb3RlLW1pbnRlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWludCBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI21pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1cm4gaW4tZ2FtZSBhY2hpZXZlbWVudCB0b2tlbnMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNidXJuLWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgYW4gZW1iZWRkZWQgbWFya2V0cGxhY2UnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRlZ3JhdGUtYW4tZW1iZWRkZWQtbWFya2V0cGxhY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0xldmVyYWdlIHB1cmNoYXNlZCBpdGVtcyBpbi1nYW1lJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGQgYSBsb290Ym94IHdpdGggQUkgbWludGluZycsXG4gICAgICBsaW5rOiAnL2d1aWRlcy9sb290Ym94J1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0ludGVncmF0ZSB0b2tlbiByZXdhcmRzIGludG8geW91ciBEaXNjb3JkIHNlcnZlcicsXG4gICAgICBsaW5rOiAnL2d1aWRlcy9kaXNjb3JkJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1RlbXBsYXRlcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdFbWJlZGRlZCBXYWxsZXQgRGVtbycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy90ZW1wbGF0ZS1lbWJlZGRlZC13YWxsZXQnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1aWxkaW5nIEJhY2tlbmQgUmVsYXlpbmcgU2VydmVyJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzLzAyLWJ1aWxkaW5nLXJlbGF5aW5nLXNlcnZlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnU2VydmVybGVzcyBNaW50aW5nIG9mIENvbGxlY3RpYmxlcycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy8wMy1taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzJyB9LFxuICAgICAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEkgRGVtbycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy90ZW1wbGF0ZS1tYXJrZXRwbGFjZS1hcGknIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgbGluazogJy9zZGsvdW5yZWFsJyB9LFxuICAgICAgICB7IHRleHQ6ICdVbml0eScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3VuaXR5LzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5LzAyLWluc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VuaXR5LzAzLXNldHVwJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0F1dGhlbnRpY2F0aW9uJywgbGluazogJy9zZGsvdW5pdHkvMDQtYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gYmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5LzA1LXdyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS8wNi1yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTaWduIE1lc3NhZ2VzJywgbGluazogJy9zZGsvdW5pdHkvMDctc2lnbi1tZXNzYWdlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdEZXBsb3kgQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvMDgtZGVwbG95LWNvbnRyYWN0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdXYWxsZXQgVUknLCBsaW5rOiAnL3Nkay91bml0eS8wOS13YWxsZXQtdWknIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQWR2YW5jZWQnLCBjb2xsYXBzZWQ6IHRydWUsICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDEtaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzAyLXdhbGxldHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDbGllbnRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDMtY2xpZW50cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1RyYW5zZmVycycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzA0LXRyYW5zZmVycycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzA1LWNvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VucycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzA2LXRva2VucycgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb2JpbGUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnIH0sXG4gICAgICAgIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVhY3QgTmF0aXZlJywgbGluazogJy9zZGsvcmVhY3QtbmF0aXZlJyB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6ICdXZWIzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1NlcXVlbmNlS2l0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDItZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDMtY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDaGVja291dCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wNC1jaGVja291dCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDdXN0b20gQ29ubmVjdG9ycycsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wNS1jdXN0b20tY29ubmVjdG9ycycgfVxuICAgICAgICBdXG4gICAgICAgfSxcblxuICAgICAgICB7IHRleHQ6ICdUeXBlU2NyaXB0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wMS1jb25uZWN0LXdhbGxldCd9LFxuICAgICAgICAgIHt0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wMi1hdXRoLWFkZHJlc3MnfSxcbiAgICAgICAgICB7dGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wMy1zaWduLW1lc3NhZ2UnfSxcbiAgICAgICAgICB7dGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA0LXNlc3Npb24ta2V5cyd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wNS1zZW5kLXRyYW5zYWN0aW9uJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wNi1zZW5kLWVyYzIwJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDctc2VuZC1lcmM3MjEnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wOC1zZW5kLWVyYzExNTUnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wOS1zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucyd9LFxuICAgICAgICAgIHt0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzEwLWJ1aWxkaW5nLWJhY2tlbmRzJ30sXG4gICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29ubmVjdG9ycycsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvY29ubmVjdG9ycy8wMS1vdmVydmlldyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZXF1ZW5jZUtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWdtaScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzL2Nvbm5lY3RvcnMvMDMtd2FnbWknfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnUmFpbmJvd0tpdCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzL2Nvbm5lY3RvcnMvMDQtcmFpbmJvdy1raXQnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2ViMyBPbmJvYXJkJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvY29ubmVjdG9ycy8wNS13ZWIzLW9uYm9hcmQnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2ViMyBSZWFjdCBWNicsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzL2Nvbm5lY3RvcnMvMDYtd2ViMy1yZWFjdC12Nid9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzTW9kYWwnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9jb25uZWN0b3JzLzA3LXdlYjNtb2RhbCd9LFxuICAgICAgICAgICAge3RleHQ6ICdGQVEnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9jb25uZWN0b3JzLzA4LUZBUSd9LFxuICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0gXG4gICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdHbycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnfSxdXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29tbW9uIFF1ZXN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdIb3cgZG8gSSBkbyBzaWduYXR1cmUgdmFsaWRhdGlvbj8nLCBsaW5rOiAnL3dhbGxldC9zaWctdmFsaWRhdGlvbicgfVxuICAgICAgICAvLyAuLi5cbiAgICAgIF1cbiAgICB9LFxuICBdLFxuXG4gICAgLy8gYXBpc1xuICAgICcvYXBpJzogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQVBJcycsXG4gICAgICAgIC8vIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdFbWJlZGRlZCBXYWxsZXQnLCBsaW5rOiAnL2FwaS9lbWJlZGRlZC13YWxsZXQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvYXBpL2luZGV4ZXInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1RyYW5zYWN0aW9uJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JyB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF0sXG4gIFxuXG4gIC8vIFN1cHBvcnRcbiAgJy9zdXBwb3J0Jzoge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdTdXBwb3J0JywgbGluazogJy9zdXBwb3J0JyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdXZVxcJ3JlIGhpcmluZyEnLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXVxuICB9XG5cbn0gYXMgU2lkZWJhclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW9COzs7QUNFdEIsSUFBTSxTQUFTO0FBQUEsRUFDcEI7QUFBQSxJQUFFLE1BQU07QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxXQUFXLE1BQU0sa0RBQWtELE9BQU8saURBQWlEO0FBQUEsTUFDbkksRUFBRSxNQUFNLGVBQWUsTUFBTSxtREFBbUQsT0FBTyxrREFBa0Q7QUFBQSxNQUN6SSxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0saUVBQWlFLE9BQU8sZ0VBQWdFO0FBQUEsTUFDdEssRUFBRSxNQUFNLFlBQVksTUFBTSwyQkFBMkIsT0FBTywwQkFBMEI7QUFBQSxNQUN0RjtBQUFBLFFBQUUsTUFBTTtBQUFBLFFBQW1CLE1BQU07QUFBQSxRQUErQixPQUFPO0FBQUEsUUFBK0IsT0FBTztBQUFBLFVBQzNHLEVBQUUsTUFBTSxZQUFZLE1BQU0sK0JBQStCLE9BQU8sOEJBQThCO0FBQUEsUUFDaEc7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0E7QUFBQSxFQUVFO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sdUJBQXVCLE9BQU8sc0JBQXNCO0FBQUEsTUFDMUYsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHVCQUF1QixPQUFPLHNCQUFzQjtBQUFBLE1BQzFGLEVBQUUsTUFBTSxhQUFhLE1BQU0sbUJBQW1CLE9BQU8sa0JBQWtCO0FBQUEsTUFDdkUsRUFBRSxNQUFNLHNCQUFzQixNQUFNLDhDQUE4QyxPQUFPLDZDQUE2QztBQUFBLElBQ3hJO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxTQUFTLE1BQU0sMEJBQTBCLE9BQU8seUJBQXlCO0FBQUEsTUFDakYsRUFBRSxNQUFNLFVBQVUsTUFBTSxlQUFlLE9BQU8sY0FBYztBQUFBLE1BQzVELEVBQUUsTUFBTSxXQUFXLE1BQU0sZUFBZSxPQUFPLGNBQWM7QUFBQSxNQUM3RCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0saUNBQWlDLE9BQU8sZ0NBQWdDO0FBQUEsTUFDdEcsRUFBRSxNQUFNLE1BQU0sTUFBTSxjQUFjLE9BQU8sbUJBQW1CO0FBQUEsTUFDNUQsRUFBRSxNQUFNLFdBQVcsTUFBTSxnQkFBZ0IsT0FBTyxlQUFlO0FBQUEsTUFDL0QsRUFBRSxNQUFNLGdCQUFnQixNQUFNLG9CQUFvQixPQUFPLG1CQUFtQjtBQUFBLE1BQzVFLEVBQUUsTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLFdBQVc7QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUI7QUFBQSxNQUNwRCxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CO0FBQUEsTUFDckQsRUFBRSxNQUFNLGVBQWUsTUFBTSxlQUFlO0FBQUEsTUFDNUMsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHVCQUF1QjtBQUFBLE1BQzdELEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0I7QUFBQSxNQUM5QyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CO0FBQUEsSUFDaEQ7QUFBQSxFQUNOO0FBQUEsRUFFQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLG1CQUFtQixNQUFNLDJCQUEyQjtBQUFBLE1BQzVELEVBQUUsTUFBTSxXQUFXLE1BQU0sOEJBQThCO0FBQUEsTUFDdkQsRUFBRSxNQUFNLE9BQU8sTUFBTSwrQkFBK0I7QUFBQSxNQUNwRCxFQUFFLE1BQU0saUJBQWtCLE1BQU0sNkJBQTZCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLGNBQWMsTUFBTSwrQkFBK0I7QUFBQSxJQUM3RDtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sVUFBVTtBQUFBO0FBQUEsRUFFckIsY0FBYztBQUFBLElBQ1o7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBbUIsV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQ2pELEVBQUMsTUFBTSxZQUFZLE1BQU0saURBQWdEO0FBQUEsWUFDekUsRUFBQyxNQUFNLGNBQWMsTUFBTSxtREFBa0Q7QUFBQSxZQUM3RSxFQUFDLE1BQU0sbUJBQW1CLE1BQU0sd0RBQXVEO0FBQUEsWUFDdkYsRUFBQyxNQUFNLGVBQWUsTUFBTSxvREFBbUQ7QUFBQSxZQUMvRSxFQUFDLE1BQU0sY0FBYyxNQUFNLG1EQUFrRDtBQUFBLFlBQzdFLEVBQUMsTUFBTSx3QkFBd0IsTUFBTSw2REFBNEQ7QUFBQSxVQUNuRztBQUFBLFFBQ0Y7QUFBQSxRQUNFO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBb0IsV0FBVztBQUFBLFVBQ3ZDLE9BQU87QUFBQSxZQUNMLEVBQUMsTUFBTSxZQUFZLE1BQU0sa0RBQWlEO0FBQUEsWUFDMUUsRUFBQyxNQUFNLGNBQWMsTUFBTSxvREFBbUQ7QUFBQSxZQUM5RTtBQUFBLGNBQUMsTUFBTTtBQUFBLGNBQVksV0FBVztBQUFBLGNBQU0sT0FBTztBQUFBLGdCQUN6QyxFQUFDLE1BQU0sa0JBQWtCLE1BQU0sa0VBQWlFO0FBQUEsZ0JBQ2hHLEVBQUMsTUFBTSw2Q0FBNkMsTUFBTSxnRUFBK0Q7QUFBQSxnQkFDekgsRUFBQyxNQUFNLGdDQUFnQyxNQUFNLGdFQUErRDtBQUFBLGdCQUM1RyxFQUFDLE1BQU0scUNBQXFDLE1BQU0sZ0VBQStEO0FBQUEsZ0JBQ2pILEVBQUMsTUFBTSx3QkFBd0IsTUFBTSxvRUFBbUU7QUFBQSxnQkFDeEcsRUFBQyxNQUFNLHlCQUF5QixNQUFNLDhEQUE2RDtBQUFBLGdCQUNuRyxFQUFDLE1BQU0sZ0NBQWdDLE1BQU0sK0RBQThEO0FBQUEsZ0JBQzNHLEVBQUMsTUFBTSx5Q0FBeUMsTUFBTSxnRUFBK0Q7QUFBQSxnQkFDckgsRUFBQyxNQUFNLG1DQUFtQyxNQUFNLDJFQUEwRTtBQUFBLGdCQUMxSCxFQUFDLE1BQU0sbUNBQW1DLE1BQU0scUVBQW9FO0FBQUEsY0FDdEg7QUFBQSxZQUNGO0FBQUEsWUFDRSxFQUFDLE1BQU0sZ0JBQWdCLE1BQU0sc0RBQXFEO0FBQUEsWUFDbEYsRUFBQyxNQUFNLHVCQUF1QixNQUFNLG1EQUFrRDtBQUFBLFlBQ3RGLEVBQUMsTUFBTSxpQkFBaUIsTUFBTSx1REFBc0Q7QUFBQSxZQUNwRixFQUFDLE1BQU0sa0JBQWtCLE1BQU0sd0RBQXVEO0FBQUEsVUFDeEY7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUE7QUFBQSxNQUVOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSwyQkFBMkIsTUFBTSxrREFBa0Q7QUFBQSxRQUMzRjtBQUFBLFVBQUUsTUFBTTtBQUFBLFVBQWlDLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUMvRCxFQUFDLE1BQU0sWUFBWSxNQUFNLGdEQUErQztBQUFBLFlBQ3hFLEVBQUMsTUFBTSxjQUFjLE1BQU0sa0RBQWlEO0FBQUEsWUFDNUUsRUFBQyxNQUFNLGtCQUFrQixNQUFNLHNEQUFxRDtBQUFBLFlBQ3BGLEVBQUMsTUFBTSxpQkFBaUIsTUFBTSxxREFBb0Q7QUFBQSxZQUNsRixFQUFDLE1BQU0sdUJBQXVCLE1BQU0sMkRBQTBEO0FBQUEsWUFDOUYsRUFBQyxNQUFNLDBCQUEwQixNQUFNLDhEQUE2RDtBQUFBLFVBQ3RHO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUF5QixXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDdkQsRUFBQyxNQUFNLHdDQUF3QyxNQUFNLDJFQUEwRTtBQUFBLFlBQy9ILEVBQUMsTUFBTSxpREFBaUQsTUFBTSxnRUFBK0Q7QUFBQSxZQUM3SCxFQUFDLE1BQU0sc0NBQXNDLE1BQU0sc0VBQXFFO0FBQUEsWUFDeEgsRUFBQyxNQUFNLGlDQUFpQyxNQUFNLGlFQUFnRTtBQUFBLFVBQ2hIO0FBQUEsUUFDRjtBQUFBLFFBQ0U7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUFZLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUMxQyxFQUFFLE1BQU0sOEJBQTZCLE1BQU0sK0RBQStEO0FBQUEsVUFDNUc7QUFBQSxRQUNGO0FBQUE7QUFBQSxNQUVBO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSwwQkFBMEI7QUFBQSxRQUN4RCxFQUFFLE1BQU0sV0FBVyxNQUFNLCtDQUErQztBQUFBLE1BQzFFO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sOEJBQThCO0FBQUEsUUFDeEQsRUFBRSxNQUFNLGVBQWUsTUFBTSxxQ0FBcUM7QUFBQSxRQUNsRSxFQUFDLE1BQU0sc0JBQXNCLE1BQU0sd0NBQXVDO0FBQUEsUUFDMUUsRUFBQyxNQUFNLGFBQWEsTUFBTSwrQkFBOEI7QUFBQSxRQUN4RCxFQUFDLE1BQU0sZUFBZSxNQUFNLGlDQUFnQztBQUFBLFFBQzVELEVBQUMsTUFBTSxZQUFZLE1BQU0sOEJBQTZCO0FBQUEsUUFDdEQsRUFBQyxNQUFNLGdCQUFnQixNQUFNLGtDQUFpQztBQUFBLFFBQzlELEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxrQ0FBaUM7QUFBQSxRQUM5RCxFQUFDLE1BQU0sV0FBVyxNQUFNLDZCQUE0QjtBQUFBLFFBQ3BELEVBQUMsTUFBTSxZQUFZLE1BQU0sc0NBQXFDO0FBQUEsTUFDaEU7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLGlCQUFpQixNQUFNLGdEQUFnRDtBQUFBLFFBQy9FLEVBQUUsTUFBTSwwQkFBMEIsV0FBVyxNQUFNLE9BQU87QUFBQSxVQUN4RCxFQUFFLE1BQU0sK0JBQStCLE1BQU0sMERBQTBEO0FBQUEsVUFDdkcsRUFBRSxNQUFNLHNCQUFzQixNQUFNLHlFQUF5RTtBQUFBLFVBQzdHLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSxxRUFBb0U7QUFBQSxVQUNuRyxFQUFDLE1BQU0sd0JBQXdCLE1BQU0sMkVBQTBFO0FBQUE7QUFBQTtBQUFBLFVBRy9HLEVBQUMsTUFBTSx3QkFBd0IsTUFBTSwyRUFBMEU7QUFBQSxVQUMvRyxFQUFDLE1BQU0sc0JBQXNCLE1BQU0seUVBQXdFO0FBQUE7QUFBQTtBQUFBLFVBRzNHLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSxxRUFBb0U7QUFBQSxVQUNuRyxFQUFDLE1BQU0sbUJBQW1CLE1BQU0sc0VBQXFFO0FBQUEsUUFDdkcsRUFBRTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFFRjtBQUFBLEVBRUEsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxtQ0FBbUMsTUFBTSxzREFBc0Q7QUFBQSxRQUN2RyxFQUFFLE1BQU0sa0NBQWtDLE1BQU0scURBQXFEO0FBQUEsUUFDckcsRUFBRSxNQUFNLDBCQUEwQixNQUFNLDZDQUE2QztBQUFBLFFBQ3JGLEVBQUUsTUFBTSxtQ0FBbUMsTUFBTSxzREFBc0Q7QUFBQSxRQUN2RyxFQUFFLE1BQU0sbUNBQW1DLE1BQU0sc0RBQXNEO0FBQUEsUUFDdkcsRUFBRSxNQUFNLHFDQUFxQyxNQUFNLHdEQUF3RDtBQUFBLFFBQzNHLEVBQUUsTUFBTSxvQ0FBb0MsTUFBTSx1REFBdUQ7QUFBQSxNQUMzRztBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sbUNBQW1DLE1BQU0sc0RBQXNEO0FBQUEsUUFDdkcsRUFBRSxNQUFNLGtDQUFrQyxNQUFNLHFEQUFxRDtBQUFBLFFBQ3JHLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSw2Q0FBNkM7QUFBQSxRQUNyRixFQUFFLE1BQU0sbUNBQW1DLE1BQU0sc0RBQXNEO0FBQUEsUUFDdkcsRUFBRSxNQUFNLG1DQUFtQyxNQUFNLHNEQUFzRDtBQUFBLFFBQ3ZHLEVBQUUsTUFBTSxxQ0FBcUMsTUFBTSx3REFBd0Q7QUFBQSxRQUMzRyxFQUFFLE1BQU0sb0NBQW9DLE1BQU0sdURBQXVEO0FBQUEsTUFDM0c7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSw2Q0FBNkM7QUFBQSxRQUNuRixFQUFFLE1BQU0sb0NBQW9DLE1BQU0sZ0RBQWdEO0FBQUEsUUFDbEcsRUFBRSxNQUFNLHNDQUFzQyxNQUFNLG9EQUFvRDtBQUFBLFFBQ3hHLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSw2Q0FBNkM7QUFBQSxNQUNyRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUE7QUFBQSxNQUVOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0sY0FBYztBQUFBLFFBQ3RDO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBUyxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDdkMsRUFBRSxNQUFNLFlBQVksTUFBTSx5QkFBeUI7QUFBQSxZQUNuRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sNkJBQTZCO0FBQUEsWUFDM0QsRUFBRSxNQUFNLFNBQVMsTUFBTSxzQkFBc0I7QUFBQSxZQUM3QyxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sK0JBQStCO0FBQUEsWUFDL0QsRUFBRSxNQUFNLHVCQUF1QixNQUFNLG9DQUFvQztBQUFBLFlBQ3pFLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQ0FBcUM7QUFBQSxZQUMzRSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sOEJBQThCO0FBQUEsWUFDN0QsRUFBRSxNQUFNLG9CQUFvQixNQUFNLGlDQUFpQztBQUFBLFlBQ25FLEVBQUUsTUFBTSxhQUFhLE1BQU0sMEJBQTBCO0FBQUEsWUFDckQ7QUFBQSxjQUFFLE1BQU07QUFBQSxjQUFZLFdBQVc7QUFBQSxjQUFPLE9BQU87QUFBQSxnQkFDM0MsRUFBRSxNQUFNLGdCQUFnQixNQUFNLHNDQUFzQztBQUFBLGdCQUNwRSxFQUFFLE1BQU0sV0FBVyxNQUFNLGlDQUFpQztBQUFBLGdCQUMxRCxFQUFFLE1BQU0sV0FBVyxNQUFNLGlDQUFpQztBQUFBLGdCQUMxRCxFQUFFLE1BQU0sYUFBYSxNQUFNLG1DQUFtQztBQUFBLGdCQUM5RCxFQUFFLE1BQU0sYUFBYSxNQUFNLG1DQUFtQztBQUFBLGdCQUM5RCxFQUFFLE1BQU0sVUFBVSxNQUFNLGdDQUFnQztBQUFBLGNBQ3ZEO0FBQUEsWUFDRjtBQUFBLFVBQ0Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLGVBQWU7QUFBQSxRQUN4QyxFQUFFLE1BQU0sT0FBTyxNQUFNLFdBQVc7QUFBQSxRQUNoQyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CO0FBQUEsTUFDcEQ7QUFBQSxJQUNGO0FBQUEsSUFFQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFlLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUM3QyxFQUFFLE1BQU0sWUFBWSxNQUFNLGdDQUFnQztBQUFBLFlBQzFELEVBQUUsTUFBTSxjQUFjLE1BQU0sdUNBQXVDO0FBQUEsWUFDbkUsRUFBRSxNQUFNLGlCQUFpQixNQUFNLHFDQUFxQztBQUFBLFlBQ3BFLEVBQUUsTUFBTSxZQUFZLE1BQU0sZ0NBQWdDO0FBQUEsWUFDMUQsRUFBRSxNQUFNLHFCQUFxQixNQUFNLHlDQUF5QztBQUFBLFVBQzlFO0FBQUEsUUFDRDtBQUFBLFFBRUM7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFjLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUM1QyxFQUFDLE1BQU0sa0JBQWtCLE1BQU0sOENBQTZDO0FBQUEsWUFDNUUsRUFBQyxNQUFNLDZDQUE2QyxNQUFNLDRDQUEyQztBQUFBLFlBQ3JHLEVBQUMsTUFBTSxnQ0FBZ0MsTUFBTSw0Q0FBMkM7QUFBQSxZQUN4RixFQUFDLE1BQU0scUNBQXFDLE1BQU0sNENBQTJDO0FBQUEsWUFDN0YsRUFBQyxNQUFNLHdCQUF3QixNQUFNLGdEQUErQztBQUFBLFlBQ3BGLEVBQUMsTUFBTSx5QkFBeUIsTUFBTSwwQ0FBeUM7QUFBQSxZQUMvRSxFQUFDLE1BQU0sZ0NBQWdDLE1BQU0sMkNBQTBDO0FBQUEsWUFDdkYsRUFBQyxNQUFNLHlDQUF5QyxNQUFNLDRDQUEyQztBQUFBLFlBQ2pHLEVBQUMsTUFBTSxtQ0FBbUMsTUFBTSx1REFBc0Q7QUFBQSxZQUN0RyxFQUFDLE1BQU0sbUNBQW1DLE1BQU0saURBQWdEO0FBQUEsWUFDaEc7QUFBQSxjQUFDLE1BQU07QUFBQSxjQUFxQixPQUFPO0FBQUEsZ0JBQ2pDLEVBQUMsTUFBTSxZQUFZLE1BQU0sbURBQWtEO0FBQUEsZ0JBQzNFLEVBQUMsTUFBTSxlQUFlLE1BQU0sZ0NBQStCO0FBQUEsZ0JBQzNELEVBQUMsTUFBTSxTQUFTLE1BQU0sZ0RBQStDO0FBQUEsZ0JBQ3JFLEVBQUMsTUFBTSxjQUFjLE1BQU0sc0RBQXFEO0FBQUEsZ0JBQ2hGLEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSx1REFBc0Q7QUFBQSxnQkFDbkYsRUFBQyxNQUFNLGlCQUFpQixNQUFNLHdEQUF1RDtBQUFBLGdCQUNyRixFQUFDLE1BQU0sYUFBYSxNQUFNLG9EQUFtRDtBQUFBLGdCQUM3RSxFQUFDLE1BQU0sT0FBTyxNQUFNLDhDQUE2QztBQUFBLGNBQ2hFO0FBQUEsWUFDSDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDRTtBQUFBLFVBQUUsTUFBTTtBQUFBLFVBQU0sV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQ3BDLEVBQUMsTUFBTSxZQUFZLE1BQU0sbUJBQWtCO0FBQUEsVUFBRTtBQUFBLFFBRS9DO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0scUNBQXFDLE1BQU0seUJBQXlCO0FBQUE7QUFBQSxNQUU5RTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdFLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUE7QUFBQSxNQUVOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSx1QkFBdUI7QUFBQSxRQUN4RCxFQUFFLE1BQU0sV0FBVyxNQUFNLGVBQWU7QUFBQSxRQUN4QyxFQUFFLE1BQU0sZUFBZSxNQUFNLG1CQUFtQjtBQUFBLFFBQ2hELEVBQUUsTUFBTSxZQUFZLE1BQU0sZ0JBQWdCO0FBQUEsUUFDMUMsRUFBRSxNQUFNLGVBQWUsTUFBTSxtQkFBbUI7QUFBQSxRQUNoRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CO0FBQUEsTUFDcEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJRixZQUFZO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLFdBQVc7QUFBQSxNQUNwQyxFQUFFLE1BQU0sbUJBQW1CLE1BQU0sMkJBQTJCO0FBQUEsTUFDNUQsRUFBRSxNQUFNLFdBQVcsTUFBTSw4QkFBOEI7QUFBQSxNQUN2RCxFQUFFLE1BQU0sT0FBTyxNQUFNLCtCQUErQjtBQUFBLE1BQ3BELEVBQUUsTUFBTSxpQkFBa0IsTUFBTSw2QkFBNkI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sY0FBYyxNQUFNLCtCQUErQjtBQUFBLElBQzdEO0FBQUEsRUFDRjtBQUVGOzs7QUQzVkEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVQLFNBQVMsRUFBRSxPQUFPLHFDQUFxQyxNQUFNLG1DQUFtQztBQUFBO0FBQUEsRUFHaEcsVUFBVTtBQUFBLEVBRVY7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW9CQSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtMLFdBQVc7QUFBQSxNQUNULFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQTtBQUFBLE1BRVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZ0JBO0FBQUEsRUFDRjtBQUVKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
