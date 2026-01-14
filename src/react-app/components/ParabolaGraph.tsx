import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

interface ParabolaGraphProps {
  a: number;
  b: number;
  c: number;
  root1: number | null;
  root2: number | null;
}

export default function ParabolaGraph({ a, b, c, root1, root2 }: ParabolaGraphProps) {
  // Calculate vertex
  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  // Determine x range for graph
  const roots = [root1, root2].filter((r): r is number => r !== null);
  let xMin: number, xMax: number;
  
  if (roots.length === 0) {
    // No real roots - center around vertex
    xMin = vertexX - 5;
    xMax = vertexX + 5;
  } else {
    // Has roots - extend beyond them
    const minRoot = Math.min(...roots);
    const maxRoot = Math.max(...roots);
    const range = maxRoot - minRoot || 10;
    xMin = minRoot - range * 0.5;
    xMax = maxRoot + range * 0.5;
  }

  // Generate data points
  const numPoints = 100;
  const step = (xMax - xMin) / numPoints;
  const data = [];
  
  for (let i = 0; i <= numPoints; i++) {
    const x = xMin + i * step;
    const y = a * x * x + b * x + c;
    data.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }

  // Custom dot for vertex
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const isVertex = Math.abs(payload.x - vertexX) < 0.1;
    
    if (isVertex) {
      return (
        <circle cx={cx} cy={cy} r={4} fill="#FF4757" stroke="white" strokeWidth={2} />
      );
    }
    return null;
  };

  const equation = `y = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`;

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
        <p className="text-sm font-medium text-gray-600 mb-2">Parabola Equation</p>
        <p className="text-lg font-semibold text-gray-900 font-mono">{equation}</p>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-600">Vertex</p>
            <p className="font-mono font-semibold text-gray-900">
              ({vertexX.toFixed(2)}, {vertexY.toFixed(2)})
            </p>
          </div>
          {roots.length > 0 && (
            <div>
              <p className="text-gray-600">X-intercepts (roots)</p>
              {roots.length === 2 && roots[0] !== roots[1] ? (
                <p className="font-mono font-semibold text-gray-900">
                  x = {root1?.toFixed(2)}, {root2?.toFixed(2)}
                </p>
              ) : (
                <p className="font-mono font-semibold text-gray-900">
                  x = {roots[0].toFixed(2)}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="x" 
              label={{ value: 'x', position: 'insideRight', offset: -10 }}
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              label={{ value: 'y', angle: -90, position: 'insideLeft' }}
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '2px solid #FF4757',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: any) => parseFloat(value).toFixed(2)}
            />
            <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={2} />
            <ReferenceLine x={0} stroke="#94a3b8" strokeWidth={2} />
            {root1 !== null && (
              <ReferenceLine x={root1} stroke="#FF4757" strokeDasharray="5 5" strokeWidth={2} />
            )}
            {root2 !== null && root1 !== root2 && (
              <ReferenceLine x={root2} stroke="#FF4757" strokeDasharray="5 5" strokeWidth={2} />
            )}
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#FF4757" 
              strokeWidth={3}
              dot={<CustomDot />}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-xs text-gray-500 space-y-1">
        <p>• The red curve shows the parabola formed by the quadratic equation</p>
        <p>• The red dot marks the vertex (turning point) of the parabola</p>
        {roots.length > 0 && <p>• Dashed red lines show where the parabola crosses the x-axis (roots)</p>}
      </div>
    </div>
  );
}
