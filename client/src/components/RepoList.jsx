const LANG_COLORS = {
  JavaScript: '#f7df1e', TypeScript: '#3178c6', Python: '#3776ab',
  Rust: '#ce422b', Go: '#00add8', Java: '#b07219', CSS: '#563d7c',
  HTML: '#e34c26', 'C++': '#f34b7d', Ruby: '#701516', Shell: '#89e051',
  Swift: '#fa7343', Kotlin: '#7f52ff', Dart: '#00b4ab'
}

function RepoList({ repos }) {
  const sorted = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)

  return (
    <div className="card" style={{ padding: 32 }}>
      <div className="section-title">Top Repositories</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sorted.map((repo, i) => (
          <div key={repo.id} className="repo-card" style={{ animationDelay: `${i * 0.04}s` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={e => e.target.style.color = '#a78bfa'}
                onMouseOut={e => e.target.style.color = 'white'}
              >
                {repo.name}
              </a>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  ⭐ <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{repo.stargazers_count}</strong>
                </span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  🍴 <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{repo.forks_count}</strong>
                </span>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
              {repo.description || 'No description provided'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
              {repo.language && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: LANG_COLORS[repo.language] || '#8b5cf6',
                    boxShadow: `0 0 6px ${LANG_COLORS[repo.language] || '#8b5cf6'}`
                  }} />
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{repo.language}</span>
                </div>
              )}
              {repo.topics?.slice(0, 3).map(t => (
                <span key={t} style={{
                  background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                  color: '#93c5fd', borderRadius: 999, padding: '2px 10px', fontSize: 11
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RepoList