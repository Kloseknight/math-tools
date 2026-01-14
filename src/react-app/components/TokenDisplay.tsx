import { useState } from 'react';
import PurchaseTokensModal from './PurchaseTokensModal';

interface TokenDisplayProps {
  tokenCount: number;
  isAdmin?: boolean;
  onPurchaseComplete: () => void;
}

export default function TokenDisplay({ tokenCount, isAdmin = false, onPurchaseComplete }: TokenDisplayProps) {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const getTokenColor = () => {
    if (isAdmin) return 'text-purple-600';
    if (tokenCount === 0) return 'text-red-600';
    if (tokenCount < 10) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className={`bg-white rounded-xl border-2 px-6 py-3 flex items-center gap-3 ${
          isAdmin ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50' : 'border-gray-200'
        }`}>
          {isAdmin ? (
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#FF4757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <div>
            <p className="text-xs text-gray-600 font-medium">
              {isAdmin ? 'Administrator' : 'Available Tokens'}
            </p>
            <p className={`text-2xl font-bold ${getTokenColor()}`}>
              {isAdmin ? '∞' : tokenCount}
            </p>
          </div>
        </div>

        {!isAdmin && (
          <button
            onClick={() => setShowPurchaseModal(true)}
            className="bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#e63946] hover:to-[#ff4757] transition-all shadow-lg hover:shadow-xl"
          >
            Buy Tokens
          </button>
        )}
      </div>

      {showPurchaseModal && (
        <PurchaseTokensModal
          onClose={() => setShowPurchaseModal(false)}
          onPurchaseComplete={onPurchaseComplete}
        />
      )}
    </>
  );
}
