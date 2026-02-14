import React, { useState } from 'react';
import Fraction from 'fraction.js';

const Operations = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
};

type Operation = typeof Operations[keyof typeof Operations];

interface FractionState {
  whole: string;
  numerator: string;
  denominator: string;
  type: 'proper' | 'mixed';
}

export const Fractions: React.FC = () => {
  const [numFractions, setNumFractions] = useState(2);
  const [fractions, setFractions] = useState<FractionState[]>(() =>
    Array.from({ length: 2 }, () => ({ whole: '', numerator: '', denominator: '', type: 'proper' }))
  );
  const [operations, setOperations] = useState<Operation[]>(() => Array.from({ length: 1 }, () => Operations.ADD));
  const [result, setResult] = useState<Fraction | null>(null);
  const [resultType, setResultType] = useState<'mixed' | 'improper'>('mixed');
  const [error, setError] = useState<string>('');

  const resetState = (num: number) => {
    setNumFractions(num);
    setFractions(Array.from({ length: num }, () => ({ whole: '', numerator: '', denominator: '', type: 'proper' })));
    setOperations(Array.from({ length: num - 1 }, () => Operations.ADD));
    setResult(null);
    setError('');
  };

  const handleFractionChange = (index: number, field: keyof FractionState, value: string) => {
    const newFractions = [...fractions];
    const fractionToUpdate = { ...newFractions[index] };
    (fractionToUpdate as any)[field] = value;
    newFractions[index] = fractionToUpdate;
    setFractions(newFractions);
  };

  const handleOperationChange = (index: number, value: Operation) => {
    const newOperations = [...operations];
    newOperations[index] = value;
    setOperations(newOperations);
  };

  const handleCalculate = () => {
    setError('');
    setResult(null);

    try {
      const parsedFractions = fractions.map((f, i) => {
        const toNum = (s: string) => {
            if (s.trim() === '' || s.trim() === '-') return 0n;
            try {
                return BigInt(s);
            } catch (e) {
                throw new Error(`Invalid number in fraction ${i + 1}.`);
            }
        };

        const whole = f.type === 'mixed' ? toNum(f.whole) : 0n;
        const num = toNum(f.numerator);
        const den = toNum(f.denominator);

        if (den === 0n) {
          if (num === 0n) throw new Error(`0/0 is undefined in fraction ${i + 1}.`);
          throw new Error(`Denominator cannot be zero in fraction ${i + 1}.`);
        }

        let fraction = new Fraction(num, den);
        if (f.type === 'mixed') {
            const sign = whole < 0n ? -1 : 1;
            const absWhole = whole < 0n ? -whole : whole;
            fraction = fraction.add(absWhole).mul(sign);
        }
        return fraction;
      });

      let calculatedResult = parsedFractions[0];

      for (let i = 0; i < operations.length; i++) {
        const nextFraction = parsedFractions[i + 1];
        const op = operations[i];
        
        switch (op) {
            case Operations.ADD:
                calculatedResult = calculatedResult.add(nextFraction);
                break;
            case Operations.SUBTRACT:
                calculatedResult = calculatedResult.sub(nextFraction);
                break;
            case Operations.MULTIPLY:
                calculatedResult = calculatedResult.mul(nextFraction);
                break;
            case Operations.DIVIDE:
                if (nextFraction.n === 0n) {
                    throw new Error('Cannot divide by zero.');
                }
                calculatedResult = calculatedResult.div(nextFraction);
                break;
        }
      }

      setResult(calculatedResult);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const formatResult = (res: Fraction) => {
    const n_big = BigInt(res.n);
    const d_big = BigInt(res.d);
    const sign = res.s < 0 ? '-' : '';

    if (d_big === 1n) {
        return sign + n_big.toString().replace('-','');
    }

    const abs_n = n_big < 0n ? -n_big : n_big;

    if (resultType === 'improper') {
      return `${sign}${abs_n}/${d_big}`;
    }
    
    if (abs_n < d_big) {
        return `${sign}${abs_n}/${d_big}`;
    }

    const whole = abs_n / d_big;
    const new_num = abs_n % d_big;

    if (new_num === 0n) {
        return sign + whole.toString();
    }

    return `${sign}${whole} ${new_num}/${d_big}`;
  };

  return (
    <div className="p-6 space-y-6">
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Fractions</label>
            <select value={numFractions} onChange={(e) => resetState(parseInt(e.target.value))} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-4 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white">
                {[2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4">
            {fractions.map((f, i) => (
                <React.Fragment key={i}>
                    <div className="p-4 border-2 border-gray-200 rounded-xl space-y-3">
                        <select value={f.type} onChange={(e) => handleFractionChange(i, 'type', e.target.value)} className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100 transition-all outline-none text-gray-900 bg-white">
                            <option value="proper">Proper/Improper</option>
                            <option value="mixed">Mixed Number</option>
                        </select>
                        <div className="flex items-center justify-center gap-2">
                            {f.type === 'mixed' && (
                                <input type="text" inputMode="numeric" pattern="[0-9-]*" value={f.whole} onChange={(e) => handleFractionChange(i, 'whole', e.target.value)} placeholder="W" className="w-16 text-center px-2 py-2 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100" />
                            )}
                            <div className="flex flex-col items-center">
                                <input type="text" inputMode="numeric" pattern="[0-9-]*" value={f.numerator} onChange={(e) => handleFractionChange(i, 'numerator', e.target.value)} placeholder="N" className="w-20 text-center px-2 py-2 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100" />
                                <hr className="w-full my-1 border-gray-400 border-t-2" />
                                <input type="text" inputMode="numeric" pattern="[0-9-]*" value={f.denominator} onChange={(e) => handleFractionChange(i, 'denominator', e.target.value)} placeholder="D" className="w-20 text-center px-2 py-2 rounded-xl border-2 border-gray-200 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100" />
                            </div>
                        </div>
                    </div>
                    {i < operations.length && (
                        <select value={operations[i]} onChange={(e) => handleOperationChange(i, e.target.value as Operation)} className="px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-2xl font-bold">
                            <option value={Operations.ADD}>+</option>
                            <option value={Operations.SUBTRACT}>-</option>
                            <option value={Operations.MULTIPLY}>×</option>
                            <option value={Operations.DIVIDE}>÷</option>
                        </select>
                    )}
                </React.Fragment>
            ))}
        </div>

        <div className="flex gap-3">
            <button onClick={handleCalculate} className="flex-1 bg-gradient-to-r from-[#FF4757] to-[#ff6b7a] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#e63946] hover:to-[#ff4757] transition-all shadow-lg hover:shadow-xl">Calculate</button>
            <button onClick={() => resetState(numFractions)} className="px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all">Reset</button>
        </div>

        {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4"><p className="text-red-700 text-sm font-medium">{error}</p></div>
        )}

        {result && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <p className="text-sm font-medium text-gray-600 mb-2">Result</p>
                <div className="flex items-center justify-between gap-3">
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent break-all">{formatResult(result)}</span>
                    <select value={resultType} onChange={(e) => setResultType(e.target.value as any)} className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-3 py-1 pr-8 focus:border-[#FF4757] focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm">
                        <option value="mixed">Mixed</option>
                        <option value="improper">Improper</option>
                    </select>
                </div>
            </div>
        )}
    </div>
  );
};