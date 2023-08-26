import './Filter.css';
import { useState } from 'react';
import { playlist } from './ArrayTrack';

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("author");
        }}
      >
        исполнителю
      </div>
      {visible && selectedFilter === "author" && (
        <div className="search_like">
          <ul className="search_filter">
            {playlist.map((track) => (
              <li className="search_filter_title" key={track.id}>
                {track.author}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="filter__button button-year _btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("year");
        }}
      >
        году выпуска
      </div>
      {visible && selectedFilter === "year" && (
        <div className="search_like_2">
          <ul className="search_filter">
            {playlist.map((track) => (
              <li className="search_filter_title" key={track.id}>
                {track.year}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="filter__button button-genre _btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("genre");
        }}
      >
        жанру
      </div>
      {visible && selectedFilter === "genre" && (
        <div className="search_like_3">
          <ul className="search_filter">
            {playlist.map((track) => (
              <li className="search_filter_title" key={track.id}>
                {track.genre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;