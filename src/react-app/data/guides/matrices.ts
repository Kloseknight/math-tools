export const matricesGuide = {
  id: 'matrices',
  title: 'Matrices',
  content: `
    <div class="space-y-6 text-gray-700">
      <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <p class="text-lg">
          Matrices are a fundamental part of the CSEC Mathematics syllabus, appearing in both Paper 1 (Multiple Choice) and Paper 2 (Section II). Whether you are solving for unknowns, performing transformations, or working with systems of equations, understanding matrix operations is essential for scoring full marks.
        </p>
      </div>

      <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">What Is a Matrix?</h2>
        <p class="text-lg">A matrix is a rectangular array of numbers arranged in rows and columns.</p>
        <p class="text-lg mt-2">The order (or dimension) of a matrix is written as: \\(m \\times n\\)</p>
        <ul class="list-disc list-inside mt-2 text-lg">
          <li><strong>m</strong> = number of rows</li>
          <li><strong>n</strong> = number of columns</li>
        </ul>
        <p class="text-lg mt-2"><strong>Example:</strong> A matrix with 2 rows and 3 columns is called a \\(2 \\times 3\\) matrix.</p>
      </div>

      <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Essential Matrix Operations</h2>
        <p class="text-lg mb-4">To use a matrix calculator effectively, it helps to understand the rules the computer is following.</p>
        
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-gray-800">1. Addition and Subtraction of Matrices</h3>
          <p class="text-lg">You can only add or subtract matrices of the same order. You simply add or subtract the corresponding elements.</p>
          <div class="text-lg">If \\(A = \\begin{pmatrix} 1 & 3 \\\\ 4 & 2 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 5 & 1 \\\\ 6 & 7 \\end{pmatrix}\\), then:</div>
          $$ A + B = \\begin{pmatrix} 1+5 & 3+1 \\\\ 4+6 & 2+7 \\end{pmatrix} = \\begin{pmatrix} 6 & 4 \\\\ 10 & 9 \\end{pmatrix} $$
          
          <h3 class="text-xl font-bold text-gray-800 mt-4">2. Scalar Multiplication</h3>
          <p class="text-lg">Scalar multiplication means multiplying every element in the matrix by the same number (called a scalar).</p>
           <div class="text-lg">If \\(A = \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}\\), then:</div>
           $$ 3A = 3\\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix} = \\begin{pmatrix} 6 & 9 \\\\ 12 & 15 \\end{pmatrix} $$

          <h3 class="text-xl font-bold text-gray-800 mt-4">3. Matrix Multiplication (Row by Column)</h3>
          <p class="text-lg">Matrix multiplication is done using the row-by-column method. To multiply two matrices, the number of columns in the first matrix must equal the number of rows in the second matrix.</p>
          <div class="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p class="font-bold">Important Rule:</p>
            <p>Matrix multiplication is not commutative. This means: \\(A \\times B \\neq B \\times A\\) (in most cases).</p>
          </div>
        </div>
      </div>

      <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">The Determinant and the Inverse</h2>
        <p class="text-lg mb-4">In CSEC, you are frequently asked to find the inverse of a 2 × 2 matrix. This is always a two-step process.</p>
        
        <h3 class="text-xl font-bold">Step 1: Find the Determinant</h3>
        <div class="text-lg">For a matrix \\(A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\), the determinant is:</div>
        $$ det(A) = ad - bc $$
        <div class="mt-2 p-3 bg-red-50 text-red-700 rounded-lg"><strong>Important:</strong> If \\(det(A) = 0\\), the matrix is called a singular matrix. A singular matrix has no inverse.</div>

        <h3 class="text-xl font-bold mt-4">Step 2: Find the Inverse</h3>
        <div class="text-lg">The inverse of a matrix is given by:</div>
        $$ A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} $$
        <p class="text-lg mt-2">This formula is one of the most tested formulas in CSEC.</p>
      </div>

       <div class="p-6 bg-purple-50 rounded-xl border border-purple-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Solving Simultaneous Equations Using Matrices</h2>
        <p class="text-lg">You can solve systems of equations using: \\(X = A^{-1}B\\).</p>
        <ul class="list-disc list-inside mt-2 text-lg">
            <li><strong>A</strong> is the coefficient matrix.</li>
            <li><strong>B</strong> is the constant matrix.</li>
            <li><strong>X</strong> contains the unknown variables.</li>
        </ul>
        <p class="text-lg mt-2">This method is commonly tested in Paper 2.</p>
      </div>

      <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">The Identity Matrix</h2>
        <div class="text-lg">The identity matrix, \\(I\\), acts like the number 1 in normal arithmetic:</div>
        $$ I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $$
        <p class="text-lg mt-2">Any matrix multiplied by I remains unchanged: \\(AI = IA = A\\).</p>
      </div>

      <div class="p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Common CSEC Exam Tips</h2>
        <ul class="list-disc list-inside text-lg space-y-2">
            <li>Always show substitution into the determinant formula.</li>
            <li>Never forget to divide by the determinant.</li>
            <li>Check if the determinant is zero before attempting the inverse.</li>
            <li>Use the matrix method for solving simultaneous equations.</li>
            <li>Remember: order matters in multiplication.</li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Quick Summary Table</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Operation</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Key Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr><td class="px-6 py-4">Addition/Subtraction</td><td class="px-6 py-4">Same order only</td></tr>
              <tr><td class="px-6 py-4">Scalar multiplication</td><td class="px-6 py-4">Multiply every element</td></tr>
              <tr><td class="px-6 py-4">Matrix multiplication</td><td class="px-6 py-4">Row by column</td></tr>
              <tr><td class="px-6 py-4">Determinant</td><td class="px-6 py-4">\\(ad - bc\\)</td></tr>
              <tr><td class="px-6 py-4">Inverse</td><td class="px-6 py-4">\\(\\frac{1}{\\text{det}} \\times \\text{adjoint}\\)</td></tr>
              <tr><td class="px-6 py-4">Identity</td><td class="px-6 py-4">Leaves matrix unchanged</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
};
