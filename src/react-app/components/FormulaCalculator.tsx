import { useState, useEffect, useCallback, useMemo } from 'react';
import { Formula } from '@/react-app/data/formulas';
import ParabolaGraph from './ParabolaGraph';
import { lengthUnits, areaUnits, volumeUnits, conversionFactors } from '@/react-app/data/units';

interface FormulaCalculatorProps {
  formula: Formula;
  onCalculate?: () => Promise<boolean>;
}

export default function FormulaCalculator({ formula, onCalculate }: FormulaCalculatorProps) {
  const [solveFor, setSolveFor] = useState<string>('');
  const [values, setValues] = useState<Record<string, string>>({});
  const [units, setUnits] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);
  const [resultUnit, setResultUnit] = useState<string>('');
  const [error, setError] = useState<string>('');

  const getUnitsForType = (unitType: 'length' | 'area' | 'volume') => {
    switch (unitType) {
      case 'length': return lengthUnits;
      case 'area': return areaUnits;
      case 'volume': return volumeUnits;
      default: return [];
    }
  };

  const handleCalculate = useCallback(async (isAutoRecalculation = false) => {
    setError('');

    const numericValues: Record<string, number> = {};
    const inputVariables = formula.variables.filter(v => v.symbol !== solveFor);

    for (const variable of inputVariables) {
      const value = values[variable.symbol];
      if (!value || value.trim() === '') {
        if (!isAutoRecalculation) {
          setError(`Please enter a value for ${variable.name}`);
        }
        return;
      }
      const numValue = parseFloat(value);
      if (isNaN(numValue)) {
        if (!isAutoRecalculation) {
          setError(`Invalid value for ${variable.name}`);
        }
        return;
      }
      
      if (variable.unitType) {
        const unit = units[variable.symbol];
        numericValues[variable.symbol] = numValue * (conversionFactors[unit] || 1);
      } else {
        numericValues[variable.symbol] = numValue;
      }
    }

    if (onCalculate && !isAutoRecalculation) {
      const canCalculate = await onCalculate();
      if (!canCalculate) {
        return;
      }
    }

    let calculatedResult = formula.solve(solveFor, numericValues);

    if (calculatedResult === null) {
      if (!isAutoRecalculation) {
        setError('Unable to calculate. Please check your inputs.');
      }
      return;
    }
    
    setResult(calculatedResult);
  }, [formula, solveFor, values, units, onCalculate]);

  // Effect to reset state when formula changes
  useEffect(() => {
    if (formula.id === 'quadratic_roots') {
      setSolveFor('x');
    } else {
      setSolveFor(formula.variables[0]?.symbol || '');
    }
    setValues({});
    setUnits(formula.variables.reduce((acc, v) => {
      if (v.unitType) {
        acc[v.symbol] = getUnitsForType(v.unitType)[0] || '';
      }
      return acc;
    }, {} as Record<string, string>));
    setResult(null);
    setError('');
  }, [formula]);

  const resultVariable = useMemo(() => 
    formula.variables.find(v => v.symbol === solveFor),
    [formula.variables, solveFor]
  );

  const inputVariables = useMemo(() => 
    formula.variables.filter(v => v.symbol !== solveFor),
    [formula.variables, solveFor]
  );

  // Effect to sync result unit with the first input unit
  useEffect(() => {
    const resultVar = resultVariable;
    if (!resultVar?.unitType) {
      setResultUnit('');
      return;
    }

    const firstInputWithUnit = inputVariables.find(v => v.unitType);
    let targetUnit = '';

    if (firstInputWithUnit) {
      const inputUnit = units[firstInputWithUnit.symbol];
      if (inputUnit) {
        const baseUnit = inputUnit.replace(/[²³]/g, '');
        if (resultVar.unitType === 'area') {
          targetUnit = `${baseUnit}²`;
        } else if (resultVar.unitType === 'volume') {
          targetUnit = `${baseUnit}³`;
        } else {
          targetUnit = baseUnit;
        }
      }
    }

    if (!targetUnit) {
      const availableUnits = getUnitsForType(resultVar.unitType);
      targetUnit = availableUnits[0] || '';
    }
    
    const availableUnits = getUnitsForType(resultVar.unitType);
    if (availableUnits.includes(targetUnit)) {
      setResultUnit(targetUnit);
    } else {
      setResultUnit(availableUnits[0] || '');
    }
  }, [resultVariable, inputVariables, units]);


  // Effect to auto-recalculate when input values or units change
  useEffect(() => {
    if (result !== null) {
        handleCalculate(true);
    }
  }, [values, units, handleCalculate]);

  const handleReset = () => {
    setValues({});
    setResult(null);
    setError('');
  };

  const isQuadratic = formula.id === 'quadratic_roots';
  const hasRoots = result && typeof result === 'object' && 'root1' in result;
  
  const formatNumber = (num: number) => {
    const fixed = num.toFixed(4);
    if (fixed.endsWith('.0000')) {
      return num.toFixed(1);
    }
    return fixed;
  };

  const renderResult = (res: any) => {
    const resVar = resultVariable;

    if (typeof res === 'number') {
      if (resVar?.unitType) {
        return formatNumber(res / (conversionFactors[resultUnit] || 1));
      }
      return formatNumber(res);
    }
    if (typeof res === 'object' && res !== null && 'root1' in res) {
      return `x₁: ${formatNumber(res.root1)}, x₂: ${formatNumber(res.root2)}`;
    }
    return res;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
        <p className="text-sm font-medium text-gray-600 mb-1">Formula</p>
        <p className="text-xl font-semibold text-gray-900 font-mono">{formula.equation}</p>
        {formula.diagram && (
          <div className="mt-4">
            <img src={formula.diagram} alt={`${formula.name} diagram`} className="mx-auto" />
          </div>
        )}
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
        {inputVariables.map(variable => (
          <div key={variable.symbol}>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {variable.symbol} - {variable.name}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                step="any"
                value={values[variable.symbol] || ''}
                onChange={(e) => setValues({ ...values, [variable.symbol]: e.target.value })}
                placeholder={`Enter ${variable.symbol}`}
                className="flex-grow w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900"
              />
              {variable.unitType && (
                <select
                  value={units[variable.symbol] || ''}
                  onChange={(e) => setUnits({ ...units, [variable.symbol]: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white"
                >
                  {getUnitsForType(variable.unitType).map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => handleCalculate(false)}
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
              {renderResult(result)}
            </span>
            {resultVariable?.unitType && (
              <div className="relative">
                <select
                  value={resultUnit}
                  onChange={(e) => setResultUnit(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-3 py-1 pr-8 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm"
                >
                  {getUnitsForType(resultVariable.unitType).map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            )}
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
                  {formatNumber(result.root1)}
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-lg font-bold text-gray-900">x₂ =</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {formatNumber(result.root2)}
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
