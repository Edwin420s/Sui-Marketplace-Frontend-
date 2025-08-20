import React, { useState } from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import { useWallet } from '../context/WalletContext';
import { mintWidget } from '../utils/marketplace';
import ItemCard from '../components/ItemCard';
import ListingForm from '../components/ListingForm';

const MyItems: React.FC = () => {
  const { ownedItems, loading, refreshData } = useMarketplace();
  const { connected } = useWallet();
  const [showMintButton, setShowMintButton] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [minting, setMinting] = useState(false);

  const handleMint = async () => {
    if (!connected) {
      alert("Please connect your wallet first");
      return;
    }

    setMinting(true);
    try {
      await mintWidget();
      setShowMintButton(false);
      refreshData();
      // Re-enable mint button after 30 seconds
      setTimeout(() => setShowMintButton(true), 30000);
    } catch (error) {
      console.error("Error minting widget:", error);
    } finally {
      setMinting(false);
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
        <h1 className="text-3xl font-bold text-sui-lightest-slate">My Items</h1>
        {showMintButton && (
          <button
            onClick={handleMint}
            disabled={minting || !connected}
            className="bg-sui-blue text-sui-navy font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            {minting ? 'Minting...' : 'Mint Widget'}
          </button>
        )}
      </div>

      {ownedItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-sui-slate text-lg mb-4">You don't own any items yet.</p>
          {connected && showMintButton && (
            <button
              onClick={handleMint}
              disabled={minting}
              className="bg-sui-blue text-sui-navy font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              {minting ? 'Minting...' : 'Mint Your First Widget'}
            </button>
          )}
          {!connected && (
            <p className="text-sui-slate">Connect your wallet to mint items.</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ownedItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              seller={item.seller}
              onBuy={() => setSelectedItem(item)}
              customButton={
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full mt-4 bg-sui-blue text-sui-navy font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  List for Sale
                </button>
              }
            />
          ))}
        </div>
      )}

      {selectedItem && (
        <ListingForm 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default MyItems;