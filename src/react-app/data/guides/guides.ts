import { significantFiguresGuide } from './significant-figures';
import { scientificNotationGuide } from './scientific-notation';
import { fractions } from './fractions';
import { ratioProportionRates } from './ratio-proportion-rates';
import { consumerArithmeticGuide } from './consumer-arithmetic';

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
  {
    ...consumerArithmeticGuide,
    id: 'consumer-arithmetic',
  },
];
