import { useState } from 'react';
import { playlist } from '../ArrayTrack';
import * as S from './Filter.styles';

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.CenterblocFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton
        className="_btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("author");
        }}
      >
        исполнителю
      </S.FilterButton>
      {visible && selectedFilter === "author" && (
        <S.SearchLike>
          <S.SearchFilter>
            {playlist.map((track) => (
              <S.SearchFilterTitle key={track.id}>
                {track.author}
              </S.SearchFilterTitle>
            ))}
          </S.SearchFilter>
        </S.SearchLike>
      )}
      <S.FilterButton
        className="_btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("year");
        }}
      >
        году выпуска
      </S.FilterButton>
      {visible && selectedFilter === "year" && (
        <S.SearchLike02>
          <S.SearchFilter>
            {playlist.map((track) => (
              <S.SearchFilterTitle key={track.id}>
                {track.year}
              </S.SearchFilterTitle>
            ))}
          </S.SearchFilter>
        </S.SearchLike02>
      )}
      <S.FilterButton
        className="_btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("genre");
        }}
      >
        жанру
      </S.FilterButton>
      {visible && selectedFilter === "genre" && (
        <S.SearchLike03>
          <S.SearchFilter>
            {playlist.map((track) => (
              <S.SearchFilterTitle key={track.id}>
                {track.genre}
              </S.SearchFilterTitle>
            ))}
          </S.SearchFilter>
        </S.SearchLike03>
      )}
    </S.CenterblocFilter>
  );
};

export default Filter;