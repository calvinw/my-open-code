import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <main className="card">
        <div className="badge">⚛️ React + Vite</div>
        <h1>Build something great</h1>
        <p className="subtitle">
          A clean, modern starter with instant hot-reload.
        </p>

        <div className="counter">{count}</div>

        <div className="actions">
          <button className="primary" onClick={() => setCount((c) => c + 1)}>
            + Increment
          </button>
          <button className="ghost" onClick={() => setCount((c) => c - 1)}>
            − Decrement
          </button>
          <button className="link" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div className="footer">
          Edit <code>src/App.jsx</code> and save to reload
        </div>
      </main>
    </div>
  )
}
