import { Guide } from '@/react-app/data/types';

export const fractions: Guide = {
  id: 'fractions',
  title: 'Fractions Guide',
  description: 'A complete breakdown of everything you need to know about fractions — definitions, rules, examples, and step-by-step methods.',
  content: `
    <div class="space-y-6 text-gray-700">

      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">1. What Is a Fraction?</h2>
        <p class="text-lg">A fraction represents a part of a whole. It is written as:</p>
        <div class="text-center text-2xl font-sans my-4">
          <span class="relative inline-block">
            <span class="block text-center">numerator</span>
            <span class="block border-t border-gray-800 my-1"></span>
            <span class="block text-center">denominator</span>
          </span>
        </div>
        <ul class="list-disc list-inside space-y-2 text-lg">
          <li><strong>Numerator</strong> — the number of equal parts being considered</li>
          <li><strong>Denominator</strong> — the total number of equal parts in the whole</li>
        </ul>
        <p class="text-lg mt-3">For example: <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>4</sub></code> means 3 out of 4 equal parts.</p>
      </div>

      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">2. Types of Fractions</h2>
        <p class="text-lg">Fractions are classified based on the sizes of the numerator and denominator:</p>
        <ul class="list-disc list-inside space-y-2 text-lg mt-2">
          <li><strong>Proper Fractions:</strong> numerator &lt; denominator (e.g., <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>7</sub></code>)</li>
          <li><strong>Improper Fractions:</strong> numerator ≥ denominator (e.g., <code class="font-mono bg-gray-200 px-2 rounded"><sup>9</sup>&frasl;<sub>4</sub></code>)</li>
          <li><strong>Mixed Numbers:</strong> whole number plus a fraction (e.g., <code class="font-mono bg-gray-200 px-2 rounded">2 <sup>1</sup>&frasl;<sub>2</sub></code>)</li>
        </ul>
        <div class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
          <h3 class="font-semibold text-lg">To convert a mixed number to an improper fraction:</h3>
          <ol class="list-decimal list-inside space-y-2 text-lg mt-2">
            <li>Multiply the whole number by the denominator.</li>
            <li>Add the numerator.</li>
            <li>Place the result over the original denominator.</li>
          </ol>
          <p class="text-lg mt-3"><strong>Example:</strong> <code class="font-mono bg-gray-200 px-2 rounded">2 <sup>1</sup>&frasl;<sub>2</sub></code> → (2 × 2) + 1 = <code class="font-mono bg-gray-200 px-2 rounded"><sup>5</sup>&frasl;<sub>2</sub></code></p>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">3. Equivalent & Simplifying Fractions</h2>
        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Equivalent fractions</strong> look different but represent the same value. To find them, multiply or divide both the numerator and the denominator by the same number.<br>Example: <code class="font-mono bg-gray-200 px-2 rounded"><sup>1</sup>&frasl;<sub>2</sub></code> → (×2/×2) = <code class="font-mono bg-gray-200 px-2 rounded"><sup>2</sup>&frasl;<sub>4</sub></code> → (×3/×3) = <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>6</sub></code></div>
        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Simplifying (Reducing) Fractions:</strong> Find the Highest Common Factor (HCF) of the numerator and denominator, then divide both by it.<br>Example: <code class="font-mono bg-gray-200 px-2 rounded"><sup>12</sup>&frasl;<sub>18</sub></code> → HCF is 6 → (12 ÷ 6)/(18 ÷ 6) = <code class="font-mono bg-gray-200 px-2 rounded"><sup>2</sup>&frasl;<sub>3</sub></code></div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">4. Operations with Fractions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Adding:</strong> Find the Lowest Common Denominator (LCD), convert fractions, then add numerators.<br>Ex: <code class="font-mono bg-gray-200 px-2 rounded"><sup>1</sup>&frasl;<sub>4</sub> + <sup>1</sup>&frasl;<sub>6</sub></code> → <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>12</sub> + <sup>2</sup>&frasl;<sub>12</sub></code> = <code class="font-mono bg-gray-200 px-2 rounded"><sup>5</sup>&frasl;<sub>12</sub></code></div>
          <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Subtracting:</strong> Same as addition, but subtract numerators.<br>Ex: <code class="font-mono bg-gray-200 px-2 rounded"><sup>5</sup>&frasl;<sub>6</sub> - <sup>1</sup>&frasl;<sub>4</sub></code> → <code class="font-mono bg-gray-200 px-2 rounded"><sup>10</sup>&frasl;<sub>12</sub> - <sup>3</sup>&frasl;<sub>12</sub></code> = <code class="font-mono bg-gray-200 px-2 rounded"><sup>7</sup>&frasl;<sub>12</sub></code></div>
          <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Multiplying:</strong> Multiply the numerators and multiply the denominators.<br>Ex: <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>5</sub> × <sup>4</sup>&frasl;<sub>7</sub></code> = <code class="font-mono bg-gray-200 px-2 rounded"><sup>12</sup>&frasl;<sub>35</sub></code></div>
          <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Dividing:</strong> Flip the second fraction (find its reciprocal) and multiply.<br>Ex: <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>4</sub> ÷ <sup>2</sup>&frasl;<sub>9</sub></code> → <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>4</sub> × <sup>9</sup>&frasl;<sub>2</sub></code> = <code class="font-mono bg-gray-200 px-2 rounded"><sup>27</sup>&frasl;<sub>8</sub></code></div>
        </div>
      </div>

      <div class="p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">Solving Fraction Problems</h2>
          <p class="text-lg">If an equation has a missing piece, find a common denominator, rewrite the fractions, and solve for the missing numerator.</p>
          <p class="text-lg mt-3"><strong>Example:</strong> If <code class="font-mono bg-gray-200 px-2 rounded"><sup>x</sup>&frasl;<sub>8</sub> + <sup>3</sup>&frasl;<sub>4</sub> = <sup>7</sup>&frasl;<sub>8</sub></code><br/>
          Rewrite <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>4</sub></code> as <code class="font-mono bg-gray-200 px-2 rounded"><sup>6</sup>&frasl;<sub>8</sub></code> → <code class="font-mono bg-gray-200 px-2 rounded"><sup>x</sup>&frasl;<sub>8</sub> + <sup>6</sup>&frasl;<sub>8</sub> = <sup>7</sup>&frasl;<sub>8</sub></code><br/>
          → x = 7 − 6 = 1. The missing fraction is <code class="font-mono bg-gray-200 px-2 rounded"><sup>1</sup>&frasl;<sub>8</sub></code>.</p>
      </div>

      <div class="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Tips for CSEC Success</h2>
        <div class="text-lg space-y-2">
          <p>✔ Always reduce fractions to the simplest form.</p>
          <p>✔ Always find the LCD for addition and subtraction.</p>
          <p>✔ Convert mixed numbers before multiplying/dividing.</p>
          <p>✔ Check answers with a reverse operation.</p>
        </div>
      </div>

    </div>
  `,
};
