import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171', '#fb923c', '#e879f9', '#38bdf8']

function LanguageChart({ languages }) {
  const data = Object.entries(languages)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8)

  return (
    <div className="card" style={{ padding: 32 }}>
      <div className="section-title">Languages Used</div>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={125}
            paddingAngle={4}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(v, n) => [`${(v / 1000).toFixed(1)}kb`, n]}
            contentStyle={{
              background: 'rgba(7,7,16,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, color: '#fff', fontSize: 13
            }}
          />
          <Legend
            formatter={v => <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{v}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LanguageChart