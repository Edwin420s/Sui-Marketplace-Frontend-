import React from 'react';
import { useWalletKit } from "@mysten/wallet-kit";
import { useWallet } from '../context/WalletContext';

const WalletButton: React.FC = () => {
  const { connect, disconnect } = useWalletKit();
  const { connected, address, balance } = useWallet();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex items-center gap-4">
      {connected ? (
        <>
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm text-sui-lightest-slate">
              {balance} SUI
            </span>
            <span className="text-xs text-sui-slate">
              {truncateAddress(address!)}
            </span>
          </div>
          <button
            onClick={disconnect}
            className="bg-sui-blue text-sui-navy font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connect}
          className="bg-sui-blue text-sui-navy font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletButton;