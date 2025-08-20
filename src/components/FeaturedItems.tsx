import React from 'react';
import ItemCard from './ItemCard';

const FeaturedItems: React.FC = () => {
  // Mock data for featured items - will be replaced with real data
  const featuredItems = [
    {
      id: "1",
      name: "Rare Digital Art #123",
      price: "0.5",
      seller: "0x742d35Cc6634C893292Ce8bB6239C002Ad8e6b59"
    },
    {
      id: "2",
      name: "Exclusive Widget #456",
      price: "1.2",
      seller: "0x742d35Cc6634C893292Ce8bB6239C002Ad8e6b59"
    },
    {
      id: "3",
      name: "Limited Edition Collectible",
      price: "2.8",
      seller: "0x742d35Cc6634C893292Ce8bB6239C002Ad8e6b59"
    },
    {
      id: "4",
      name: "Premium Digital Asset",
      price: "0.9",
      seller: "0x742d35Cc6634C893292Ce8bB6239C002Ad8e6b59"
    }
  ];

  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sui-lightest-slate">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              seller={item.seller}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-transparent border border-sui-blue text-sui-blue font-medium py-2 px-6 rounded-lg hover:bg-sui-blue hover:text-sui-navy transition-colors">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;