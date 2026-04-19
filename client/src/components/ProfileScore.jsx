function ProfileScore({ user, repos, languages }) {
  const totalStars = repos.reduce((a, r) => a + r.stargazers_count, 0)
  const totalForks = repos.reduce((a, r) => a + r.forks_count, 0)
  const langCount = Object.keys(languages).length

  const followerScore = Math.min(user.followers / 10, 25)
  const starScore     = Math.min(totalStars / 20, 25)
  const repoScore     = Math.min(user.public_repos / 4, 25)
  const langScore     = Math.min(langCount * 2.5, 25)
  const total         = Math.round(followerScore + starScore + repoScore + langScore)

  const grade =
    total >= 85 ? { label: 'S', color: '#a78bfa', desc: 'Legendary' } :
    total >= 70 ? { label: 'A', color: '#34d399', desc: 'Expert' }    :
    total >= 50 ? { label: 'B', color: '#60a5fa', desc: 'Advanced' }  :
    total >= 30 ? { label: 'C', color: '#fbbf24', desc: 'Intermediate' } :
                  { label: 'D', color: '#f87171', desc: 'Beginner' }

  const bars = [
    { label: 'Popularity', value: Math.round((followerScore / 25) * 100), color: '#a78bfa' },
    { label: 'Impact',     value: Math.round((starScore / 25) * 100),     color: '#60a5fa' },
    { label: 'Activity',   value: Math.round((repoScore / 25) * 100),     color: '#34d399' },
    { label: 'Diversity',  value: Math.round((langScore / 25) * 100),     color: '#fbbf24' },
  ]

  const metrics = [
    { icon: '⭐', label: 'Total Stars',   value: totalStars.toLocaleString() },
    { icon: '🍴', label: 'Total Forks',   value: totalForks.toLocaleString() },
    { icon: '💻', label: 'Languages',     value: langCount },
    { icon: '📁', label: 'Public Repos',  value: user.public_repos },
  ]

  return (
    <div className="card" style={{ padding: 32 }}>
      <div className="section-title">Profile Score</div>

      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>

        {/* Grade */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, minWidth: 120 }}>
          <div
            className="pulse-glow"
            style={{
              width: 110, height: 110, borderRadius: '50%',
              border: `3px solid ${grade.color}`,
              background: `radial-gradient(circle, ${grade.color}18, transparent 70%)`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center'
            }}
          >
            <span style={{ fontSize: 42, fontWeight: 900, color: grade.color, lineHeight: 1 }}>
              {grade.label}
            </span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
              {total}/100
            </span>
          </div>
          <span style={{ fontSize: 13, color: grade.color, fontWeight: 600 }}>{grade.desc}</span>
        </div>

        {/* Bars */}
        <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
          {bars.map(b => (
            <div key={b.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{b.label}</span>
                <span style={{ fontSize: 13, color: b.color, fontWeight: 700 }}>{b.value}%</span>
              </div>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${b.value}%`,
                  background: `linear-gradient(90deg, ${b.color}88, ${b.color})`,
                  borderRadius: 999,
                  transition: 'width 1s ease',
                  boxShadow: `0 0 10px ${b.color}66`
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, minWidth: 220 }}>
          {metrics.map(m => (
            <div key={m.label} className="stat-pill">
              <div style={{ fontSize: 22, marginBottom: 4 }}>{m.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>{m.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{m.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProfileScore