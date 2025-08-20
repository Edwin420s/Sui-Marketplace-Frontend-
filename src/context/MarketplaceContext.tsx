import React, { createContext, useContext, useEffect, useState } from 'react';
import { useWallet } from './WalletContext';
import { getListedItems, getOwnedItems, getProfits } from '../utils/marketplace';

interface MarketplaceContextType {
  listedItems: any[];
  ownedItems: any[];
  profits: string;
  loading: boolean;
  refreshData: () => void;
}

const MarketplaceContext = createContext<MarketplaceContextType>({
  listedItems: [],
  ownedItems: [],
  profits: "0",
  loading: false,
  refreshData: () => {},
});

export const useMarketplace = () => useContext(MarketplaceContext);

export const MarketplaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listedItems, setListedItems] = useState<any[]>([]);
  const [ownedItems, setOwnedItems] = useState<any[]>([]);
  const [profits, setProfits] = useState("0");
  const [loading, setLoading] = useState(false);
  const { connected, address } = useWallet();

  const fetchData = async () => {
    if (!connected || !address) {
      setListedItems([]);
      setOwnedItems([]);
      setProfits("0");
      return;
    }

    setLoading(true);
    try {
      const [listed, owned, profitAmount] = await Promise.all([
        getListedItems(),
        getOwnedItems(address),
        getProfits(address)
      ]);
      
      setListedItems(listed);
      setOwnedItems(owned);
      setProfits(profitAmount);
    } catch (error) {
      console.error("Error fetching marketplace data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [connected, address]);

  return (
    <MarketplaceContext.Provider
      value={{
        listedItems,
        ownedItems,
        profits,
        loading,
        refreshData: fetchData,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};