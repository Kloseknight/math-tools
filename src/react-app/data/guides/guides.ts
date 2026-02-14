import { significantFiguresGuide } from './significant-figures';
import { scientificNotationGuide } from './scientific-notation';
import { fractions } from './fractions';

export const guides = [
  {
    ...significantFiguresGuide,
    id: 'significant-figures',
  },
  {
    ...scientificNotationGuide,
    id: 'scientific-notation',
  },
  {
    ...fractions,
    id: 'fractions',
  },
];
