import { significantFiguresGuide } from './significant-figures';
import { scientificNotationGuide } from './scientific-notation';

export const guides = [
  {
    ...significantFiguresGuide,
    id: 'significant-figures',
  },
  {
    ...scientificNotationGuide,
    id: 'scientific-notation',
  },
];
