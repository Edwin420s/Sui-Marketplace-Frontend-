import React from 'react';
import { WalletProvider } from './context/WalletContext';
import { WalletKitProvider } from "@mysten/wallet-kit";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <WalletKitProvider>
      <WalletProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Home />
          </main>
          <Footer />
        </div>
      </WalletProvider>
    </WalletKitProvider>
  );
}

export default App;