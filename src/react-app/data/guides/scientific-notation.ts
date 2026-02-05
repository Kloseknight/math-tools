export const scientificNotationGuide = {
  id: 'scientific-notation',
  title: 'Scientific Notation (Standard Form)',
  content: `
    <div class="space-y-6 text-gray-700">
      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">What Is Scientific Notation?</h2>
        <p class="text-lg">
          Scientific notation (also called standard form) is a way of writing very large or very small numbers in a shorter, easier-to-use format. It helps you work with numbers that would otherwise have lots of zeros.
        </p>
        <p class="text-lg mt-2">
          Instead of writing out all the zeros, you write the number as: <code class="font-mono bg-gray-200 px-1 rounded">a × 10ⁿ</code>
        </p>
        <ul class="list-disc list-inside mt-2 text-lg">
          <li><strong>a</strong> is a number ≥ 1 and < 10</li>
          <li><strong>10</strong> is the base</li>
          <li><strong>n</strong> is an integer exponent (positive or negative)</li>
        </ul>
      </div>

      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Why Use Scientific Notation?</h2>
        <p class="text-lg">
          Imagine working with huge numbers like the number of grains of sand on Earth or tiny ones like <code class="font-mono bg-gray-200 px-1 rounded">0.0000000000000299 kg</code> (mass of a single water molecule). Writing all those zeros is hard — scientific notation makes it manageable!
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">How to Convert a Number to Scientific Notation</h2>
        <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p class="text-lg mb-2">Let’s walk through the steps:</p>
            <ol class="list-decimal list-inside space-y-2 text-lg">
                <li>Find the decimal point in the number.</li>
                <li>Locate the first non-zero digit.</li>
                <li>Move the decimal point so it sits just after that first significant digit.</li>
                <li>Count how many places you moved the decimal.
                    <ul class="list-disc list-inside ml-6 mt-2">
                        <li>If you moved it to the left, the exponent is positive.</li>
                        <li>If you moved it to the right, the exponent is negative.</li>
                    </ul>
                </li>
            </ol>
        </div>
      </div>
      
      <div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Example 1 — Small Number</h3>
        <div class="p-4 bg-gray-50 rounded-lg border">
            <p class="text-lg">Original number: <code class="font-mono bg-gray-200 px-1 rounded">0.00058</code></p>
            <ul class="list-disc list-inside text-lg mt-2">
                <li>First non-zero digit is 5.</li>
                <li>Move the decimal 4 places to the right.</li>
                <li>The new number becomes <code class="font-mono bg-gray-200 px-1 rounded">5.8 × 10⁻⁴</code>.</li>
            </ul>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Example 2 — Large Number</h3>
        <div class="p-4 bg-gray-50 rounded-lg border">
            <p class="text-lg">Original number: <code class="font-mono bg-gray-200 px-1 rounded">4,300,000</code></p>
            <ul class="list-disc list-inside text-lg mt-2">
                <li>First non-zero digit is 4.</li>
                <li>Move the decimal 6 places to the left.</li>
                <li>The new number becomes <code class="font-mono bg-gray-200 px-1 rounded">4.3 × 10⁶</code>.</li>
            </ul>
        </div>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">How to Read Scientific Notation</h2>
        <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-lg">
            <p>Take <code class="font-mono bg-gray-200 px-1 rounded">3.2 × 10⁸</code>:</p>
            <ul class="list-disc list-inside mt-2">
                <li><code class="font-mono bg-gray-200 px-1 rounded">3.2</code> is the coefficient.</li>
                <li><code class="font-mono bg-gray-200 px-1 rounded">10</code> is always the base.</li>
                <li><code class="font-mono bg-gray-200 px-1 rounded">⁸</code> means the decimal was moved 8 places to the left originally.</li>
            </ul>
            <p class="mt-2">So this represents <code class="font-mono bg-gray-200 px-1 rounded">320,000,000</code>.</p>
            <p class="mt-2">If the exponent were negative, like <code class="font-mono bg-gray-200 px-1 rounded">4.5 × 10⁻³</code>, that means the original number was <code class="font-mono bg-gray-200 px-1 rounded">0.0045</code>.</p>
        </div>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Converting Back to Standard Form</h2>
        <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-lg">
            <p>To change scientific notation back to a regular number:</p>
            <ul class="list-disc list-inside mt-2">
                <li>If the exponent is positive, move the decimal to the right.</li>
                <li>If the exponent is negative, move the decimal to the left.</li>
            </ul>
            <p class="mt-4">For example:</p>
            <p><code class="font-mono bg-gray-200 px-1 rounded">2.6 × 10³</code> → <code class="font-mono bg-gray-200 px-1 rounded">2600</code></p>
            <p><code class="font-mono bg-gray-200 px-1 rounded">3.65 × 10⁻⁵</code> → <code class="font-mono bg-gray-200 px-1 rounded">0.0000365</code></p>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Rules at a Glance</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Step</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr><td class="px-6 py-4">1</td><td class="px-6 py-4">Find the first non-zero digit</td></tr>
              <tr><td class="px-6 py-4">2</td><td class="px-6 py-4">Move the decimal to after that digit</td></tr>
              <tr><td class="px-6 py-4">3</td><td class="px-6 py-4">Count places moved</td></tr>
              <tr><td class="px-6 py-4">4</td><td class="px-6 py-4">Positive exponent (left move), negative exponent (right move)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Why It’s Useful for CSEC?</h2>
        <p class="text-lg">
            In CSEC Mathematics exams, scientific notation helps you:
        </p>
        <ul class="list-disc list-inside text-lg mt-2">
          <li>Write large answers quickly and concisely.</li>
          <li>Compare extremely large or small quantities.</li>
          <li>Work efficiently with powers of 10 in calculations.</li>
        </ul>
        <p class="text-lg mt-2">Once you master it, scientific notation makes math much easier to read and write!</p>
      </div>
    </div>
  `,
};
