import { useState } from 'react'
import './App.css'

const skills = ['React', 'CSS', 'JavaScript']

function Counter({ title, accent, skills }) {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-card" style={{ '--accent': accent }}>
      <div className="card-header">
        <span className="status-dot" />
        <span>{title}</span>
      </div>

      <p className="count" aria-live="polite" key={count}>{count}</p>
      <p className="count-status">
        {count === 0 ? 'Ready to start' : count > 0 ? 'Above zero' : 'Below zero'}
      </p>

      <label className="count-input-label">
        Set count
        <input
          type="number"
          step="1"
          value={count}
          aria-label={`Set ${title} count`}
          onChange={(event) => setCount(Number(event.target.value))}
        />
      </label>

      <div className="button-row">
        <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increase
        </button>
        <button type="button" onClick={() => setCount((currentCount) => currentCount - 1)}>
          Decrease
        </button>
        <button type="button" className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'theme-dark' : 'theme-light'}>
      <main className="app-container">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">R</div>
            <div>
              <p className="eyebrow">Front-end lab</p>
              <h1 className="app-title">React Counter Studio</h1>
            </div>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((currentMode) => !currentMode)}
          >
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </header>

        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Learning objective</p>
            <h2>Build interactive UI with state and reusable components</h2>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-label">Counters</span>
              <strong>2</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Skills</span>
              <strong>3</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Status</span>
              <strong>Live</strong>
            </div>
          </div>
        </section>

        <section className="floating-badges" aria-label="Quick highlights">
          <span>React</span>
          <span>State</span>
          <span>Props</span>
          <span>JSX</span>
        </section>

        <section className="counter-grid">
          <Counter title="First Counter" accent="#60a5fa" skills={skills} />
          <Counter title="Second Counter" accent="#a78bfa" skills={skills} />
        </section>
      </main>
    </div>
  )
}

export default App
