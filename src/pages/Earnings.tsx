import React from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import { useWallet } from '../context/WalletContext';
import { withdrawProfits } from '../utils/marketplace';

const Earnings: React.FC = () => {
  const { profits, loading, refreshData } = useMarketplace();
  const { connected } = useWallet();
  const [withdrawing, setWithdrawing] = useState(false);

  const handleWithdraw = async () => {
    if (!connected) {
      alert("Please connect your wallet first");
      return;
    }

    setWithdrawing(true);
    try {
      await withdrawProfits();
      refreshData();
    } catch (error) {
      console.error("Error withdrawing profits:", error);
    } finally {
      setWithdrawing(false);
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
      <h1 className="text-3xl font-bold text-sui-lightest-slate mb-8">My Earnings</h1>
      
      <div className="bg-sui-light-navy rounded-xl p-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-sui-lightest-slate mb-4">Available Profits</h2>
        
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-sui-slate">Total Balance</p>
            <p className="text-3xl font-bold text-sui-blue">{profits} SUI</p>
          </div>
        </div>

        <button
          onClick={handleWithdraw}
          disabled={withdrawing || !connected || parseFloat(profits) === 0}
          className="w-full bg-sui-blue text-sui-navy font-medium py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
        >
          {withdrawing ? 'Processing...' : 'Withdraw Profits'}
        </button>

        {!connected && (
          <p className="text-sm text-sui-slate mt-4 text-center">
            Connect your wallet to view and withdraw earnings
          </p>
        )}

        {connected && parseFloat(profits) === 0 && (
          <p className="text-sm text-sui-slate mt-4 text-center">
            You don't have any profits to withdraw yet
          </p>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-sui-lightest-slate mb-4">Transaction History</h2>
        <div className="bg-sui-light-navy rounded-xl p-4">
          <p className="text-sui-slate text-center py-8">
            Transaction history will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Earnings;