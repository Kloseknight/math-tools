export interface Variable {
  symbol: string;
  name: string;
  unit?: string;
}

export interface Formula {
  id: string;
  name: string;
  variables: Variable[];
  solve: (solveFor: string, values: Record<string, number>) => number | null | { root1: number; root2: number };
  equation: string;
  diagram?: string;
  hasCustomUI?: boolean;
}

export interface FormulaCategory {
  id: string;
  name: string;
  formulas: Formula[];
}

// Area Formulas
const areaFormulas: Formula[] = [
  {
    id: 'circle_area',
    name: 'Area of a circle',
    equation: 'A = πr²',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return Math.PI * values.r * values.r;
      if (solveFor === 'r') return Math.sqrt(values.A / Math.PI);
      return null;
    }
  },
  {
    id: 'sector_area',
    name: 'Area of a sector',
    equation: 'A = (θ/360) × πr²',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'θ', name: 'Angle (degrees)' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return (values.θ / 360) * Math.PI * values.r * values.r;
      if (solveFor === 'θ') return (360 * values.A) / (Math.PI * values.r * values.r);
      if (solveFor === 'r') return Math.sqrt((360 * values.A) / (values.θ * Math.PI));
      return null;
    }
  },
  {
    id: 'trapezium_area',
    name: 'Area of a trapezium',
    equation: 'A = (1/2)(a + b)h',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'a', name: 'Length of first parallel side' },
      { symbol: 'b', name: 'Length of second parallel side' },
      { symbol: 'h', name: 'Perpendicular distance' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return 0.5 * (values.a + values.b) * values.h;
      if (solveFor === 'h') return (2 * values.A) / (values.a + values.b);
      if (solveFor === 'a') return (2 * values.A / values.h) - values.b;
      if (solveFor === 'b') return (2 * values.A / values.h) - values.a;
      return null;
    }
  },
  {
    id: 'cone_surface',
    name: 'Curved surface area of a cone',
    equation: 'CSA = πrl',
    variables: [
      { symbol: 'CSA', name: 'Curved surface area' },
      { symbol: 'r', name: 'Radius of the base' },
      { symbol: 'l', name: 'Slant height' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'CSA') return Math.PI * values.r * values.l;
      if (solveFor === 'r') return values.CSA / (Math.PI * values.l);
      if (solveFor === 'l') return values.CSA / (Math.PI * values.r);
      return null;
    }
  },
  {
    id: 'sphere_surface',
    name: 'Surface area of a sphere',
    equation: 'SA = 4πr²',
    variables: [
      { symbol: 'SA', name: 'Surface area' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'SA') return 4 * Math.PI * values.r * values.r;
      if (solveFor === 'r') return Math.sqrt(values.SA / (4 * Math.PI));
      return null;
    }
  }
];

// Volume Formulas
const volumeFormulas: Formula[] = [
  {
    id: 'prism_volume',
    name: 'Volume of a prism',
    equation: 'V = Ah',
    variables: [
      { symbol: 'V', name: 'Volume' },
      { symbol: 'A', name: 'Area of cross-section' },
      { symbol: 'h', name: 'Perpendicular height' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'V') return values.A * values.h;
      if (solveFor === 'A') return values.V / values.h;
      if (solveFor === 'h') return values.V / values.A;
      return null;
    }
  },
  {
    id: 'cylinder_volume',
    name: 'Volume of a cylinder',
    equation: 'V = πr²h',
    variables: [
      { symbol: 'V', name: 'Volume' },
      { symbol: 'r', name: 'Radius of the base' },
      { symbol: 'h', name: 'Perpendicular height' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'V') return Math.PI * values.r * values.r * values.h;
      if (solveFor === 'r') return Math.sqrt(values.V / (Math.PI * values.h));
      if (solveFor === 'h') return values.V / (Math.PI * values.r * values.r);
      return null;
    }
  },
  {
    id: 'cone_volume',
    name: 'Volume of a cone/pyramid',
    equation: 'V = (1/3)Ah',
    variables: [
      { symbol: 'V', name: 'Volume' },
      { symbol: 'A', name: 'Area of the base' },
      { symbol: 'h', name: 'Perpendicular height' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'V') return (1/3) * values.A * values.h;
      if (solveFor === 'A') return (3 * values.V) / values.h;
      if (solveFor === 'h') return (3 * values.V) / values.A;
      return null;
    }
  },
  {
    id: 'sphere_volume',
    name: 'Volume of a sphere',
    equation: 'V = (4/3)πr³',
    variables: [
      { symbol: 'V', name: 'Volume' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'V') return (4/3) * Math.PI * Math.pow(values.r, 3);
      if (solveFor === 'r') return Math.cbrt((3 * values.V) / (4 * Math.PI));
      return null;
    }
  }
];

