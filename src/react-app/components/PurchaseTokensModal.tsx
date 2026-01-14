import { useState } from 'react';

interface PurchaseTokensModalProps {
  onClose: () => void;
  onPurchaseComplete: () => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const tiers = [
  {
    id: 'tier1',
    name: 'Starter Pack',
    price: 5,
    tokens: 75,
    description: 'Perfect for occasional use',
    highlight: false,
  },
  {
    id: 'tier2',
    name: 'Popular Choice',
    price: 20,
    tokens: 500,
    description: 'Best value for regular users',
    highlight: true,
  },
  {
    id: 'tier3',
    name: 'Power User',
    price: 50,
    tokens: 2000,
    description: 'Maximum tokens for heavy use',
    highlight: false,
  },
];

export default function PurchaseTokensModal({ onClose }: PurchaseTokensModalProps) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async (tierId: string) => {
    setSelectedTier(tierId);
    setIsProcessing(true);
    setError(null);

    try {
      // Create PayPal order
      const createResponse = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tierId }),
      });

      if (!createResponse.ok) {
        throw new Error('Failed to create order');
      }

      const orderData = await createResponse.json();

      // Redirect to PayPal for payment
      const approveLink = orderData.links?.find((link: any) => link.rel === 'approve');
      if (approveLink) {
        window.location.href = approveLink.href;
      } else {
        throw new Error('PayPal approval link not found');
      }
    } catch (err) {
      setError('Failed to process purchase. Please try again.');
      setIsProcessing(false);
      setSelectedTier(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          disabled={isProcessing}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] bg-clip-text text-transparent mb-2">
            Purchase Tokens
          </h2>
          <p className="text-gray-600">Choose a package to continue using the calculator</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-xl border-2 p-6 transition-all ${
                tier.highlight
                  ? 'border-[#FF4757] shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] text-white text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-3 mb-3">
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] bg-clip-text text-transparent">
                    {tier.tokens}
                  </p>
                  <p className="text-sm text-gray-600">tokens</p>
                </div>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>

              <button
                onClick={() => handlePurchase(tier.id)}
                disabled={isProcessing}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] text-white hover:from-[#e63946] hover:to-[#ff4757] shadow-lg hover:shadow-xl'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isProcessing && selectedTier === tier.id ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  'Purchase with PayPal'
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Secure payment powered by PayPal</p>
          <p className="mt-2">Tokens are added instantly after successful payment</p>
        </div>
      </div>
    </div>
  );
}
