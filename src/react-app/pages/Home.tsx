import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formulaCategories } from '@/react-app/data/formulas';
import FormulaSelector from '@/react-app/components/FormulaSelector';
import FormulaCalculator from '@/react-app/components/FormulaCalculator';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFormula, setSelectedFormula] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get('category');
    const formulaId = params.get('formula');

    if (categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory('');
    }

    if (formulaId) {
      setSelectedFormula(formulaId);
    } else {
        setSelectedFormula('');
    }
  }, [location.search]);

  const allFormulas = formulaCategories.flatMap(category =>
    category.formulas.map(formula => ({ ...formula, categoryId: category.id }))
  );

  const filteredFormulas = allFormulas.filter(formula =>
    formula.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFormulaSelection = (formulaId: string, categoryId: string) => {
    navigate(`/?category=${categoryId}&formula=${formulaId}`);
    setSearchQuery('');
  };

  const currentCategory = formulaCategories.find(cat => cat.id === selectedCategory);
  const currentFormula = currentCategory?.formulas.find(f => f.id === selectedFormula);

  const handleCalculation = async () => {
    return true;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 space-y-4">
        <div>
            <h2 className="text-l font-semibold text-gray-800 mb-2">Search Formula</h2>
            <input
                type="text"
                placeholder="Search for a formula..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white"
            />
            {searchQuery && (
                <ul className="mt-1 border border-gray-200 rounded-xl bg-white shadow-lg max-h-60 overflow-y-auto">
                    {filteredFormulas.map(formula => (
                        <li
                            key={formula.id}
                            onClick={() => handleFormulaSelection(formula.id, formula.categoryId)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            {formula.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div>
            <FormulaSelector
                categories={formulaCategories}
                selectedCategory={selectedCategory}
                selectedFormula={selectedFormula}
                onCategoryChange={(catId) => {
                  setSelectedCategory(catId);
                  const category = formulaCategories.find(c => c.id === catId);
                  if (category && category.formulas.length > 0) {
                    navigate(`/?category=${catId}&formula=${category.formulas[0].id}`);
                  } else {
                    navigate(`/?category=${catId}`);
                  }
                }}
                onFormulaChange={(formulaId) => {
                  navigate(`/?category=${selectedCategory}&formula=${formulaId}`);
                }}
            />
        </div>
      </div>

      {currentFormula && (
          <div className="border-t border-gray-100">
              <FormulaCalculator
                  formula={currentFormula}
                  onCalculate={handleCalculation}
              />
          </div>
      )}

      {!selectedCategory && !currentFormula && !searchQuery &&(
          <div className="p-12 text-center border-t border-gray-100">
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
  );
}
