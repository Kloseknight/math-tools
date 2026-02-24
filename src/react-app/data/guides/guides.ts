import { significantFiguresGuide } from './significant-figures';
import { scientificNotationGuide } from './scientific-notation';
import { fractions } from './fractions';
import { ratioProportionRates } from './ratio-proportion-rates';

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
  {
    ...ratioProportionRates,
    id: 'ratio-proportion-rates',
  },
];
