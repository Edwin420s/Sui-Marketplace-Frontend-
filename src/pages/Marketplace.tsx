import React, { useState } from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import { useWallet } from '../context/WalletContext';
import ItemCard from '../components/ItemCard';
import { buyItem, delistItem } from '../utils/marketplace';

const Marketplace: React.FC = () => {
  const { listedItems, loading, refreshData } = useMarketplace();
  const { connected, address } = useWallet();
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');

  const filteredItems = activeTab === 'my' 
    ? listedItems.filter(item => item.seller.toLowerCase() === address?.toLowerCase())
    : listedItems;

  const handleBuy = async (item: any) => {
    if (!connected) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      await buyItem(item.objectId, item.price);
      refreshData();
    } catch (error) {
      console.error("Error buying item:", error);
    }
  };

  const handleDelist = async (item: any) => {
    try {
      await delistItem(item.objectId);
      refreshData();
    } catch (error) {
      console.error("Error delisting item:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sui-blue"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-sui-lightest-slate">Marketplace</h1>
        <div className="flex space-x-2 bg-sui-navy rounded-lg p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'all' 
                ? 'bg-sui-blue text-sui-navy' 
                : 'text-sui-light-slate hover:text-sui-lightest-slate'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'my' 
                ? 'bg-sui-blue text-sui-navy' 
                : 'text-sui-light-slate hover:text-sui-lightest-slate'
            }`}
          >
            My Listings
          </button>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-sui-slate text-lg">
            {activeTab === 'my' 
              ? "You haven't listed any items yet." 
              : "No items listed in the marketplace yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              seller={item.seller}
              onBuy={() => handleBuy(item)}
              customButton={
                activeTab === 'my' && item.seller.toLowerCase() === address?.toLowerCase() ? (
                  <button
                    onClick={() => handleDelist(item)}
                    className="w-full mt-4 bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Delist
                  </button>
                ) : undefined
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;