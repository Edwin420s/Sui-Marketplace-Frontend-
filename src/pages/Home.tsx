import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedItems from '../components/FeaturedItems';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedItems />
    </div>
  );
};

export default Home;