import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sui-light-navy border-t border-sui-lightest-navy py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-sui-blue rounded-lg flex items-center justify-center">
              <span className="font-bold text-sui-navy text-sm">S</span>
            </div>
            <span className="font-bold text-sui-lightest-slate">Sui Marketplace</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sui-slate hover:text-sui-blue transition-colors">Twitter</a>
            <a href="#" className="text-sui-slate hover:text-sui-blue transition-colors">Discord</a>
            <a href="#" className="text-sui-slate hover:text-sui-blue transition-colors">GitHub</a>
            <a href="#" className="text-sui-slate hover:text-sui-blue transition-colors">Docs</a>
          </div>
        </div>
        <div className="text-center mt-6 pt-6 border-t border-sui-lightest-navy">
          <p className="text-sui-slate text-sm">© 2023 Sui Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;