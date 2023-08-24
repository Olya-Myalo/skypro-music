import './Filter.css';
import { useState } from 'react';

const Filter = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text" onClick={toggleVisibility}>исполнителю
        {visible && ( <ul>
            <li>Nero</li>
            <li>Dynoro, Outwork, Mr. Gee</li>
            <li>Ali Bakgor</li>
            <li>Стоункат, Psychopath</li>
            <li>Blue Foundation, Zeds Dead</li>
          </ul> )}
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  );
}

export default Filter;