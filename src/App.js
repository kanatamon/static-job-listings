import Job from './Job'
import data from './data.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="List">
        {data.map((d) => (
          <Job key={d.id} data={d} />
        ))}
      </main>
    </div>
  )
}

export default App
