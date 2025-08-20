import React, { useState } from 'react';
import { listItem } from '../utils/marketplace';
import { useMarketplace } from '../context/MarketplaceContext';

interface ListingFormProps {
  item: any;
  onClose: () => void;
}

const ListingForm: React.FC<ListingFormProps> = ({ item, onClose }) => {
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const { refreshData } = useMarketplace();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!price || parseFloat(price) <= 0) return;

    setLoading(true);
    try {
      await listItem(item.objectId, price);
      refreshData();
      onClose();
    } catch (error) {
      console.error("Error listing item:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-sui-light-navy rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-sui-lightest-slate">List Item for Sale</h2>
        <div className="mb-4">
          <p className="text-sui-light-slate">Item: {item.name}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sui-light-slate mb-2">Price (SUI)</label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-sui-navy border border-sui-lightest-navy rounded-lg px-4 py-2 text-sui-lightest-slate focus:outline-none focus:ring-2 focus:ring-sui-blue"
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sui-light-slate hover:text-sui-lightest-slate transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !price || parseFloat(price) <= 0}
              className="bg-sui-blue text-sui-navy font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Listing...' : 'List Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;