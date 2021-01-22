import { ReactComponent as IconRemove } from './assets/icon-remove.svg'
import './Filter.css'

function Filter({ filter, onItemRemoveBtnClick, onClearBtnClick }) {
  return (
    <div className="Filter-card">
      <ul className="Filter-container">
        {filter.map((lang) => (
          <li key={lang} className="Filter-item">
            <span className="-label">{lang}</span>
            <button className="-btn" onClick={() => onItemRemoveBtnClick(lang)}>
              <IconRemove />
            </button>
          </li>
        ))}
      </ul>
      <button className="Filter-clear-btn" onClick={onClearBtnClick}>
        Clear
      </button>
    </div>
  )
}

export default Filter