// Circle Formulas
const circleFormulas: Formula[] = [
  {
    id: 'circle_circumference',
    name: 'Circumference of a circle',
    equation: 'C = 2πr',
    variables: [
      { symbol: 'C', name: 'Circumference' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'C') return 2 * Math.PI * values.r;
      if (solveFor === 'r') return values.C / (2 * Math.PI);
      return null;
    }
  },
  {
    id: 'circle_area',
    name: 'Area of a circle',
    equation: 'A = πr²',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return Math.PI * values.r * values.r;
      if (solveFor === 'r') return Math.sqrt(values.A / Math.PI);
      return null;
    }
  },
  {
    id: 'arc_length',
    name: 'Arc length',
    equation: 'S = (θ/360) × 2πr',
    variables: [
      { symbol: 'S', name: 'Arc length' },
      { symbol: 'θ', name: 'Angle subtended by the arc (degrees)' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'S') return (values.θ / 360) * 2 * Math.PI * values.r;
      if (solveFor === 'θ') return (360 * values.S) / (2 * Math.PI * values.r);
      if (solveFor === 'r') return (360 * values.S) / (values.θ * 2 * Math.PI);
      return null;
    }
  },
  {
    id: 'sector_area',
    name: 'Area of a sector',
    equation: 'A = (θ/360) × πr²',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'θ', name: 'Angle (degrees)' },
      { symbol: 'r', name: 'Radius' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return (values.θ / 360) * Math.PI * values.r * values.r;
      if (solveFor === 'θ') return (360 * values.A) / (Math.PI * values.r * values.r);
      if (solveFor === 'r') return Math.sqrt((360 * values.A) / (values.θ * Math.PI));
      return null;
    }
  }
];

// Triangle Formulas
const triangleFormulas: Formula[] = [
  {
    id: 'triangle_area_base',
    name: 'Area of a triangle (base × height)',
    equation: 'A = (1/2)bh',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'b', name: 'Base length' },
      { symbol: 'h', name: 'Perpendicular height' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return 0.5 * values.b * values.h;
      if (solveFor === 'b') return (2 * values.A) / values.h;
      if (solveFor === 'h') return (2 * values.A) / values.b;
      return null;
    }
  },
  {
    id: 'triangle_area_sin',
    name: 'Area of a triangle (two sides and included angle)',
    equation: 'A = (1/2)ab sin C',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'a', name: 'Length of first adjacent side' },
      { symbol: 'b', name: 'Length of second adjacent side' },
      { symbol: 'C', name: 'Included angle (degrees)' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return 0.5 * values.a * values.b * Math.sin((values.C * Math.PI) / 180);
      if (solveFor === 'a') return (2 * values.A) / (values.b * Math.sin((values.C * Math.PI) / 180));
      if (solveFor === 'b') return (2 * values.A) / (values.a * Math.sin((values.C * Math.PI) / 180));
      if (solveFor === 'C') return (Math.asin((2 * values.A) / (values.a * values.b)) * 180) / Math.PI;
      return null;
    }
  },
  {
    id: 'triangle_area_heron',
    name: "Area of a triangle (Heron's formula)",
    equation: 'A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2',
    variables: [
      { symbol: 'A', name: 'Area' },
      { symbol: 'a', name: 'Length of first side' },
      { symbol: 'b', name: 'Length of second side' },
      { symbol: 'c', name: 'Length of third side' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') {
        const s = (values.a + values.b + values.c) / 2;
        return Math.sqrt(s * (s - values.a) * (s - values.b) * (s - values.c));
      }
      return null;
    }
  }
];

