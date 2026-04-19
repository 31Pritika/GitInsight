function ProfileCard({ user }) {
  const joined = new Date(user.created_at).getFullYear()

  return (
    <div className="card" style={{ padding: 32 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Avatar */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="pulse-glow"
            style={{
              width: 110, height: 110, borderRadius: 22,
              border: '2px solid rgba(139,92,246,0.5)',
              display: 'block'
            }}
          />
          <div style={{
            position: 'absolute', bottom: -6, right: -6,
            width: 20, height: 20, borderRadius: '50%',
            background: '#22c55e', border: '3px solid #070710'
          }} />
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: 'white' }}>
              {user.name || user.login}
            </h2>
            <span style={{
              background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
              color: '#a78bfa', borderRadius: 999, padding: '2px 12px', fontSize: 12
            }}>
              Since {joined}
            </span>
          </div>

          <p style={{ color: '#a78bfa', fontSize: 14, marginBottom: 12 }}>@{user.login}</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.7, marginBottom: 20, maxWidth: 500 }}>
            {user.bio || 'No bio available'}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
            {[
              { label: 'Followers', value: user.followers.toLocaleString() },
              { label: 'Following', value: user.following.toLocaleString() },
              { label: 'Repos', value: user.public_repos },
              { label: 'Gists', value: user.public_gists },
            ].map(s => (
              <div key={s.label} className="stat-pill">
                <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {user.location && <span className="tag">📍 {user.location}</span>}
            {user.company && <span className="tag">🏢 {user.company}</span>}
            {user.blog && (
              <a href={user.blog} target="_blank" rel="noreferrer" className="tag">🔗 Website</a>
            )}
            {user.twitter_username && (
              <span className="tag">🐦 @{user.twitter_username}</span>
            )}
            <a href={user.html_url} target="_blank" rel="noreferrer" className="tag">
              View on GitHub →
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileCard