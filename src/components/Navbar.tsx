import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import WalletButton from './WalletButton';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-sui-light-navy border-b border-sui-lightest-navy py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sui-blue rounded-lg flex items-center justify-center">
              <span className="font-bold text-sui-navy">S</span>
            </div>
            <span className="text-xl font-bold text-sui-lightest-slate">Sui Marketplace</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-sui-blue' 
                  : 'text-sui-lightest-slate hover:text-sui-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/marketplace" 
              className={`transition-colors ${
                isActive('/marketplace') 
                  ? 'text-sui-blue' 
                  : 'text-sui-lightest-slate hover:text-sui-blue'
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/my-items" 
              className={`transition-colors ${
                isActive('/my-items') 
                  ? 'text-sui-blue' 
                  : 'text-sui-lightest-slate hover:text-sui-blue'
              }`}
            >
              My Items
            </Link>
            <Link 
              to="/earnings" 
              className={`transition-colors ${
                isActive('/earnings') 
                  ? 'text-sui-blue' 
                  : 'text-sui-lightest-slate hover:text-sui-blue'
              }`}
            >
              Earnings
            </Link>
          </div>
        </div>
        
        <WalletButton />
      </div>
    </nav>
  );
};

export default Navbar;