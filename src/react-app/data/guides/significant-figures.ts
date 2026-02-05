export const significantFiguresGuide = {
  id: 'significant-figures',
  title: 'Significant Figures (Sig Figs)',
  content: `
    <div class="space-y-6 text-gray-700">
      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">What Are Significant Figures?</h2>
        <p class="text-lg">
          Significant figures, or significant digits, are the digits in a number that show how precise that measurement is. They include all the digits that you are sure about, plus one uncertain digit that is estimated.
        </p>
        <p class="text-lg mt-2">
          For example, the number <code class="font-mono bg-gray-200 px-1 rounded">73,543</code> is more precise than <code class="font-mono bg-gray-200 px-1 rounded">74,000</code> — the first has more significant figures, while the second has only two significant figures (7 and 4).
        </p>
      </div>

      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Why Sig Figs Matter?</h2>
        <p class="text-lg">
          When we measure or calculate something in science and math, we want to show not just the value but the precision. Significant figures help you communicate how reliable a number is — especially when dealing with measurements and calculations.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Rules for Counting Significant Figures</h2>
        <ul class="space-y-4 text-lg">
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>All non-zero digits are significant.</strong><br>Example: <code class="font-mono bg-gray-200 px-1 rounded">52.76</code> has 4 significant figures.</li>
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Zeros between non-zero digits are significant.</strong><br>Example: <code class="font-mono bg-gray-200 px-1 rounded">220.016</code> has 6 significant figures.</li>
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Leading zeros are not significant.</strong><br>Example: <code class="font-mono bg-gray-200 px-1 rounded">0.00017</code> has 2 significant figures (1 and 7).</li>
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Trailing zeros after a decimal are significant.</strong><br>Example: <code class="font-mono bg-gray-200 px-1 rounded">8.30</code> has 3 significant figures.</li>
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Trailing zeros in whole numbers without a decimal are not significant.</strong><br>Example: <code class="font-mono bg-gray-200 px-1 rounded">925,000</code> has only 3 significant digits (9, 2, and 5).</li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">How to Round Using Significant Figures</h2>
        <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <p class="text-lg mb-2">To round a number to a specific number of significant figures:</p>
          <ol class="list-decimal list-inside space-y-2 text-lg">
            <li>Find the first non-zero digit at the left.</li>
            <li>Count the number of sig figs you want from left to right.</li>
            <li>Look at the digit immediately after your last counted digit:
              <ul class="list-disc list-inside ml-6 mt-2">
                <li>If it is 5 or greater, round up.</li>
                <li>If it is less than 5, keep the digit the same.</li>
              </ul>
            </li>
            <li>Replace all remaining digits to the right with zeros (to preserve place value).</li>
          </ol>
          <p class="text-lg mt-4"><strong>Example:</strong><br>Round <code class="font-mono bg-gray-200 px-1 rounded">73,543</code> to 2 significant figures:<br>
          The first sig fig is 7, the second is 3. Look at the next digit (5); since it’s ≥ 5, increase the 3 to 4. <br>Result: <code class="font-mono bg-gray-200 px-1 rounded">74,000</code>.</p>
        </div>
      </div>

      <div class="p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Why This Helps You in CSEC Exams?</h2>
        <p class="text-lg">
          In science and math exams like CSEC, you should present answers with the correct number of significant figures to show you understand precision. The number of significant figures tells examiners how accurately you are reporting results. If the question says “to a suitable number of significant figures,” this is the method you use.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Quick Recap Table</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Rule</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Significant?</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr><td class="px-6 py-4">Non-zero digit</td><td class="px-6 py-4">✔️</td><td class="px-6 py-4"><code class="font-mono bg-gray-200 px-1 rounded">456</code> = 3 sig figs</td></tr>
              <tr><td class="px-6 py-4">Zero between digits</td><td class="px-6 py-4">✔️</td><td class="px-6 py-4"><code class="font-mono bg-gray-200 px-1 rounded">202</code> = 3 sig figs</td></tr>
              <tr><td class="px-6 py-4">Leading zero</td><td class="px-6 py-4">❌</td><td class="px-6 py-4"><code class="font-mono bg-gray-200 px-1 rounded">0.005</code> = 1 sig fig</td></tr>
              <tr><td class="px-6 py-4">Trailing zero w/ decimal</td><td class="px-6 py-4">✔️</td><td class="px-6 py-4"><code class="font-mono bg-gray-200 px-1 rounded">12.00</code> = 4 sig figs</td></tr>
              <tr><td class="px-6 py-4">Trailing zero w/o decimal</td><td class="px-6 py-4">❌</td><td class="px-6 py-4"><code class="font-mono bg-gray-200 px-1 rounded">5000</code> = 1 sig fig</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Tips for Students</h2>
        <ul class="list-disc list-inside space-y-2 text-lg">
          <li>Always count from the first non-zero digit.</li>
          <li>Practice with different numbers until you’re confident.</li>
          <li>When doing calculations, round only the final answer, not intermediate steps.</li>
        </ul>
      </div>
    </div>
  `,
};
