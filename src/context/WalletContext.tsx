import React, { createContext, useContext, useEffect, useState } from 'react';
import { useWalletKit } from "@mysten/wallet-kit";

interface WalletContextType {
  connected: boolean;
  address: string | null;
  balance: string;
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  address: null,
  balance: "0",
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentAccount, isConnected } = useWalletKit();
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    // Fetch balance logic will be implemented later
    setBalance("0");
  }, [currentAccount, isConnected]);

  return (
    <WalletContext.Provider
      value={{
        connected: isConnected,
        address: currentAccount?.address || null,
        balance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};