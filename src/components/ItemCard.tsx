import React from 'react';

interface ItemCardProps {
  id: string;
  name: string;
  price: string;
  seller: string;
  image?: string;
  onBuy?: () => void;
  customButton?: React.ReactNode;
}

const ItemCard: React.FC<ItemCardProps> = ({ 
  id, 
  name, 
  price, 
  seller, 
  image, 
  onBuy, 
  customButton 
}) => {
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-sui-light-navy rounded-xl overflow-hidden card-hover border border-sui-lightest-navy">
      <div className="h-48 bg-gradient-to-br from-sui-blue to-sui-lightest-navy flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="object-cover h-full w-full" />
        ) : (
          <div className="text-4xl">🖼️</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sui-lightest-slate truncate">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sui-slate text-sm">Price</span>
          <span className="text-sui-blue font-bold">{price} SUI</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-sui-slate text-sm">Seller</span>
          <span className="text-sui-light-slate text-sm">{truncateAddress(seller)}</span>
        </div>
        {customButton || (
          <button
            onClick={onBuy}
            className="w-full mt-4 bg-sui-blue text-sui-navy font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;