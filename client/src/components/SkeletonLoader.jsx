function SkeletonLoader() {
  return (
    <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Profile skeleton */}
      <div className="card" style={{ padding: 32 }}>
        <div style={{ display: 'flex', gap: 32 }}>
          <div className="skeleton" style={{ width: 110, height: 110, borderRadius: 22, flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="skeleton" style={{ height: 28, width: 200 }} />
            <div className="skeleton" style={{ height: 16, width: 120 }} />
            <div className="skeleton" style={{ height: 16, width: '80%' }} />
            <div className="skeleton" style={{ height: 16, width: '60%' }} />
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {[1,2,3,4].map(i => (
                <div key={i} className="skeleton" style={{ height: 56, width: 80, borderRadius: 16 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Score skeleton */}
      <div className="card" style={{ padding: 32 }}>
        <div className="skeleton" style={{ height: 20, width: 140, marginBottom: 24 }} />
        <div style={{ display: 'flex', gap: 24 }}>
          <div className="skeleton" style={{ width: 110, height: 110, borderRadius: '50%', flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
            {[1,2,3,4].map(i => (
              <div key={i} className="skeleton" style={{ height: 10, width: '100%', borderRadius: 999 }} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[1,2,3,4].map(i => (
              <div key={i} className="skeleton" style={{ height: 80, width: 100, borderRadius: 16 }} />
            ))}
          </div>
        </div>
      </div>

      {/* Chart skeleton */}
      <div className="card" style={{ padding: 32 }}>
        <div className="skeleton" style={{ height: 20, width: 160, marginBottom: 24 }} />
        <div className="skeleton" style={{ height: 280, width: '100%', borderRadius: 16 }} />
      </div>

    </div>
  )
}

export default SkeletonLoader