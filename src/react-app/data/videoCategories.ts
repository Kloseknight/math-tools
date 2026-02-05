import { VideoCategory } from './types';

export const videoCategories: VideoCategory[] = [
  {
    id: 'number-theory-and-computation',
    name: 'Number Theory and Computation',
    subTopics: [
        { name: 'Significant Figures', keywords: ['significant', 'figures'] },
        { name: 'Scientific Notation', keywords: ['scientific', 'notation'] },
        { name: 'Fractions', keywords: ['fraction'] },
        { name: 'Ratio and Proportion', keywords: ['ratio', 'proportion'] },
    ]
  },
  // {
  //   id: 'consumer-arithmetic',
  //   name: 'Consumer Arithmetic',
  //   subTopics: []
  // },
  // {
  //   id: 'sets',
  //   name: 'Sets',
  //   subTopics: []
  // },
  {
    id: 'measurements',
    name: 'Measurements',
    subTopics: [
      { name: 'Unit Conversion', keywords: ['unit', 'conversion'] },
    ]
  },
  {
    id: 'algebra',
    name: 'Algebra',
    subTopics: [
        { name: 'Substitution', keywords: ['substitution'] },
        { name: 'Subject of Formula', keywords: ['subject of formula'] },
        { name: 'Simplifying Expressions', keywords: ['simplifying expressions'] },
        { name: 'Indices', keywords: ['indices'] },
        { name: 'Variations', keywords: ['variations'] },
        { name: 'Factorization', keywords: ['factorization'] },
        { name: 'Simple Equations', keywords: ['simple equations'] },
        { name: 'Simultaneous Equations', keywords: ['simultaneous equations'] },
        { name: 'Quadratic Equation', keywords: ['quadratic equation'] },
    ]
  },
  {
    id: 'relations-functions-and-graphs',
    name: 'Relations, Functions and Graphs',
    subTopics: [
      { name: 'Functions', keywords: ['function'] },
    ]
  },
  {
    id: 'geometry-and-trigonometry',
    name: 'Geometry and Trigonometry',
    subTopics: [
        { name: 'Trigonometry', keywords: ['trigonometry', 'sine', 'cosine', 'tan'] },
        { name: 'Pythagoras Theorem', keywords: ['pythagoras'] },
        { name: 'Translations', keywords: ['translation'] },
    ]
  },
  {
    id: 'vectors-and-matrices',
    name: 'Vectors and Matrices',
    subTopics: [
      { name: 'Vectors', keywords: ['vector'] },
    ]
  }
];
