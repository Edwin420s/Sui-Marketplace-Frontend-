import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sui-lightest-slate">
          Trade Digital Assets <br />
          <span className="text-sui-blue">Seamlessly on Sui</span>
        </h1>
        <p className="text-xl text-sui-light-slate mb-10 max-w-2xl">
          Discover, buy, and sell unique digital items on the fastest growing blockchain marketplace. 
          Experience the future of digital ownership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/marketplace" 
            className="bg-sui-blue text-sui-navy font-medium py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors"
          >
            Explore Marketplace
          </Link>
          <Link 
            to="/my-items" 
            className="bg-transparent border border-sui-blue text-sui-blue font-medium py-3 px-8 rounded-lg text-lg hover:bg-sui-blue hover:text-sui-navy transition-colors"
          >
            Create Listing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;