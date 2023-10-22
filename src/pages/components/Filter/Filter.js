import { useState } from 'react';
import * as S from './Filter.styles';

const Filter = ({tracks}) => {
  const [visible, setVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleVisibility = () => setVisible(!visible);
 	
  const uniqueArrayGenre = tracks?.filter(
    (obj, index, self) =>
      index === self.findIndex((el) => el.genre === obj.genre)
  );

  const uniqueArrayAuthor = tracks?.filter(
    (obj, index, self) =>
      index === self.findIndex((el) => el.genre === obj.genre)
  );

// Сортировка по методу sort
  return (
    <S.CenterblocFilter>
      <S.Filter2>
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
            {uniqueArrayAuthor?.map((track) => (
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
          setSelectedFilter("genre");
        }}
      >
        жанру
      </S.FilterButton>
      {visible && selectedFilter === "genre" && (
        <S.SearchLike02>
          <S.SearchFilter>
            {uniqueArrayGenre?.map((track) => (
              <S.SearchFilterTitle key={track.id}>
                {track.genre}
              </S.SearchFilterTitle>
            ))}
          </S.SearchFilter>
        </S.SearchLike02>
      )}
      {/* <S.FilterButton
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
            {tracks?.map((track) => (
              <S.SearchFilterTitle key={track.id}>
                {track.release_date}
              </S.SearchFilterTitle>
            ))}
          </S.SearchFilter>
        </S.SearchLike02> */}
      {/* )} */}
      </S.Filter2>
      <S.Sorting>
      <S.SortingTitle>Сортировка:</S.SortingTitle>
      <S.FilterButton
        className="_btn-text"
        onClick={() => {
          toggleVisibility();
          setSelectedFilter("year");
        }}
      >
        по умолчанию
      </S.FilterButton>
      {visible && selectedFilter === "year" && (
        <S.SearchLike03>
          <S.SearchFilter>
            {tracks?.map((track) => (
              <S.SearchFilterTitle key={track.id}>
                {track.release_date}
              </S.SearchFilterTitle>
            ))}
          </S.SearchFilter>
        </S.SearchLike03>
      )}
      </S.Sorting>
    </S.CenterblocFilter>
  );
};

export default Filter;