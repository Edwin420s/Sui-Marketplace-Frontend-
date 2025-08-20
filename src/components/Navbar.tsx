import React from 'react';
import WalletButton from './WalletButton';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-sui-light-navy border-b border-sui-lightest-navy py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-sui-blue rounded-lg flex items-center justify-center">
            <span className="font-bold text-sui-navy">S</span>
          </div>
          <span className="text-xl font-bold text-sui-lightest-slate">Sui Marketplace</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-sui-lightest-slate hover:text-sui-blue transition-colors">Home</a>
          <a href="#" className="text-sui-lightest-slate hover:text-sui-blue transition-colors">Marketplace</a>
          <a href="#" className="text-sui-lightest-slate hover:text-sui-blue transition-colors">My Items</a>
          <a href="#" className="text-sui-lightest-slate hover:text-sui-blue transition-colors">Earnings</a>
        </div>
        
        <WalletButton />
      </div>
    </nav>
  );
};

export default Navbar;