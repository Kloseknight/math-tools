import { FormulaCategory } from '@/react-app/data/formulas';

interface FormulaSelectorProps {
  categories: FormulaCategory[];
  selectedCategory: string;
  selectedFormula: string;
  onCategoryChange: (categoryId: string) => void;
  onFormulaChange: (formulaId: string) => void;
}

export default function FormulaSelector({
  categories,
  selectedCategory,
  selectedFormula,
  onCategoryChange,
  onFormulaChange,
}: FormulaSelectorProps) {
  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    onCategoryChange(categoryId);
    onFormulaChange('');
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white"
        >
          <option value="">Select a category...</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {currentCategory && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Formula
          </label>
          <select
            value={selectedFormula}
            onChange={(e) => onFormulaChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white"
          >
            <option value="">Select a formula...</option>
            {currentCategory.formulas.map(formula => (
              <option key={formula.id} value={formula.id}>
                {formula.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
