import { Formula } from '../formulas';

export const numberTheoryFormulas: Formula[] = [
  {
    id: 'significant-figures',
    name: 'Significant Figures',
    equation: '',
    variables: [
      { symbol: 'N', name: 'Number' },
      { symbol: 'sf', name: 'Significant Figures' },
    ],
    solve: () => null,
    hasCustomUI: true,
  },
  {
    id: 'scientific-notation',
    name: 'Scientific Notation',
    equation: '',
    variables: [{ symbol: 'N', name: 'Number' }],
    solve: () => null,
    hasCustomUI: true,
  },
  {
    id: 'decimal-places',
    name: 'Decimal Places',
    equation: '',
    variables: [
      { symbol: 'N', name: 'Number' },
      { symbol: 'dp', name: 'Decimal Places' },
    ],
    solve: () => null,
    hasCustomUI: true,
  },
  {
    id: 'fractions',
    name: 'Fractions',
    equation: '',
    variables: [],
    solve: () => null,
    hasCustomUI: true,
  },
];
