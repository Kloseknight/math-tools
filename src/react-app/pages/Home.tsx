import { useState } from 'react';
import { useAuth } from '@getmocha/users-service/react';
import { formulaCategories } from '@/react-app/data/formulas';
import FormulaSelector from '@/react-app/components/FormulaSelector';
import FormulaCalculator from '@/react-app/components/FormulaCalculator';
import LoginModal from '@/react-app/components/LoginModal';
import TokenDisplay from '@/react-app/components/TokenDisplay';
import PurchaseTokensModal from '@/react-app/components/PurchaseTokensModal';
import { useTokens } from '@/react-app/hooks/useTokens';

export default function HomePage() {
  const { user, isPending, logout } = useAuth();
  const { tokenCount, isAdmin, useToken, refreshBalance } = useTokens();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFormula, setSelectedFormula] = useState<string>('');
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState<boolean>(false);
  const [calculationError, setCalculationError] = useState<string | null>(null);

  const currentCategory = formulaCategories.find(cat => cat.id === selectedCategory);
  const currentFormula = currentCategory?.formulas.find(f => f.id === selectedFormula);

  const handleCalculation = async () => {
    setCalculationError(null);
    
    if (!user) {
      setShowLoginModal(true);
      return false;
    }

    const success = await useToken();
    if (!success) {
      setCalculationError('Insufficient tokens. Please purchase more to continue.');
      setShowPurchaseModal(true);
      return false;
    }

    return true;
  };

  const handlePurchaseComplete = () => {
    refreshBalance();
    setShowPurchaseModal(false);
    setCalculationError(null);
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FF4757] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] bg-clip-text text-transparent mb-3">
                CSEC Mathematics Formula Calculator
              </h1>
              <p className="text-gray-600 text-lg">
                Select a category and formula to solve mathematical equations
              </p>
            </div>

            {user && (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Signed in as</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="Sign out"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end">
            {user && tokenCount !== null && (
              <TokenDisplay tokenCount={tokenCount} isAdmin={isAdmin} onPurchaseComplete={handlePurchaseComplete} />
            )}

            {!user && (
              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#e63946] hover:to-[#ff4757] transition-all shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            )}
          </div>
        </header>

        {!user && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Sign in to unlock the calculator</h3>
                <p className="text-blue-800 text-sm">
                  Get 25 free tokens daily to perform calculations. Sign in with your Google account to get started.
                </p>
              </div>
            </div>
          </div>
        )}

        {calculationError && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Action Required</h3>
                <p className="text-red-800 text-sm">{calculationError}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <FormulaSelector
            categories={formulaCategories}
            selectedCategory={selectedCategory}
            selectedFormula={selectedFormula}
            onCategoryChange={setSelectedCategory}
            onFormulaChange={setSelectedFormula}
          />

          {currentFormula && (
            <div className="border-t border-gray-100">
              <FormulaCalculator 
                formula={currentFormula}
                onCalculate={handleCalculation}
              />
            </div>
          )}

          {!selectedCategory && (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#FF4757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">
                Choose a category to get started
              </p>
            </div>
          )}
        </div>

        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Enter known values and select which variable to solve for</p>
          {user && !isAdmin && <p className="mt-1">You receive 25 free tokens daily • 1 token per calculation</p>}
          {user && isAdmin && <p className="mt-1 text-purple-600 font-medium">Administrator - Unlimited Access</p>}
        </footer>
      </div>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showPurchaseModal && (
        <PurchaseTokensModal
          onClose={() => setShowPurchaseModal(false)}
          onPurchaseComplete={handlePurchaseComplete}
        />
      )}
    </div>
  );
}
