import { useState } from 'react';

export const ScientificNotation: React.FC = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<{ coefficient: string; exponent: string } | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);
    const num = parseFloat(number);
    if (isNaN(num)) {
      setError('Please enter a valid number.');
      return;
    }
    const exponentialString = num.toExponential();
    const [coefficient, exponent] = exponentialString.split('e');
    setResult({ coefficient, exponent: exponent.replace('+', '') });
  };

  const handleReset = () => {
    setNumber('');
    setResult(null);
    setError('');
  };

  return (
    <div className="p-6 space-y-6">
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number</label>
                <input
                    type="number"
                    step="any"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter a number"
                    className="flex-grow w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900"
                />
            </div>
        </div>

        <div className="flex gap-3">
            <button
                onClick={handleCalculate}
                className="flex-1 bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#e63946] hover:to-[#ff4757] transition-all shadow-lg hover:shadow-xl"
            >
                Calculate
            </button>
            <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
            >
                Reset
            </button>
        </div>

        {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
        )}

        {result && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <p className="text-sm font-medium text-gray-600 mb-2">Result</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {result.coefficient} x 10<span style={{verticalAlign: 'super'}}>{result.exponent}</span>
                </div>
            </div>
        )}
    </div>
  );
};
