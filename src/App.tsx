import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import { MarketplaceProvider } from './context/MarketplaceContext';
import { WalletKitProvider } from "@mysten/wallet-kit";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import MyItems from './pages/MyItems';
import Earnings from './pages/Earnings';
import Footer from './components/Footer';

function App() {
  return (
    <WalletKitProvider>
      <WalletProvider>
        <MarketplaceProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/my-items" element={<MyItems />} />
                  <Route path="/earnings" element={<Earnings />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </MarketplaceProvider>
      </WalletProvider>
    </WalletKitProvider>
  );
}

export default App;