import * as React from 'react'
import Job from './Job'
import data from './data.json'
import './App.css'
import { ReactComponent as IconRemove } from './assets/icon-remove.svg'

function App() {
  const [filter, setFilter] = React.useState(new Set())

  const addLangToFilter = (lang) => {
    setFilter((prevFilter) => new Set([...prevFilter, lang]))
  }
  const removeLangFromFilter = (lang) => {
    setFilter((prevFilter) => {
      prevFilter.delete(lang)
      return new Set([...prevFilter])
    })
  }

  const isFilterActive = filter.size !== 0
  const matches = isFilterActive
    ? data.filter((d) => d.languages.some((lang) => filter.has(lang)))
    : data

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="Content">
        {isFilterActive ? (
          <div className="Filter-card">
            <ul className="Filter-container">
              {[...filter].map((lang) => (
                <li key={lang} className="Filter-item">
                  <span className="-label">{lang}</span>
                  <button
                    className="-btn"
                    onClick={() => removeLangFromFilter(lang)}
                  >
                    <IconRemove />
                  </button>
                </li>
              ))}
            </ul>
            <button className="Filter-clear-btn">Clear</button>
          </div>
        ) : null}
        <div className="List">
          {matches.map((d) => (
            <Job key={d.id} data={d} onLangClick={addLangToFilter} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
