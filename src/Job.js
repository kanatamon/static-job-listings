import './Job.css'

function Job({ data, onLangClick }) {
  return (
    <div className={`Job-card ${data.featured ? '--featured' : ''}`}>
      <img src={data.logo} className="Job-logo" alt="job logo" />
      <p className="Job-highlight-container">
        <span className="Job-company">{data.company}</span>
        {data.new ? <span className="Job-label --new">New!</span> : null}
        {data.featured ? (
          <span className="Job-label --featured">Featured</span>
        ) : null}
      </p>
      <p className="Job-position">{data.position}</p>
      <p className="Job-context-container">
        <span className="Job-postedAt">{data.postedAt}</span>
        <span className="Job-contract">{data.contract}</span>
        <span className="Job-location">{data.location}</span>
      </p>
      <hr className="Job-divider" />
      <p className="Job-language-container">
        {data.languages.map((lang) => (
          <span
            key={lang}
            className="Job-language-item"
            onClick={() => onLangClick(lang)}
          >
            {lang}
          </span>
        ))}
      </p>
    </div>
  )
}

export default Job
