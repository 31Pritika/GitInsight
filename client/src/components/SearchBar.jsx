import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input.trim()) onSearch(input.trim())
  }

  return (
    <div className="search-wrap">
      <span style={{ paddingLeft: 20, fontSize: 20, opacity: 0.4, flexShrink: 0 }}>⌕</span>
      <input
        className="search-input"
        type="text"
        placeholder="Enter any GitHub username..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
      <button className="analyse-btn" onClick={handleSubmit}>
        Analyse →
      </button>
    </div>
  )
}

export default SearchBar