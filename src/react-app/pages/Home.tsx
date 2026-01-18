import { useState } from 'react';
import { formulaCategories } from '@/react-app/data/formulas';
import FormulaSelector from '@/react-app/components/FormulaSelector';
import FormulaCalculator from '@/react-app/components/FormulaCalculator';
import AdSense from '@/react-app/components/AdSense';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFormula, setSelectedFormula] = useState<string>('');

  const currentCategory = formulaCategories.find(cat => cat.id === selectedCategory);
  const currentFormula = currentCategory?.formulas.find(f => f.id === selectedFormula);

  const handleCalculation = async () => {
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <AdSense adClient="ca-pub-8582608207724522" adSlot="7154657519" />
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
          </div>
        </header>

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
        </footer>
      </div>
    </div>
  );
}
