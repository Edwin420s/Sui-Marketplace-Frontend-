**Sui Marketplace dApp - Frontend**

A React + TypeScript + Tailwind CSS frontend for a decentralized marketplace built on the Sui blockchain. This dApp allows users to mint, list, buy, and manage digital assets through a sleek, modern interface.

**🌟 Features**
Wallet Integration: Connect with Sui-compatible wallets
Mint Demo NFTs: Create test widgets for marketplace trading
List Items: Set your digital assets for sale with custom pricing
Browse Marketplace: Explore all available listings
Buy Items: Purchase digital assets from other users
Manage Listings: Delist your items from the marketplace
Withdraw Profits: Claim your earnings from successful sales

**🛠 Tech Stack**
Framework: React 18 + TypeScript
Build Tool: Vite
Styling: Tailwind CSS
Wallet Integration: @mysten/wallet-kit
Blockchain SDK: @mysten/sui.js
State Management: React Context API + Hooks

**📁 Project Structure**
```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with wallet connection
│   │   ├── WalletButton.tsx    # Wallet connect/disconnect component
│   │   ├── HeroSection.tsx     # Landing page hero section
│   │   ├── FeaturedItems.tsx   # Featured marketplace items
│   │   ├── ItemCard.tsx        # Individual item display component
│   │   ├── ListingForm.tsx     # Form for creating new listings
│   │   └── Footer.tsx          # Page footer
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Marketplace.tsx     # Browse all listings
│   │   ├── MyItems.tsx         # User's owned items
│   │   └── Earnings.tsx        # Profit management
│   ├── context/
│   │   ├── WalletContext.tsx   # Wallet state management
│   │   └── MarketplaceContext.tsx # Marketplace state management
│   ├── utils/
│   │   ├── suiClient.ts        # Sui client configuration
│   │   ├── contractIds.ts      # Contract address storage
│   │   └── marketplace.ts      # Marketplace interaction functions
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles with Tailwind
├── package.json                # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── index.html                 # HTML template

```
**🚀 Getting Started
Prerequisites**
Node.js (v16 or higher)
```
npm or yarn
```
A Sui-compatible wallet (Suiet, Ethos, or Mysten Wallet)

Installation
Clone the repository:

```
git clone https://github.com/Edwin420s/Sui-Marketplace-fronted.git
cd sui-marketplace-frontend
```
Install dependencies:
```
npm install
```
Configure environment variables:
Create a **.env** file in the root directory:

.env
```
VITE_SUI_NETWORK=devnet # or testnet/mainnet
VITE_MARKETPLACE_PACKAGE_ID=your_package_id_here
VITE_MARKETPLACE_WIDGET_PACKAGE_ID=your_widget_package_id_here
Update contract addresses:
Edit src/utils/contractIds.ts with your actual contract IDs:
```
typescript
```
export const MARKETPLACE_PACKAGE_ID = import.meta.env.VITE_MARKETPLACE_PACKAGE_ID;
export const MARKETPLACE_WIDGET_PACKAGE_ID = import.meta.env.VITE_MARKETPLACE_WIDGET_PACKAGE_ID;
export const COIN_TYPE = "0x2::sui::SUI";
Start the development server:
```
```
npm run dev
```
Open your browser and navigate to http://localhost:3000

**🎨 Design System**
The application uses a custom Sui-themed color palette:

Primary Blue: #00AEEF (Sui Blue)
Dark Navy: #0A192F (Background)
Light Navy: #112240 (Cards & Components)
Slate Text: #8892b0 (Secondary text)
Light Slate: #a8b2d1 (Primary text)

**🔌 Wallet Integration**
The dApp uses @mysten/wallet-kit for seamless wallet integration. Supported wallets include:
Suiet Wallet
Ethos Wallet
Mysten Wallet
Any Wallet Standard-compatible wallet

**📱 Pages Overview**
Home Page (/)
Welcome message and introduction
Featured marketplace items
Quick access to main features
Wallet connection prompt
Marketplace Page (/marketplace)
Browse all active listings

**Filter and search functionality**

**Buy items directly**
Responsive grid layout
My Items Page (/my-items)
View owned NFTs/Widgets

**List items for sale**
Manage existing listings
Mint new demo widgets
Earnings Page (/earnings)
View sales history

**Check available profits**
Withdraw earnings
Transaction history

**🧩 Core Components**
WalletButton
Handles wallet connection and disconnection, displays wallet address and balance.

ItemCard
Displays individual marketplace items with details and action buttons.

ListingForm
Modal form for creating new listings with price input and confirmation.

Navbar
Global navigation with links to all pages and wallet connection.

**🔄 State Management**
The application uses React Context for state management:

WalletContext: Manages wallet connection state, address, and balance

MarketplaceContext: Handles marketplace data, listings, and user items

**📡 Blockchain Interactions**
The dApp interacts with these Move modules:

marketplace.move
list: List an item for sale

buy_and_take: Purchase an item

delist_and_take: Remove an item from sale

take_profits_and_keep: Withdraw earnings

marketplaceWidget.move
mint: Create a demo NFT/Widget for testing

**🛠 Development Scripts**
```
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

**🌐 Deployment**

Build for Production
```
npm run build
```
The build output will be in the dist/ directory, ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

Environment Setup for Production
Ensure these environment variables are set in your hosting platform:
```
VITE_SUI_NETWORK: Sui network (devnet/testnet/mainnet)

VITE_MARKETPLACE_PACKAGE_ID: Your marketplace package ID

VITE_MARKETPLACE_WIDGET_PACKAGE_ID: Your widget package ID
```

🤝 Contributing
Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a pull request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
If you encounter any issues:

Check the browser console for error messages

Ensure your wallet is connected to the correct network

Verify contract addresses are correctly set

Check that you have sufficient SUI for transaction fees

For additional help, please open an issue in the GitHub repository.

🙏 Acknowledgments
Sui Network for the blockchain infrastructure

Mysten Labs for the Sui TypeScript SDK

The Sui community for tools and resources

Note: This is a frontend implementation that requires a compatible Move backend to be deployed on the Sui blockchain. Update the contract addresses in src/utils/contractIds.ts to point to your deployed contracts.