// Finance Formulas
const financeFormulas: Formula[] = [
  {
    id: 'simple_interest',
    name: 'Simple interest',
    equation: 'SI = (P × R × T) / 100',
    variables: [
      { symbol: 'SI', name: 'Simple Interest' },
      { symbol: 'P', name: 'Principal (initial amount)' },
      { symbol: 'R', name: 'Annual rate of interest (%)' },
      { symbol: 'T', name: 'Time (years)' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'SI') return (values.P * values.R * values.T) / 100;
      if (solveFor === 'P') return (values.SI * 100) / (values.R * values.T);
      if (solveFor === 'R') return (values.SI * 100) / (values.P * values.T);
      if (solveFor === 'T') return (values.SI * 100) / (values.P * values.R);
      return null;
    }
  },
  {
    id: 'compound_interest',
    name: 'Compound interest',
    equation: 'A = P(1 + r/100)ⁿ',
    variables: [
      { symbol: 'A', name: 'Total amount after n years' },
      { symbol: 'P', name: 'Principal (initial amount)' },
      { symbol: 'r', name: 'Annual rate of interest (%)' },
      { symbol: 'n', name: 'Number of years' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return values.P * Math.pow(1 + values.r / 100, values.n);
      if (solveFor === 'P') return values.A / Math.pow(1 + values.r / 100, values.n);
      if (solveFor === 'r') return 100 * (Math.pow(values.A / values.P, 1 / values.n) - 1);
      if (solveFor === 'n') return Math.log(values.A / values.P) / Math.log(1 + values.r / 100);
      return null;
    }
  },
  {
    id: 'depreciation',
    name: 'Depreciation',
    equation: 'A = P(1 - r/100)ⁿ',
    variables: [
      { symbol: 'A', name: 'Value after depreciation' },
      { symbol: 'P', name: 'Initial value' },
      { symbol: 'r', name: 'Annual rate of depreciation (%)' },
      { symbol: 'n', name: 'Number of years' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'A') return values.P * Math.pow(1 - values.r / 100, values.n);
      if (solveFor === 'P') return values.A / Math.pow(1 - values.r / 100, values.n);
      if (solveFor === 'r') return 100 * (1 - Math.pow(values.A / values.P, 1 / values.n));
      if (solveFor === 'n') return Math.log(values.A / values.P) / Math.log(1 - values.r / 100);
      return null;
    }
  }
];

// Algebra Formulas
const algebraFormulas: Formula[] = [
  {
    id: 'quadratic_roots',
    name: 'Roots of quadratic equation',
    equation: 'ax² + bx + c = 0',
    variables: [
      { symbol: 'a', name: 'Coefficient of x²' },
      { symbol: 'b', name: 'Coefficient of x' },
      { symbol: 'c', name: 'Constant term' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'x') {
        const discriminant = values.b * values.b - 4 * values.a * values.c;
        if (discriminant < 0) return null;
        const root1 = (-values.b + Math.sqrt(discriminant)) / (2 * values.a);
        const root2 = (-values.b - Math.sqrt(discriminant)) / (2 * values.a);
        return { root1, root2 };
      }
      return null;
    },
    hasCustomUI: true
  }
];

// Trigonometry Formulas
const trigonometryFormulas: Formula[] = [
  {
    id: 'pythagoras',
    name: 'Pythagorean theorem',
    equation: 'a² = b² + c²',
    variables: [
      { symbol: 'a', name: 'Length of hypotenuse' },
      { symbol: 'b', name: 'Length of opposite side' },
      { symbol: 'c', name: 'Length of adjacent side' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'a') return Math.sqrt(values.b * values.b + values.c * values.c);
      if (solveFor === 'b') return Math.sqrt(values.a * values.a - values.c * values.c);
      if (solveFor === 'c') return Math.sqrt(values.a * values.a - values.b * values.b);
      return null;
    }
  },
  {
    id: 'sine',
    name: 'Sine ratio',
    equation: 'sin θ = opposite / hypotenuse',
    variables: [
      { symbol: 'θ', name: 'Angle (degrees)' },
      { symbol: 'opposite', name: 'Opposite side' },
      { symbol: 'hypotenuse', name: 'Hypotenuse' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'θ') return (Math.asin(values.opposite / values.hypotenuse) * 180) / Math.PI;
      if (solveFor === 'opposite') return values.hypotenuse * Math.sin((values.θ * Math.PI) / 180);
      if (solveFor === 'hypotenuse') return values.opposite / Math.sin((values.θ * Math.PI) / 180);
      return null;
    }
  },
  {
    id: 'cosine',
    name: 'Cosine ratio',
    equation: 'cos θ = adjacent / hypotenuse',
    variables: [
      { symbol: 'θ', name: 'Angle (degrees)' },
      { symbol: 'adjacent', name: 'Adjacent side' },
      { symbol: 'hypotenuse', name: 'Hypotenuse' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'θ') return (Math.acos(values.adjacent / values.hypotenuse) * 180) / Math.PI;
      if (solveFor === 'adjacent') return values.hypotenuse * Math.cos((values.θ * Math.PI) / 180);
      if (solveFor === 'hypotenuse') return values.adjacent / Math.cos((values.θ * Math.PI) / 180);
      return null;
    }
  },
  {
    id: 'tangent',
    name: 'Tangent ratio',
    equation: 'tan θ = opposite / adjacent',
    variables: [
      { symbol: 'θ', name: 'Angle (degrees)' },
      { symbol: 'opposite', name: 'Opposite side' },
      { symbol: 'adjacent', name: 'Adjacent side' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'θ') return (Math.atan(values.opposite / values.adjacent) * 180) / Math.PI;
      if (solveFor === 'opposite') return values.adjacent * Math.tan((values.θ * Math.PI) / 180);
      if (solveFor === 'adjacent') return values.opposite / Math.tan((values.θ * Math.PI) / 180);
      return null;
    }
  },
  {
    id: 'sine_rule',
    name: 'Sine rule',
    equation: 'a/sin A = b/sin B = c/sin C',
    variables: [
      { symbol: 'a', name: 'Side a' },
      { symbol: 'A', name: 'Angle A (degrees) opposite side a' },
      { symbol: 'b', name: 'Side b' },
      { symbol: 'B', name: 'Angle B (degrees) opposite side b' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'a') return values.b * Math.sin((values.A * Math.PI) / 180) / Math.sin((values.B * Math.PI) / 180);
      if (solveFor === 'b') return values.a * Math.sin((values.B * Math.PI) / 180) / Math.sin((values.A * Math.PI) / 180);
      if (solveFor === 'A') return (Math.asin(values.a * Math.sin((values.B * Math.PI) / 180) / values.b) * 180) / Math.PI;
      if (solveFor === 'B') return (Math.asin(values.b * Math.sin((values.A * Math.PI) / 180) / values.a) * 180) / Math.PI;
      return null;
    }
  },
  {
    id: 'cosine_rule',
    name: 'Cosine rule',
    equation: 'a² = b² + c² - 2bc cos A',
    variables: [
      { symbol: 'a', name: 'Side a' },
      { symbol: 'b', name: 'Side b' },
      { symbol: 'c', name: 'Side c' },
      { symbol: 'A', name: 'Angle A (degrees) opposite side a' }
    ],
    solve: (solveFor, values) => {
      if (solveFor === 'a') {
        return Math.sqrt(
          values.b * values.b + 
          values.c * values.c - 
          2 * values.b * values.c * Math.cos((values.A * Math.PI) / 180)
        );
      }
      if (solveFor === 'A') {
        const cosA = (values.b * values.b + values.c * values.c - values.a * values.a) / (2 * values.b * values.c);
        return (Math.acos(cosA) * 180) / Math.PI;
      }
      return null;
    }
  }
];

export const formulaCategories: FormulaCategory[] = [
  {
    id: 'area',
    name: 'Area Formulas',
    formulas: areaFormulas
  },
  {
    id: 'volume',
    name: 'Volume Formulas',
    formulas: volumeFormulas
  },
  {
    id: 'circle',
    name: 'Circle Formulas',
    formulas: circleFormulas
  },
  {
    id: 'triangle',
    name: 'Triangle Formulas',
    formulas: triangleFormulas
  },
  {
    id: 'finance',
    name: 'Finance Formulas',
    formulas: financeFormulas
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    formulas: trigonometryFormulas
  },
  {
    id: 'algebra',
    name: 'Algebra',
    formulas: algebraFormulas
  }
];
