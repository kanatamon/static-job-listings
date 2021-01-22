import './App.css'
import './Job.css'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="List">
        {data.map((d) => (
          <div
            key={d.id}
            className={`Job-card ${d.featured ? '--featured' : ''}`}
          >
            <img src={d.logo} className="Job-logo" alt="job logo" />
            <p className="Job-highlight-container">
              <span className="Job-company">{d.company}</span>
              {d.new ? <span className="Job-label --new">New!</span> : null}
              {d.featured ? (
                <span className="Job-label --featured">Featured</span>
              ) : null}
            </p>
            <p className="Job-position">{d.position}</p>
            <p className="Job-context-container">
              <span className="Job-postedAt">{d.postedAt}</span>
              <span className="Job-contract">{d.contract}</span>
              <span className="Job-location">{d.location}</span>
            </p>
            <hr className="Job-divider" />
            <p className="Job-language-container">
              {d.languages.map((lang) => (
                <span key={lang} className="Job-language-item">
                  {lang}
                </span>
              ))}
            </p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
