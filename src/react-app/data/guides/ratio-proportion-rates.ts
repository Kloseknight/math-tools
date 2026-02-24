import { Guide } from '@/react-app/data/types';

export const ratioProportionRates: Guide = {
  id: 'ratio-proportion-rates',
  title: 'Ratio, Proportion & Rates',
  description: 'This guide will help you understand how to compare quantities using ratios, solve problems involving proportions, interpret and calculate rates, and apply these concepts in real-life and CSEC exam questions.',
  content: `
    <div class="space-y-6 text-gray-700">

      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">1. Comparing Quantities Using Ratios</h2>
        <p class="text-lg">A ratio compares two quantities of the same kind using division.</p>
        <div class="text-center text-2xl font-sans my-4">
          <span class="relative inline-block">
            <span class="block text-center">First Quantity</span>
            <span class="block border-t border-gray-800 my-1"></span>
            <span class="block text-center">Second Quantity</span>
          </span>
        </div>
        <p class="text-lg">Ratios can be written in three ways: <code class="font-mono bg-gray-200 px-2 rounded">3 : 5</code>, <code class="font-mono bg-gray-200 px-2 rounded">3 to 5</code>, or <code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>5</sub></code>.</p>
        <div class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
            <h3 class="font-semibold text-lg">Example 1: Writing a Ratio</h3>
            <p class="text-lg mt-2">A class has 12 boys and 18 girls.</p>
            <p class="text-lg">Ratio of boys to girls: <code class="font-mono bg-gray-200 px-2 rounded">12 : 18</code></p>
            <p class="text-lg">Simplify by dividing by 6: <code class="font-mono bg-gray-200 px-2 rounded">2 : 3</code></p>
        </div>
        <div class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
          <h3 class="font-semibold text-lg">Important Rules</h3>
          <ul class="list-disc list-inside space-y-2 text-lg mt-2">
            <li>✔ Always write ratios in simplest form</li>
            <li>✔ Make sure quantities are in the same units before comparing</li>
          </ul>
        </div>
        <div class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
          <h3 class="font-semibold text-lg">Example 2: Different Units</h3>
          <p class="text-lg mt-2">Convert first: 2 m = 200 cm</p>
          <p class="text-lg">Ratio: <code class="font-mono bg-gray-200 px-2 rounded">200 : 50</code> = <code class="font-mono bg-gray-200 px-2 rounded">4 : 1</code></p>
        </div>
      </div>

      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">2. Dividing in a Given Ratio</h2>
        <p class="text-lg">If $600 is shared in the ratio 2 : 3, find each share.</p>
        <ol class="list-decimal list-inside space-y-2 text-lg mt-2">
            <li><strong>Add parts:</strong> 2 + 3 = 5</li>
            <li><strong>Divide total by parts:</strong> 600 ÷ 5 = 120</li>
            <li><strong>Multiply:</strong> 2 × 120 = 240 and 3 × 120 = 360</li>
        </ol>
        <p class="text-lg mt-3">Final Answer: <strong>$240 and $360</strong></p>
      </div>

      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">3. Proportion</h2>
        <p class="text-lg">Two ratios are equal. We solve using cross multiplication.</p>
        <div class="text-center text-2xl font-sans my-4">
            <code class="font-mono bg-gray-200 px-2 rounded"><sup>a</sup>&frasl;<sub>b</sub> = <sup>c</sup>&frasl;<sub>d</sub></code>
        </div>
        <div class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
            <h3 class="font-semibold text-lg">Example 3</h3>
            <p class="text-lg mt-2"><code class="font-mono bg-gray-200 px-2 rounded"><sup>3</sup>&frasl;<sub>5</sub> = <sup>x</sup>&frasl;<sub>20</sub></code></p>
            <p class="text-lg">Cross multiply: 3 × 20 = 5x</p>
            <p class="text-lg">60 = 5x</p>
            <p class="text-lg">x = 12</p>
        </div>
         <div class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
            <h3 class="font-semibold text-lg">Word Problem Example</h3>
            <p class="text-lg mt-2">If 4 pens cost $12, how much will 10 pens cost?</p>
            <ol class="list-decimal list-inside space-y-2 text-lg mt-2">
                <li><strong>Set up proportion:</strong> <code class="font-mono bg-gray-200 px-2 rounded"><sup>4</sup>&frasl;<sub>12</sub> = <sup>10</sup>&frasl;<sub>x</sub></code></li>
                <li><strong>Cross multiply:</strong> 4x = 120</li>
                <li>x = 30. 10 pens cost $30.</li>
            </ol>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">4. Rates</h2>
        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">A rate is a ratio comparing quantities with different units.<br>Examples: km per hour, dollars per kilogram, litres per minute.</div>
        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><strong>Speed Formula:</strong> <code class="font-mono bg-gray-200 px-2 rounded">Speed = Distance / Time</code><br>Example: A car travels 180 km in 3 hours. Speed = 180/3 = 60 km/h</div>
      </div>
      
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">5. Unit Rate</h2>
        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">A unit rate compares a quantity to 1 unit.<br>Example: If 5 kg of rice costs $40, the unit rate is $40/5 = $8 per kg.</div>
      </div>

      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">6. Direct Proportion</h2>
        <p class="text-lg">As one quantity increases, the other increases. <code class="font-mono bg-gray-200 px-2 rounded">y = kx</code></p>
        <p class="text-lg mt-3"><strong>Example:</strong> If 3 mangoes cost $6, how much do 9 mangoes cost? Since 9 is 3 times 3, the cost is 6 × 3 = $18.</p>
      </div>
      
      <div class="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">7. Inverse Proportion</h2>
        <p class="text-lg">As one quantity increases, the other decreases. <code class="font-mono bg-gray-200 px-2 rounded">xy = k</code></p>
        <p class="text-lg mt-3"><strong>Example:</strong> If 4 workers complete a job in 6 days, how long will 8 workers take? 4 × 6 = 24, so 8 × x = 24, which means x = 3 days.</p>
      </div>

      <div class="p-6 bg-red-50 rounded-xl border border-red-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">Common CSEC Mistakes</h2>
          <ul class="list-disc list-inside space-y-2 text-lg">
            <li>❌ Forgetting to simplify ratios</li>
            <li>❌ Mixing units (cm and m, hours and minutes)</li>
            <li>❌ Setting up proportion incorrectly</li>
            <li>❌ Not identifying direct vs inverse proportion</li>
          </ul>
      </div>

      <div class="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Exam Tips</h2>
        <div class="text-lg space-y-2">
            <p>✔ Always define variables clearly</p>
            <p>✔ Show all your working</p>
            <p>✔ Check units before comparing</p>
            <p>✔ Re-read word problems carefully</p>
        </div>
      </div>
      
      <div class="p-6 bg-gray-100 rounded-xl border border-gray-300">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">Practice Questions</h2>
          <ol class="list-decimal list-inside space-y-2 text-lg">
              <li>Simplify 15 : 25</li>
              <li>Divide $900 in the ratio 4 : 5</li>
              <li>If 6 books cost $48, find the cost of 15 books.</li>
              <li>A car travels 240 km in 4 hours. Find its speed.</li>
              <li>If 5 workers take 12 days, how long will 10 workers take?</li>
          </ol>
      </div>

    </div>
  `,
};
