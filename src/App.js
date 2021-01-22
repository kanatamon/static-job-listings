import * as React from 'react'
import Filter from './Filter'
import Job from './Job'
import data from './data.json'
import './App.css'

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
  const clearFilter = () => {
    setFilter(new Set())
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
          <Filter
            filter={[...filter]}
            onItemRemoveBtnClick={removeLangFromFilter}
            onClearBtnClick={clearFilter}
          />
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
