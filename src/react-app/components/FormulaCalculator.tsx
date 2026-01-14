import { useState, useEffect } from 'react';
import { Formula } from '@/react-app/data/formulas';
import ParabolaGraph from './ParabolaGraph';

interface FormulaCalculatorProps {
  formula: Formula;
  onCalculate?: () => Promise<boolean>;
}

export default function FormulaCalculator({ formula, onCalculate }: FormulaCalculatorProps) {
  const [solveFor, setSolveFor] = useState<string>('');
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (formula.id === 'quadratic_roots') {
      setSolveFor('x');
    } else {
      setSolveFor(formula.variables[0]?.symbol || '');
    }
    setValues({});
    setResult(null);
    setError('');
  }, [formula]);

  const inputVariables = formula.variables.filter(v => v.symbol !== solveFor);

  const handleCalculate = async () => {
    setError('');
    setResult(null);

    const numericValues: Record<string, number> = {};
    for (const variable of inputVariables) {
      const value = values[variable.symbol];
      if (!value || value.trim() === '') {
        setError(`Please enter a value for ${variable.name}`);
        return;
      }
      const numValue = parseFloat(value);
      if (isNaN(numValue)) {
        setError(`Invalid value for ${variable.name}`);
        return;
      }
      numericValues[variable.symbol] = numValue;
    }

    // Check token availability before calculation
    if (onCalculate) {
      const canCalculate = await onCalculate();
      if (!canCalculate) {
        return;
      }
    }

    const calculatedResult = formula.solve(solveFor, numericValues);
    if (calculatedResult === null) {
      setError('Unable to calculate. Please check your inputs.');
      return;
    }

    setResult(calculatedResult);
  };

  const handleReset = () => {
    setValues({});
    setResult(null);
    setError('');
  };

  const isQuadratic = formula.id === 'quadratic_roots';
  const hasRoots = result && typeof result === 'object' && 'root1' in result;

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
        <p className="text-sm font-medium text-gray-600 mb-1">Formula</p>
        <p className="text-xl font-semibold text-gray-900 font-mono">{formula.equation}</p>
      </div>

      {!isQuadratic && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Solve for
          </label>
          <select
            value={solveFor}
            onChange={(e) => {
              setSolveFor(e.target.value);
              setResult(null);
              setError('');
            }}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white"
          >
            {formula.variables.map(variable => (
              <option key={variable.symbol} value={variable.symbol}>
                {variable.symbol} - {variable.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {isQuadratic && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <p className="text-sm font-medium text-blue-900">
            This formula finds the x-intercepts (roots) where the parabola crosses the x-axis
          </p>
        </div>
      )}

      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-700">Enter known values</p>
        {inputVariables.map(variable => (
          <div key={variable.symbol}>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {variable.symbol} - {variable.name}
            </label>
            <input
              type="number"
              step="any"
              value={values[variable.symbol] || ''}
              onChange={(e) => setValues({ ...values, [variable.symbol]: e.target.value })}
              placeholder={`Enter ${variable.symbol}`}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900"
            />
          </div>
        ))}
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

      {result !== null && !hasRoots && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Result</p>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-gray-900">{solveFor} =</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {typeof result === 'number' ? result.toFixed(4) : result}
            </span>
          </div>
        </div>
      )}

      {hasRoots && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-sm font-medium text-gray-600 mb-3">Roots (x-intercepts)</p>
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-lg font-bold text-gray-900">x₁ =</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {result.root1.toFixed(4)}
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-lg font-bold text-gray-900">x₂ =</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {result.root2.toFixed(4)}
                </span>
              </div>
            </div>
          </div>

          <ParabolaGraph
            a={parseFloat(values.a)}
            b={parseFloat(values.b)}
            c={parseFloat(values.c)}
            root1={result.root1}
            root2={result.root2}
          />
        </div>
      )}
    </div>
  );
}
