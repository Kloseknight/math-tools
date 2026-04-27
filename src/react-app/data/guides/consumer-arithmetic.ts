export const consumerArithmeticGuide = {
  title: 'Consumer Arithmetic',
  content: `
    <div class="space-y-6 text-gray-700">
      
      <!-- Basic Concepts -->
      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Basic Concepts</h2>
        <p class="text-lg"><strong>Cost Price (CP):</strong> The price at which an item is bought.</p>
        <p class="text-lg mt-2"><strong>Selling Price (SP):</strong> The price at which the item is sold.</p>
      </div>

      <!-- Profit and Loss -->
      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Profit and Loss</h2>
        <p class="text-lg"><strong>Profit:</strong> Occurs when SP > CP. Formula: <code class="font-mono bg-gray-200 px-1 rounded">Profit = SP − CP</code></p>
        <p class="text-lg mt-2"><strong>Loss:</strong> Occurs when SP < CP. Formula: <code class="font-mono bg-gray-200 px-1 rounded">Loss = CP − SP</code></p>
        <p class="text-lg mt-4"><strong>Example 1:</strong><br>An item is bought for $50 and sold for $70.<br>Profit = $70 − $50 = $20</p>
      </div>

      <!-- Percentage Profit and Loss -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Percentage Profit and Loss</h2>
        <ul class="space-y-4 text-lg">
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>% Profit:</strong> <code class="font-mono bg-gray-200 px-1 rounded">(Profit / CP) × 100</code></li>
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>% Loss:</strong> <code class="font-mono bg-gray-200 px-1 rounded">(Loss / CP) × 100</code></li>
          <li class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Example 2:</strong><br>Cost Price = $80, Selling Price = $100<br>Profit = $20<br>% Profit = ($20 / $80) × 100 = 25%</li>
        </ul>
      </div>

      <!-- Discount -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Discount</h2>
        <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <p class="text-lg mb-2"><strong>Discount:</strong> Marked Price − Selling Price</p>
          <p class="text-lg mb-2"><strong>% Discount:</strong> <code class="font-mono bg-gray-200 px-1 rounded">(Discount / Marked Price) × 100</code></p>
          <p class="text-lg mt-4"><strong>Example 3:</strong><br>Marked Price = $120, Selling Price = $90<br>Discount = $30<br>% Discount = ($30 / $120) × 100 = 25%</p>
        </div>
      </div>

      <!-- Sales Tax -->
      <div class="p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Sales Tax</h2>
        <p class="text-lg"><strong>Tax:</strong> <code class="font-mono bg-gray-200 px-1 rounded">(Rate / 100) × Price</code></p>
        <p class="text-lg mt-2"><strong>Total Price:</strong> Price + Tax</p>
        <p class="text-lg mt-4"><strong>Example 4:</strong><br>Price = $200, Tax = 10%<br>Tax = (10/100) * 200 = $20<br>Total Price = $200 + $20 = $220</p>
      </div>
      
      <!-- Markup -->
      <div class="p-6 bg-indigo-50 rounded-xl border border-indigo-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Markup</h2>
        <p class="text-lg"><strong>Markup:</strong> SP − CP</p>
        <p class="text-lg mt-2"><strong>% Markup:</strong> <code class="font-mono bg-gray-200 px-1 rounded">(Markup / CP) × 100</code></p>
      </div>

      <!-- Hire Purchase -->
      <div class="p-6 bg-purple-50 rounded-xl border border-purple-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Hire Purchase</h2>
        <p class="text-lg"><strong>Total Paid:</strong> Deposit + Total Instalments</p>
        <p class="text-lg mt-2"><strong>Interest:</strong> Total Paid − Cash Price</p>
        <p class="text-lg mt-4"><strong>Example 5:</strong><br>Cash Price = $1000, Deposit = $200, Monthly payment = $100 for 10 months<br>Total Paid = $200 + ($100 * 10) = $1200<br>Interest = $1200 - $1000 = $200</p>
      </div>

      <!-- Simple and Compound Interest -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Simple & Compound Interest</h2>
        <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p class="text-lg mb-2"><strong>Simple Interest (SI):</strong> <code class="font-mono bg-gray-200 px-1 rounded">(P × R × T) / 100</code></p>
            <p class="text-lg mb-2"><strong>Compound Interest (A):</strong> <code class="font-mono bg-gray-200 px-1 rounded">P(1 + R/100)^T</code></p>
            <p class="text-lg">Where CI = A - P</p>
        </div>
      </div>

      <!-- Depreciation and Appreciation -->
      <div class="p-6 bg-teal-50 rounded-xl border border-teal-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Depreciation and Appreciation</h2>
        <p class="text-lg"><strong>Value V:</strong> <code class="font-mono bg-gray-200 px-1 rounded">P(1 ± R/100)^T</code></p>
        <p class="text-lg mt-2">Use <code class="font-mono bg-gray-200 px-1 rounded">-</code> for depreciation and <code class="font-mono bg-gray-200 px-1 rounded">+</code> for appreciation.</p>
      </div>
      
      <!-- Other Sections -->
      <div class="p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">Other Key Topics</h2>
          <ul class="list-disc list-inside space-y-2 text-lg">
              <li><strong>Rates and Taxes:</strong> Charges based on usage or value (e.g., property tax). Tax = (Rate/100) × Value.</li>
              <li><strong>Utilities:</strong> Bills based on usage. Cost = Units Used × Cost per Unit.</li>
              <li><strong>Invoices:</strong> Bills including item cost, quantity, discounts, and taxes.</li>
              <li><strong>Salaries and Wages:</strong> Basic Pay (Rate × Time) and Overtime (at a higher rate).</li>
              <li><strong>Insurance:</strong> Paying a premium to cover risk. Premium = (Rate/100) * Insured Value.</li>
              <li><strong>Investments:</strong> Money invested earns interest over time (Simple or Compound).</li>
          </ul>
      </div>

      <!-- Common Mistakes & Exam Tips -->
      <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-red-100 rounded-xl border border-red-300">
              <h2 class="text-2xl font-bold text-red-800 mb-3">⚠️ Common CSEC Mistakes</h2>
              <ul class="list-disc list-inside space-y-2 text-lg">
                  <li>Using SP instead of CP for percentage calculations.</li>
                  <li>Not converting percentages to decimals correctly.</li>
                  <li>Ignoring units in the final answer.</li>
                  <li>Mixing up formulas for Simple and Compound Interest.</li>
              </ul>
          </div>
          <div class="p-6 bg-green-100 rounded-xl border border-green-300">
              <h2 class="text-2xl font-bold text-green-800 mb-3">🎯 Exam Tips</h2>
              <ul class="list-disc list-inside space-y-2 text-lg">
                  <li>Always define the variables you are using.</li>
                  <li>Write down the formula before substituting values.</li>
                  <li>Show all your working steps clearly.</li>
                  <li>Check your units carefully.</li>
              </ul>
          </div>
      </div>

      <!-- Quick Summary Table -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">🧠 Quick Summary Table</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Concept</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Formula</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr><td class="px-6 py-4">Profit</td><td class="px-6 py-4 font-mono">SP − CP</td></tr>
              <tr><td class="px-6 py-4">% Profit</td><td class="px-6 py-4 font-mono">(Profit ÷ CP) × 100</td></tr>
              <tr><td class="px-6 py-4">Discount</td><td class="px-6 py-4 font-mono">MP − SP</td></tr>
              <tr><td class="px-6 py-4">Tax</td><td class="px-6 py-4 font-mono">(Rate/100) × Value</td></tr>
              <tr><td class="px-6 py-4">Simple Interest (SI)</td><td class="px-6 py-4 font-mono">(P × R × T) ÷ 100</td></tr>
              <tr><td class="px-6 py-4">Compound Interest Amount (A)</td><td class="px-6 py-4 font-mono">P(1+R/100)^T</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Practice Questions -->
      <div class="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">✏️ Practice Questions</h2>
        <ul class="list-decimal list-inside space-y-2 text-lg">
          <li>Find the profit and % profit if CP = $90 and SP = $120.</li>
          <li>A $200 item has a 15% tax. Find the total cost.</li>
          <li>Your electricity usage is 150 units at $3 per unit. Find the total bill.</li>
          <li>A worker earns $12/hour for 40 hours and $18/hour overtime for 6 hours. Find their total pay.</li>
          <li>$1000 is invested at 5% compound interest for 2 years. Find the final amount.</li>
        </ul>
      </div>

    </div>
  `,
};