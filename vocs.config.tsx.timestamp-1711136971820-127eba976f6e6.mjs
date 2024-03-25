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
              text: "Guides",
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
            { text: "Quickstart", link: "/solutions/marketplaces/orderbook/02-quickstart" }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIC8vIGljb25Vcmw6IHsgbGlnaHQ6ICcvZmF2aWNvbnMvbGlnaHQucG5nJywgZGFyazogJy9mYXZpY29ucy9kYXJrLnBuZycgfSxcbiAgbG9nb1VybDogeyBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsIGRhcms6ICcvaW1nL3NlcXVlbmNlLWNvbXBvc2l0ZS1kYXJrLnN2ZycgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG5cbiAgLy8gTk9URTogdGFraW5nIHVwIHZhbHVhYmxlIHNwYWNlLCB3aWxsIG1vdmUgdGhvc2VcbiAgLy8gdG8gZm9vdGVyIGFuZCBvdGhlciBzZWN0aW9uc1xuICAvLyBzb2NpYWxzOiBbXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ2dpdGh1YicsXG4gIC8vICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tLzB4c2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ2Rpc2NvcmQnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBpY29uOiAneCcsXG4gIC8vICAgICBsaW5rOiAnaHR0cHM6Ly94LmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyBdLFxuXG4gIHRoZW1lOiB7XG4gICAgLy8gYWNjZW50Q29sb3I6IHtcbiAgICAvLyAgIGxpZ2h0OiAnIzQ0MkNBOCcsXG4gICAgLy8gICBkYXJrOiAnIzk5QURFRCcsXG4gICAgLy8gfSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgZGVmYXVsdDogJ0ludGVyJyxcbiAgICAgICAgLy8gbW9ubzogJ1JvYm90byBNb25vJ1xuICAgICAgfVxuICAgICAgLy8gY29sb3I6IHtcbiAgICAgIC8vICAgYmFja2dyb3VuZDoge1xuICAgICAgLy8gICAgIGxpZ2h0OiAnI2VlZWVlZScsXG4gICAgICAvLyAgICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgLy8gICB9LFxuICAgICAgICAvLyBiYWNrZ3JvdW5kNToge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZERhcms6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTUxNTE1J1xuICAgICAgICAvLyB9XG5cbiAgICAgIH1cbiAgICB9XG5cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL213bS9Qcm9qZWN0cy9zZXF1ZW5jZS9kb2NzLXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9td20vUHJvamVjdHMvc2VxdWVuY2UvZG9jcy12Mi9uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbXdtL1Byb2plY3RzL3NlcXVlbmNlL2RvY3MtdjIvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyLCBUb3BOYXYgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgY29uc3QgdG9wTmF2ID0gW1xuICB7IHRleHQ6ICdTb2x1dGlvbnMnLFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldycsIG1hdGNoOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldycgfSxcbiAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZScsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZScsIG1hdGNoOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2UnIH0sXG4gICAgeyB0ZXh0OiAnQ29sbGVjdGlibGVzJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDAtbWludC1pdGVtcy1mcm9tLUVSQzExNTUnLCBtYXRjaDogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDAtbWludC1pdGVtcy1mcm9tLUVSQzExNTUnIH0sXG4gICAgeyB0ZXh0OiAnUGF5bWVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9uZnQtY2hlY2tvdXQnLCBtYXRjaDogJy9zb2x1dGlvbnMvbmZ0LWNoZWNrb3V0JyB9LFxuICAgIHsgdGV4dDogJ05vLWNvZGUgQnVpbGRlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSwgXG4gICAgXVxuICB9XG5dXG59LFxuXG4gIHsgXG4gICAgdGV4dDogJ0d1aWRlcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1dlYjMgR2FtZSB3aXRoIFdlYkdMJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnLCBtYXRjaDogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnIH0sXG4gICAgICB7IHRleHQ6ICdXZWIzIEdhbWUgd2l0aCBVbml0eScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlJywgbWF0Y2g6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlJyB9LFxuICAgICAgeyB0ZXh0OiAnTG9vdGJveGVzJywgbGluazogJy9ndWlkZXMvbG9vdGJveCcsIG1hdGNoOiAnL2d1aWRlcy9sb290Ym94JyB9LFxuICAgICAgeyB0ZXh0OiAnQ3VzdG9tIE1hcmtldHBsYWNlJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScsIG1hdGNoOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtbWFya2V0cGxhY2UtYXBpJyB9XG4gICAgXVxuICB9LFxuICB7IFxuICAgIHRleHQ6ICdTREtzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVW5pdHknLCBsaW5rOiAnL3Nkay91bml0eS8wMS1vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bml0eS8wMS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1VucmVhbCcsIGxpbms6ICcvc2RrL3VucmVhbCcsIG1hdGNoOiAnL3Nkay91bnJlYWwnIH0sXG4gICAgICB7IHRleHQ6ICdOb2RlLmpzJywgbGluazogJy9zZGsvbm9kZWpzJywgbWF0Y2g6ICcvc2RrL25vZGVqcycgfSxcbiAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMS1vdmVydmlldycsIG1hdGNoOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL2dvJywgbWF0Y2g6ICcvc2RrL2dvL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnLCBtYXRjaDogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL3JlYWN0bmF0aXZlJywgbWF0Y2g6ICcvc2RrL3JlYWN0bmF0aXZlJyB9LFxuICAgICAgeyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJywgbWF0Y2g6ICcvc2RrL2lPUycgfVxuICAgIF1cbiAgfSxcblxuICAvLyByZXBsYWNlIGxpbmtzLlxuICB7IFxuICAgIHRleHQ6ICdBUElzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UnIH0sXG4gICAgICB7IHRleHQ6ICdUcmFuc2FjdGlvbnMgQVBJJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb24nIH0sXG4gICAgICB7IHRleHQ6ICdJbmRleGVyIEFQSScsIGxpbms6ICcvYXBpL2luZGV4ZXInIH0sXG4gICAgICB7IHRleHQ6ICdFbWJlZGRlZCBXYWxsZXRzIEFQSScsIGxpbms6ICcvYXBpL2VtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgIHsgdGV4dDogJ01ldGFkYXRhIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhJyB9LFxuICAgICAgeyB0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JyB9XG4gICAgICAgIF1cbiAgfSxcblxuICB7IFxuICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdXZVxcJ3JlIGhpcmluZyEnLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXVxuICB9XG5dIGFzIFRvcE5hdlxuXG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IHtcbiAgLy8gT3ZlcnZpZXdcbiAgJy9zb2x1dGlvbnMnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1dhbGxldHMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzAyLXF1aWNrc3RhcnQnfSxcbiAgICAgICAgICB7dGV4dDogJ01hbmFnZSBTZXNzaW9ucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzAzLW1hbmFnZS1zZXNzaW9ucyd9LFxuICAgICAgICAgIHt0ZXh0OiAnVXNlIFdhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wNC11c2Utd2FsbGV0cyd9LFxuICAgICAgICAgIHt0ZXh0OiAnVmFsaWRhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzA1LXZhbGlkYXRpb24nfSxcbiAgICAgICAgICB7dGV4dDogJ1RyYW5zYWN0aW9uIFJlY2VpcHRzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvMDYtdHJhbnNhY3Rpb24tcmVjZWlwdHMnfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnVW5pdmVyc2FsIFdhbGxldCcsIGNvbGxhcHNlZDogdHJ1ZSwgXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMi1xdWlja3N0YXJ0J30sXG4gICAgICAgICAge3RleHQ6ICdHdWlkZXMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ0Nvbm5lY3QgV2FsbGV0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAzLWd1aWRlcy8wMS1jb25uZWN0LXdhbGxldCd9LFxuICAgICAgICAgICAge3RleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDItYXV0aC1hZGRyZXNzJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDMtZ3VpZGVzLzAzLXNpZ24tbWVzc2FnZSd9LFxuICAgICAgICAgICAge3RleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDMtZ3VpZGVzLzA0LXNlc3Npb24ta2V5cyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDUtc2VuZC10cmFuc2FjdGlvbid9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDMtZ3VpZGVzLzA2LXNlbmQtZXJjMjAnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtNzIxIChORlQpIFRva2VucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDctc2VuZC1lcmM3MjEnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMy1ndWlkZXMvMDgtc2VuZC1lcmMxMTU1J30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDMtZ3VpZGVzLzA5LXNlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDMtZ3VpZGVzLzEwLWJ1aWxkaW5nLWJhY2tlbmRzJ30sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VxdWVuY2UgS2l0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzA0LXNlcXVlbmNlLWtpdCd9LFxuICAgICAgICAgIHt0ZXh0OiAnU3VwcG9ydGVkIFBsYXRmb3JtcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wNS1wbGF0Zm9ybXMnfSxcbiAgICAgICAgICB7dGV4dDogJ0ZpYXQgT24tUmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDYtZmlhdC1vbi1yYW1wcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnS2V5IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDcta2V5LW1hbmFnZW1lbnQnfVxuICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdXaGl0ZS1sYWJlbCBNYXJrZXRwbGFjZScsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVpbGQgeW91ciBDdXN0b20gTWFya2V0cGxhY2UnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svMDEtb3ZlcnZpZXcnfSxcbiAgICAgICAgICB7dGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rLzAyLXF1aWNrc3RhcnQnfSxcbiAgICAgICAgXVxuICAgICAgIH1cbiAgICAgIF0gXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29sbGVjdGlibGVzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveWFibGUgQ29udHJhY3RzJyAsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ0RlcGxveSBhbiBJdGVtIENvbGxlY3Rpb24gQ29udHJhY3QgICcsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvMjAwLWRlcGxveS1hbi1pdGVtLWNvbGxlY3Rpb24tY29udHJhY3QnfSxcbiAgICAgICAgICB7dGV4dDogJ01pbnQgSW4tR2FtZSBJdGVtcyBhbmQgQWNoaWV2ZW1lbnRzIChFUkMxMTU1KScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAwLW1pbnQtaXRlbXMtZnJvbS1FUkMxMTU1J30sXG4gICAgICAgICAge3RleHQ6ICdNaW50IERpZ2l0YWwgQ29sbGVjdGlibGVzIChFUkM3MjEpJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDItbWludC1jb2xsZWN0aWJsZXMtZnJvbS1FUkM3MjEnfSxcbiAgICAgICAgICB7dGV4dDogJ01pbnQgSW4tR2FtZSBDdXJyZW5jeSAoRVJDMjApJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDMtbWludC1jdXJyZW5jeS1mcm9tLUVSQzIwJ30sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdNZXRhZGF0YScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgTWV0YWRhdGEgaW4gQnVpbGRlcicsbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL21ldGFkYXRhLzgwMC1tYW5hZ2UtbWV0YWRhdGEtYnVpbGRlcicgfVxuICAgICAgICBdLFxuICAgICAgfVxuICAgICAgICAvLyB7IHRleHQ6ICdNaW50ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9taW50ZXInIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdQYXltZW50cycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdORlQgQ2hlY2tvdXQnLCBsaW5rOiAnL3NvbHV0aW9ucy9uZnQtY2hlY2tvdXQnIH0sXG4gICAgICAgIHsgdGV4dDogJ09ucmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9wYXltZW50cy9vbnJhbXBzLzAxLWZpYXQtb24tcmFtcHMnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTm8tY29kZSBCdWlsZGVyJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnR2V0IFN0YXJ0ZWQnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2dldHRpbmctc3RhcnRlZCcgfSxcbiAgICAgICAge3RleHQ6ICdQcm9qZWN0IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCd9LFxuICAgICAgICB7dGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29udHJhY3RzJ30sXG4gICAgICAgIHt0ZXh0OiAnV2FsbGV0IFNES3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3dhbGxldC1zZGtzJ30sXG4gICAgICAgIHt0ZXh0OiAnR2FzIFRhbmsnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2dhcy10YW5rJ30sXG4gICAgICAgIHt0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9ub2RlLWdhdGV3YXknfSxcbiAgICAgICAge3RleHQ6ICdNYXJrZXRwbGFjZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL21hcmtldHBsYWNlcyd9LFxuICAgICAgICB7dGV4dDogJ0luZGV4ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2luZGV4ZXInfSxcbiAgICAgICAge3RleHQ6ICdTZXR0aW5ncycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvcHJvamVjdC1zZXR0aW5ncyd9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1RlY2huaWNhbCBSZWZlcmVuY2VzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0NoYWluIFN1cHBvcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9jaGFpbi1zdXBwb3J0JyB9LFxuICAgICAgICB7IHRleHQ6ICdTbWFydCBDb250cmFjdCBXYWxsZXRzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1doeSBzbWFydCBjb250cmFjdCB3YWxsZXRzPycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMDEtd2h5JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuaXZlcnNhbCBEZXBsb3llcicsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMDItdW5pdmVyc2FsLWRlcGxveWVyJyB9LFxuICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IEZhY3RvcnknLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzAzLXdhbGxldC1mYWN0b3J5J30sXG4gICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMDQtd2FsbGV0LWNvbmZpZ3VyYXRpb24nfSxcbiAgICAgICAgICAvLyB7dGV4dDogJ01vZHVsZXMgJiBXYWxsZXQgdXBkYXRlJywgbGluazogJ3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzA1LW1vZHVsZXMtYW5kLXVwZGF0ZXMnfSxcbiAgICAgICAgICAvLyB7dGV4dDogJ01haW5Nb2R1bGVVcGdyYWRlYWJsZSAmIGNvbmZpZ3VyYXRpb24gbWlncmF0aW9uJywgbGluazogJ3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzA2LW1haW4tbW9kdWxlLXVwZ3JhZGVhYmxlJ30sXG4gICAgICAgICAge3RleHQ6ICdUcmFuc2FjdGlvbiBFbmNvZGluZycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMDctdHJhbnNhY3Rpb24tZW5jb2RpbmcnfSxcbiAgICAgICAgICB7dGV4dDogJ1NpZ25hdHVyZSBFbmNvZGluZycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMDgtc2lnbmF0dXJlLWVuY29kaW5nJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdOZXN0ZWQgVHJhbnNhY3Rpb24gQmF0Y2hpbmcnLCBsaW5rOiAnc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMDktbmVzdGVkLXRyYW5zYWN0aW9uLWJhdGNoaW5nJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdHdWVzdE1vZHVsZSBhbmQgb24tZGVtYW5kIGRlcGxveW1lbnQnLCBsaW5rOiAnc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMTAtZ3Vlc3QtbW9kdWxlJ30sXG4gICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29udGV4dCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMTEtd2FsbGV0LWNvbnRleHQnfSxcbiAgICAgICAgICB7dGV4dDogJ0NvbnRyYWN0IEF1ZGl0cycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvMTItY29udHJhY3QtYXVkaXRzJ30sXG4gICAgICAgIF0gfVxuICAgICAgXVxuICAgIH0sXG4gICAgXG4gIF0sXG5cbiAgJy9ndWlkZXMnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgZ2FtZSB3aXRoIFdlYkdMJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBTZXF1ZW5jZUtpdCB3aXRoIFdhYVMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNpbnRlZ3JhdGUtc2VxdWVuY2VraXQtd2l0aC13YWFzJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSBjb2xsZWN0aWJsZXMgY29udHJhY3QnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNkZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIHJlbW90ZSBtaW50ZXInLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNkZXBsb3ktYS1yZW1vdGUtbWludGVyJyB9LFxuICAgICAgICB7IHRleHQ6ICdNaW50IGluLWdhbWUgYWNoaWV2ZW1lbnQgdG9rZW5zJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjbWludC1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVybiBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlI2J1cm4taW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBhbiBlbWJlZGRlZCBtYXJrZXRwbGFjZScsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlI2ludGVncmF0ZS1hbi1lbWJlZGRlZC1tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgcHVyY2hhc2VkIGl0ZW1zIGluLWdhbWUnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNsZXZlcmFnZS1wdXJjaGFzZWQtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIG1vYmlsZSBVbml0eSBnYW1lJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBTZXF1ZW5jZUtpdCB3aXRoIFdhYVMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRlZ3JhdGUtc2VxdWVuY2VraXQtd2l0aC13YWFzJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSBjb2xsZWN0aWJsZXMgY29udHJhY3QnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIHJlbW90ZSBtaW50ZXInLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1yZW1vdGUtbWludGVyJyB9LFxuICAgICAgICB7IHRleHQ6ICdNaW50IGluLWdhbWUgYWNoaWV2ZW1lbnQgdG9rZW5zJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbWludC1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVybiBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1cm4taW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBhbiBlbWJlZGRlZCBtYXJrZXRwbGFjZScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2ludGVncmF0ZS1hbi1lbWJlZGRlZC1tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgcHVyY2hhc2VkIGl0ZW1zIGluLWdhbWUnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNsZXZlcmFnZS1wdXJjaGFzZWQtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIGxvb3Rib3ggd2l0aCBBSSBtaW50aW5nJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSW50ZWdyYXRlIHRva2VuIHJld2FyZHMgaW50byB5b3VyIERpc2NvcmQgc2VydmVyJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL2Rpc2NvcmQnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVtcGxhdGVzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLWVtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZCBSZWxheWluZyBTZXJ2ZXInLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvMDItYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9LFxuICAgICAgICB7IHRleHQ6ICdTZXJ2ZXJsZXNzIE1pbnRpbmcgb2YgQ29sbGVjdGlibGVzJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzLzAzLW1pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MnIH0sXG4gICAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcblxuICAvLyBTREtzXG4gICcvc2RrJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHYW1lIEVuZ2luZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdVbnJlYWwnLCBsaW5rOiAnL3Nkay91bnJlYWwnIH0sXG4gICAgICAgIHsgdGV4dDogJ1VuaXR5JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5pdHkvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5pdHkvMDItaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5pdHkvMDMtc2V0dXAnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS8wNC1hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdXcml0ZSB0byBibG9ja2NoYWluJywgbGluazogJy9zZGsvdW5pdHkvMDUtd3JpdGUtdG8tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5LzA2LXJlYWQtZnJvbS1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NpZ24gTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay91bml0eS8wNy1zaWduLW1lc3NhZ2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBDb250cmFjdHMnLCBsaW5rOiAnL3Nkay91bml0eS8wOC1kZXBsb3ktY29udHJhY3RzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1dhbGxldCBVSScsIGxpbms6ICcvc2RrL3VuaXR5LzA5LXdhbGxldC11aScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBZHZhbmNlZCcsIGNvbGxhcHNlZDogdHJ1ZSwgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC8wMS1pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDItd2FsbGV0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NsaWVudHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC8wMy1jbGllbnRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNmZXJzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDQtdHJhbnNmZXJzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDUtY29udHJhY3RzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVG9rZW5zJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDYtdG9rZW5zJyB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01vYmlsZScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJyB9LFxuICAgICAgICB7IHRleHQ6ICdSZWFjdCBOYXRpdmUnLCBsaW5rOiAnL3Nkay9yZWFjdC1uYXRpdmUnIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAge1xuICAgICAgdGV4dDogJ1dlYjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU2VxdWVuY2VLaXQnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMi1nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMy1jb25maWd1cmF0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NoZWNrb3V0JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzA0LWNoZWNrb3V0JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0N1c3RvbSBDb25uZWN0b3JzJywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzA1LWN1c3RvbS1jb25uZWN0b3JzJyB9XG4gICAgICAgIF1cbiAgICAgICB9LFxuXG4gICAgICAgIHsgdGV4dDogJ1R5cGVTY3JpcHQnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdDb25uZWN0IFdhbGxldCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzAxLWNvbm5lY3Qtd2FsbGV0J30sXG4gICAgICAgICAge3RleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzAyLWF1dGgtYWRkcmVzcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2lnbmluZyAmIFZlcmlmeWluZyBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzAzLXNpZ24tbWVzc2FnZSd9LFxuICAgICAgICAgIHt0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDQtc2Vzc2lvbi1rZXlzJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA1LXNlbmQtdHJhbnNhY3Rpb24nfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA2LXNlbmQtZXJjMjAnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTcyMSAoTkZUKSBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wNy1zZW5kLWVyYzcyMSd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA4LXNlbmQtZXJjMTE1NSd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA5LXNlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJ30sXG4gICAgICAgICAge3RleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMTAtYnVpbGRpbmctYmFja2VuZHMnfSxcbiAgICAgICAgICB7dGV4dDogJ1dhbGxldCBDb25uZWN0b3JzJywgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9jb25uZWN0b3JzLzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlcXVlbmNlS2l0JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dhZ21pJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvY29ubmVjdG9ycy8wMy13YWdtaSd9LFxuICAgICAgICAgICAge3RleHQ6ICdSYWluYm93S2l0JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvY29ubmVjdG9ycy8wNC1yYWluYm93LWtpdCd9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzIE9uYm9hcmQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9jb25uZWN0b3JzLzA1LXdlYjMtb25ib2FyZCd9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzIFJlYWN0IFY2JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvY29ubmVjdG9ycy8wNi13ZWIzLXJlYWN0LXY2J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dlYjNNb2RhbCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzL2Nvbm5lY3RvcnMvMDctd2ViM21vZGFsJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0ZBUScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzL2Nvbm5lY3RvcnMvMDgtRkFRJ30sXG4gICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSBcbiAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ0dvJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay9nby9vdmVydmlldyd9LF1cbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb21tb24gUXVlc3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0hvdyBkbyBJIGRvIHNpZ25hdHVyZSB2YWxpZGF0aW9uPycsIGxpbms6ICcvd2FsbGV0L3NpZy12YWxpZGF0aW9uJyB9XG4gICAgICAgIC8vIC4uLlxuICAgICAgXVxuICAgIH0sXG4gIF0sXG5cbiAgICAvLyBhcGlzXG4gICAgJy9hcGknOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdBUElzJyxcbiAgICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCcsIGxpbms6ICcvYXBpL2VtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdJbmRleGVyJywgbGluazogJy9hcGkvaW5kZXhlcicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ01ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVHJhbnNhY3Rpb24nLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdOb2RlIEdhdGV3YXknLCBsaW5rOiAnL2FwaS9ub2RlLWdhdGV3YXknIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXSxcbiAgXG5cbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgIHsgdGV4dDogJ1dlXFwncmUgaGlyaW5nIScsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgIHsgdGV4dDogJ0NvbnRhY3QgVXMnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICBdXG4gIH1cblxufSBhcyBTaWRlYmFyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7OztBQ0V0QixJQUFNLFNBQVM7QUFBQSxFQUNwQjtBQUFBLElBQUUsTUFBTTtBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFdBQVcsTUFBTSxrREFBa0QsT0FBTyxpREFBaUQ7QUFBQSxNQUNuSSxFQUFFLE1BQU0sZUFBZSxNQUFNLG1EQUFtRCxPQUFPLGtEQUFrRDtBQUFBLE1BQ3pJLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxpRUFBaUUsT0FBTyxnRUFBZ0U7QUFBQSxNQUN0SyxFQUFFLE1BQU0sWUFBWSxNQUFNLDJCQUEyQixPQUFPLDBCQUEwQjtBQUFBLE1BQ3RGO0FBQUEsUUFBRSxNQUFNO0FBQUEsUUFBbUIsTUFBTTtBQUFBLFFBQStCLE9BQU87QUFBQSxRQUErQixPQUFPO0FBQUEsVUFDM0csRUFBRSxNQUFNLFlBQVksTUFBTSwrQkFBK0IsT0FBTyw4QkFBOEI7QUFBQSxRQUNoRztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDQTtBQUFBLEVBRUU7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSx1QkFBdUIsT0FBTyxzQkFBc0I7QUFBQSxNQUMxRixFQUFFLE1BQU0sd0JBQXdCLE1BQU0sdUJBQXVCLE9BQU8sc0JBQXNCO0FBQUEsTUFDMUYsRUFBRSxNQUFNLGFBQWEsTUFBTSxtQkFBbUIsT0FBTyxrQkFBa0I7QUFBQSxNQUN2RSxFQUFFLE1BQU0sc0JBQXNCLE1BQU0sOENBQThDLE9BQU8sNkNBQTZDO0FBQUEsSUFDeEk7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFNBQVMsTUFBTSwwQkFBMEIsT0FBTyx5QkFBeUI7QUFBQSxNQUNqRixFQUFFLE1BQU0sVUFBVSxNQUFNLGVBQWUsT0FBTyxjQUFjO0FBQUEsTUFDNUQsRUFBRSxNQUFNLFdBQVcsTUFBTSxlQUFlLE9BQU8sY0FBYztBQUFBLE1BQzdELEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxpQ0FBaUMsT0FBTyxnQ0FBZ0M7QUFBQSxNQUN0RyxFQUFFLE1BQU0sTUFBTSxNQUFNLGNBQWMsT0FBTyxtQkFBbUI7QUFBQSxNQUM1RCxFQUFFLE1BQU0sV0FBVyxNQUFNLGdCQUFnQixPQUFPLGVBQWU7QUFBQSxNQUMvRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CLE9BQU8sbUJBQW1CO0FBQUEsTUFDNUUsRUFBRSxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVztBQUFBLElBQ3JEO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLG1CQUFtQixNQUFNLG1CQUFtQjtBQUFBLE1BQ3BELEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxtQkFBbUI7QUFBQSxNQUNyRCxFQUFFLE1BQU0sZUFBZSxNQUFNLGVBQWU7QUFBQSxNQUM1QyxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sdUJBQXVCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLGdCQUFnQixNQUFNLGdCQUFnQjtBQUFBLE1BQzlDLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0I7QUFBQSxJQUNoRDtBQUFBLEVBQ047QUFBQSxFQUVBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sbUJBQW1CLE1BQU0sMkJBQTJCO0FBQUEsTUFDNUQsRUFBRSxNQUFNLFdBQVcsTUFBTSw4QkFBOEI7QUFBQSxNQUN2RCxFQUFFLE1BQU0sT0FBTyxNQUFNLCtCQUErQjtBQUFBLE1BQ3BELEVBQUUsTUFBTSxpQkFBa0IsTUFBTSw2QkFBNkI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sY0FBYyxNQUFNLCtCQUErQjtBQUFBLElBQzdEO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxVQUFVO0FBQUE7QUFBQSxFQUVyQixjQUFjO0FBQUEsSUFDWjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFtQixXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDakQsRUFBQyxNQUFNLFlBQVksTUFBTSxpREFBZ0Q7QUFBQSxZQUN6RSxFQUFDLE1BQU0sY0FBYyxNQUFNLG1EQUFrRDtBQUFBLFlBQzdFLEVBQUMsTUFBTSxtQkFBbUIsTUFBTSx3REFBdUQ7QUFBQSxZQUN2RixFQUFDLE1BQU0sZUFBZSxNQUFNLG9EQUFtRDtBQUFBLFlBQy9FLEVBQUMsTUFBTSxjQUFjLE1BQU0sbURBQWtEO0FBQUEsWUFDN0UsRUFBQyxNQUFNLHdCQUF3QixNQUFNLDZEQUE0RDtBQUFBLFVBQ25HO0FBQUEsUUFDRjtBQUFBLFFBQ0U7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFvQixXQUFXO0FBQUEsVUFDdkMsT0FBTztBQUFBLFlBQ0wsRUFBQyxNQUFNLFlBQVksTUFBTSxrREFBaUQ7QUFBQSxZQUMxRSxFQUFDLE1BQU0sY0FBYyxNQUFNLG9EQUFtRDtBQUFBLFlBQzlFO0FBQUEsY0FBQyxNQUFNO0FBQUEsY0FBVSxXQUFXO0FBQUEsY0FBTSxPQUFPO0FBQUEsZ0JBQ3ZDLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSxrRUFBaUU7QUFBQSxnQkFDaEcsRUFBQyxNQUFNLDZDQUE2QyxNQUFNLGdFQUErRDtBQUFBLGdCQUN6SCxFQUFDLE1BQU0sZ0NBQWdDLE1BQU0sZ0VBQStEO0FBQUEsZ0JBQzVHLEVBQUMsTUFBTSxxQ0FBcUMsTUFBTSxnRUFBK0Q7QUFBQSxnQkFDakgsRUFBQyxNQUFNLHdCQUF3QixNQUFNLG9FQUFtRTtBQUFBLGdCQUN4RyxFQUFDLE1BQU0seUJBQXlCLE1BQU0sOERBQTZEO0FBQUEsZ0JBQ25HLEVBQUMsTUFBTSxnQ0FBZ0MsTUFBTSwrREFBOEQ7QUFBQSxnQkFDM0csRUFBQyxNQUFNLHlDQUF5QyxNQUFNLGdFQUErRDtBQUFBLGdCQUNySCxFQUFDLE1BQU0sbUNBQW1DLE1BQU0sMkVBQTBFO0FBQUEsZ0JBQzFILEVBQUMsTUFBTSxtQ0FBbUMsTUFBTSxxRUFBb0U7QUFBQSxjQUN0SDtBQUFBLFlBQ0Y7QUFBQSxZQUNFLEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxzREFBcUQ7QUFBQSxZQUNsRixFQUFDLE1BQU0sdUJBQXVCLE1BQU0sbURBQWtEO0FBQUEsWUFDdEYsRUFBQyxNQUFNLGlCQUFpQixNQUFNLHVEQUFzRDtBQUFBLFlBQ3BGLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSx3REFBdUQ7QUFBQSxVQUN4RjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFBLE1BRU4sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLDJCQUEyQixNQUFNLGtEQUFrRDtBQUFBLFFBQzNGO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBaUMsV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQy9ELEVBQUMsTUFBTSxZQUFZLE1BQU0sZ0RBQStDO0FBQUEsWUFDeEUsRUFBQyxNQUFNLGNBQWMsTUFBTSxrREFBaUQ7QUFBQSxVQUM5RTtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBeUIsV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQ3ZELEVBQUMsTUFBTSx3Q0FBd0MsTUFBTSwyRUFBMEU7QUFBQSxZQUMvSCxFQUFDLE1BQU0saURBQWlELE1BQU0sZ0VBQStEO0FBQUEsWUFDN0gsRUFBQyxNQUFNLHNDQUFzQyxNQUFNLHNFQUFxRTtBQUFBLFlBQ3hILEVBQUMsTUFBTSxpQ0FBaUMsTUFBTSxpRUFBZ0U7QUFBQSxVQUNoSDtBQUFBLFFBQ0Y7QUFBQSxRQUNFO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFBWSxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDMUMsRUFBRSxNQUFNLDhCQUE2QixNQUFNLCtEQUErRDtBQUFBLFVBQzVHO0FBQUEsUUFDRjtBQUFBO0FBQUEsTUFFQTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sMEJBQTBCO0FBQUEsUUFDeEQsRUFBRSxNQUFNLFdBQVcsTUFBTSwrQ0FBK0M7QUFBQSxNQUMxRTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLDhCQUE4QjtBQUFBLFFBQ3hELEVBQUUsTUFBTSxlQUFlLE1BQU0scUNBQXFDO0FBQUEsUUFDbEUsRUFBQyxNQUFNLHNCQUFzQixNQUFNLHdDQUF1QztBQUFBLFFBQzFFLEVBQUMsTUFBTSxhQUFhLE1BQU0sK0JBQThCO0FBQUEsUUFDeEQsRUFBQyxNQUFNLGVBQWUsTUFBTSxpQ0FBZ0M7QUFBQSxRQUM1RCxFQUFDLE1BQU0sWUFBWSxNQUFNLDhCQUE2QjtBQUFBLFFBQ3RELEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxrQ0FBaUM7QUFBQSxRQUM5RCxFQUFDLE1BQU0sZ0JBQWdCLE1BQU0sa0NBQWlDO0FBQUEsUUFDOUQsRUFBQyxNQUFNLFdBQVcsTUFBTSw2QkFBNEI7QUFBQSxRQUNwRCxFQUFDLE1BQU0sWUFBWSxNQUFNLHNDQUFxQztBQUFBLE1BQ2hFO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxnREFBZ0Q7QUFBQSxRQUMvRSxFQUFFLE1BQU0sMEJBQTBCLFdBQVcsTUFBTSxPQUFPO0FBQUEsVUFDeEQsRUFBRSxNQUFNLCtCQUErQixNQUFNLDBEQUEwRDtBQUFBLFVBQ3ZHLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSx5RUFBeUU7QUFBQSxVQUM3RyxFQUFDLE1BQU0sa0JBQWtCLE1BQU0scUVBQW9FO0FBQUEsVUFDbkcsRUFBQyxNQUFNLHdCQUF3QixNQUFNLDJFQUEwRTtBQUFBO0FBQUE7QUFBQSxVQUcvRyxFQUFDLE1BQU0sd0JBQXdCLE1BQU0sMkVBQTBFO0FBQUEsVUFDL0csRUFBQyxNQUFNLHNCQUFzQixNQUFNLHlFQUF3RTtBQUFBO0FBQUE7QUFBQSxVQUczRyxFQUFDLE1BQU0sa0JBQWtCLE1BQU0scUVBQW9FO0FBQUEsVUFDbkcsRUFBQyxNQUFNLG1CQUFtQixNQUFNLHNFQUFxRTtBQUFBLFFBQ3ZHLEVBQUU7QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLEVBRUY7QUFBQSxFQUVBLFdBQVc7QUFBQSxJQUNUO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sbUNBQW1DLE1BQU0sc0RBQXNEO0FBQUEsUUFDdkcsRUFBRSxNQUFNLGtDQUFrQyxNQUFNLHFEQUFxRDtBQUFBLFFBQ3JHLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSw2Q0FBNkM7QUFBQSxRQUNyRixFQUFFLE1BQU0sbUNBQW1DLE1BQU0sc0RBQXNEO0FBQUEsUUFDdkcsRUFBRSxNQUFNLG1DQUFtQyxNQUFNLHNEQUFzRDtBQUFBLFFBQ3ZHLEVBQUUsTUFBTSxxQ0FBcUMsTUFBTSx3REFBd0Q7QUFBQSxRQUMzRyxFQUFFLE1BQU0sb0NBQW9DLE1BQU0sdURBQXVEO0FBQUEsTUFDM0c7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLG1DQUFtQyxNQUFNLHNEQUFzRDtBQUFBLFFBQ3ZHLEVBQUUsTUFBTSxrQ0FBa0MsTUFBTSxxREFBcUQ7QUFBQSxRQUNyRyxFQUFFLE1BQU0sMEJBQTBCLE1BQU0sNkNBQTZDO0FBQUEsUUFDckYsRUFBRSxNQUFNLG1DQUFtQyxNQUFNLHNEQUFzRDtBQUFBLFFBQ3ZHLEVBQUUsTUFBTSxtQ0FBbUMsTUFBTSxzREFBc0Q7QUFBQSxRQUN2RyxFQUFFLE1BQU0scUNBQXFDLE1BQU0sd0RBQXdEO0FBQUEsUUFDM0csRUFBRSxNQUFNLG9DQUFvQyxNQUFNLHVEQUF1RDtBQUFBLE1BQzNHO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sNkNBQTZDO0FBQUEsUUFDbkYsRUFBRSxNQUFNLG9DQUFvQyxNQUFNLGdEQUFnRDtBQUFBLFFBQ2xHLEVBQUUsTUFBTSxzQ0FBc0MsTUFBTSxvREFBb0Q7QUFBQSxRQUN4RyxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sNkNBQTZDO0FBQUEsTUFDckY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBO0FBQUEsTUFFTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sVUFBVSxNQUFNLGNBQWM7QUFBQSxRQUN0QztBQUFBLFVBQUUsTUFBTTtBQUFBLFVBQVMsV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQ3ZDLEVBQUUsTUFBTSxZQUFZLE1BQU0seUJBQXlCO0FBQUEsWUFDbkQsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDZCQUE2QjtBQUFBLFlBQzNELEVBQUUsTUFBTSxTQUFTLE1BQU0sc0JBQXNCO0FBQUEsWUFDN0MsRUFBRSxNQUFNLGtCQUFrQixNQUFNLCtCQUErQjtBQUFBLFlBQy9ELEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxvQ0FBb0M7QUFBQSxZQUN6RSxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scUNBQXFDO0FBQUEsWUFDM0UsRUFBRSxNQUFNLGlCQUFpQixNQUFNLDhCQUE4QjtBQUFBLFlBQzdELEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxpQ0FBaUM7QUFBQSxZQUNuRSxFQUFFLE1BQU0sYUFBYSxNQUFNLDBCQUEwQjtBQUFBLFlBQ3JEO0FBQUEsY0FBRSxNQUFNO0FBQUEsY0FBWSxXQUFXO0FBQUEsY0FBTyxPQUFPO0FBQUEsZ0JBQzNDLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxzQ0FBc0M7QUFBQSxnQkFDcEUsRUFBRSxNQUFNLFdBQVcsTUFBTSxpQ0FBaUM7QUFBQSxnQkFDMUQsRUFBRSxNQUFNLFdBQVcsTUFBTSxpQ0FBaUM7QUFBQSxnQkFDMUQsRUFBRSxNQUFNLGFBQWEsTUFBTSxtQ0FBbUM7QUFBQSxnQkFDOUQsRUFBRSxNQUFNLGFBQWEsTUFBTSxtQ0FBbUM7QUFBQSxnQkFDOUQsRUFBRSxNQUFNLFVBQVUsTUFBTSxnQ0FBZ0M7QUFBQSxjQUN2RDtBQUFBLFlBQ0Y7QUFBQSxVQUNEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFdBQVcsTUFBTSxlQUFlO0FBQUEsUUFDeEMsRUFBRSxNQUFNLE9BQU8sTUFBTSxXQUFXO0FBQUEsUUFDaEMsRUFBRSxNQUFNLGdCQUFnQixNQUFNLG9CQUFvQjtBQUFBLE1BQ3BEO0FBQUEsSUFDRjtBQUFBLElBRUE7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBZSxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDN0MsRUFBRSxNQUFNLFlBQVksTUFBTSxnQ0FBZ0M7QUFBQSxZQUMxRCxFQUFFLE1BQU0sY0FBYyxNQUFNLHVDQUF1QztBQUFBLFlBQ25FLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxxQ0FBcUM7QUFBQSxZQUNwRSxFQUFFLE1BQU0sWUFBWSxNQUFNLGdDQUFnQztBQUFBLFlBQzFELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSx5Q0FBeUM7QUFBQSxVQUM5RTtBQUFBLFFBQ0Q7QUFBQSxRQUVDO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBYyxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDNUMsRUFBQyxNQUFNLGtCQUFrQixNQUFNLDhDQUE2QztBQUFBLFlBQzVFLEVBQUMsTUFBTSw2Q0FBNkMsTUFBTSw0Q0FBMkM7QUFBQSxZQUNyRyxFQUFDLE1BQU0sZ0NBQWdDLE1BQU0sNENBQTJDO0FBQUEsWUFDeEYsRUFBQyxNQUFNLHFDQUFxQyxNQUFNLDRDQUEyQztBQUFBLFlBQzdGLEVBQUMsTUFBTSx3QkFBd0IsTUFBTSxnREFBK0M7QUFBQSxZQUNwRixFQUFDLE1BQU0seUJBQXlCLE1BQU0sMENBQXlDO0FBQUEsWUFDL0UsRUFBQyxNQUFNLGdDQUFnQyxNQUFNLDJDQUEwQztBQUFBLFlBQ3ZGLEVBQUMsTUFBTSx5Q0FBeUMsTUFBTSw0Q0FBMkM7QUFBQSxZQUNqRyxFQUFDLE1BQU0sbUNBQW1DLE1BQU0sdURBQXNEO0FBQUEsWUFDdEcsRUFBQyxNQUFNLG1DQUFtQyxNQUFNLGlEQUFnRDtBQUFBLFlBQ2hHO0FBQUEsY0FBQyxNQUFNO0FBQUEsY0FBcUIsT0FBTztBQUFBLGdCQUNqQyxFQUFDLE1BQU0sWUFBWSxNQUFNLG1EQUFrRDtBQUFBLGdCQUMzRSxFQUFDLE1BQU0sZUFBZSxNQUFNLGdDQUErQjtBQUFBLGdCQUMzRCxFQUFDLE1BQU0sU0FBUyxNQUFNLGdEQUErQztBQUFBLGdCQUNyRSxFQUFDLE1BQU0sY0FBYyxNQUFNLHNEQUFxRDtBQUFBLGdCQUNoRixFQUFDLE1BQU0sZ0JBQWdCLE1BQU0sdURBQXNEO0FBQUEsZ0JBQ25GLEVBQUMsTUFBTSxpQkFBaUIsTUFBTSx3REFBdUQ7QUFBQSxnQkFDckYsRUFBQyxNQUFNLGFBQWEsTUFBTSxvREFBbUQ7QUFBQSxnQkFDN0UsRUFBQyxNQUFNLE9BQU8sTUFBTSw4Q0FBNkM7QUFBQSxjQUNoRTtBQUFBLFlBQ0g7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0U7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFNLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUNwQyxFQUFDLE1BQU0sWUFBWSxNQUFNLG1CQUFrQjtBQUFBLFVBQUU7QUFBQSxRQUUvQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLHFDQUFxQyxNQUFNLHlCQUF5QjtBQUFBO0FBQUEsTUFFOUU7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHRSxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBO0FBQUEsTUFFTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sbUJBQW1CLE1BQU0sdUJBQXVCO0FBQUEsUUFDeEQsRUFBRSxNQUFNLFdBQVcsTUFBTSxlQUFlO0FBQUEsUUFDeEMsRUFBRSxNQUFNLGVBQWUsTUFBTSxtQkFBbUI7QUFBQSxRQUNoRCxFQUFFLE1BQU0sWUFBWSxNQUFNLGdCQUFnQjtBQUFBLFFBQzFDLEVBQUUsTUFBTSxlQUFlLE1BQU0sbUJBQW1CO0FBQUEsUUFDaEQsRUFBRSxNQUFNLGdCQUFnQixNQUFNLG9CQUFvQjtBQUFBLE1BQ3BEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBSUYsWUFBWTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFdBQVcsTUFBTSxXQUFXO0FBQUEsTUFDcEMsRUFBRSxNQUFNLG1CQUFtQixNQUFNLDJCQUEyQjtBQUFBLE1BQzVELEVBQUUsTUFBTSxXQUFXLE1BQU0sOEJBQThCO0FBQUEsTUFDdkQsRUFBRSxNQUFNLE9BQU8sTUFBTSwrQkFBK0I7QUFBQSxNQUNwRCxFQUFFLE1BQU0saUJBQWtCLE1BQU0sNkJBQTZCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLGNBQWMsTUFBTSwrQkFBK0I7QUFBQSxJQUM3RDtBQUFBLEVBQ0Y7QUFFRjs7O0FEdlZBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVUCxTQUFTLEVBQUUsT0FBTyxxQ0FBcUMsTUFBTSxtQ0FBbUM7QUFBQTtBQUFBLEVBR2hHLFVBQVU7QUFBQSxFQUVWO0FBQUEsRUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFvQkEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLTCxXQUFXO0FBQUEsTUFDVCxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUE7QUFBQSxNQUVYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdCQTtBQUFBLEVBQ0Y7QUFFSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
