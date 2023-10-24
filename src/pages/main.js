import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';
import * as S from './main.styles';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import TrackOne from './components/trackOne/TrackOne';
import { useGetTracksQuery } from '../store/service/serviceTracks';
import { useEffect, useState } from 'react';
import TrackList from './components/Tracklist';
import { compare, createArrayOfAuthors } from './components/utils'

export const Main = () => {
const { data, error, isLoading } = useGetTracksQuery();
const dispatch = useDispatch();
const [searchValue, setSearchValue] = useState('');
const [filteredTracks, setTracks] = useState([])
  const [defaultPlaylist, setDefaultPlaylist] = useState([])
  const [activeSortYear, setAciveSortYear] = useState('По умолчанию')
  const [activeFilterGenre, setAciveFilterGenre] = useState([])
  const [isActiveFiltersGenre, setIsActiveFiltersGenre] = useState([
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ])
  const [filterAuthor, setFilterAuthor] = useState([])

  useEffect(() => {
    if (!isLoading && !error) {
      setTracks(data)
      setDefaultPlaylist(data)
      setFilterAuthor(createArrayOfAuthors(data))
      dispatch(setPlaylist(data))
    }
  }, [data, isLoading, error])

  useEffect(() => {
    let newPlaylist = defaultPlaylist.slice(0)

    if (activeSortYear === 'Сначала новые') {
      newPlaylist = newPlaylist?.sort(compare).slice(0)
    } else if (activeSortYear === 'Сначала старые') {
      newPlaylist = newPlaylist?.sort(compare).reverse().slice(0)
    }

    if (activeFilterGenre.length !== 0) {
      let resultFilter = []
      activeFilterGenre.forEach((genre) => resultFilter.push(...genre.items))
      resultFilter = [...new Set(resultFilter)]
      newPlaylist = newPlaylist.filter((music) =>
        resultFilter.find(({ id }) => music.id === id),
      )
    }

    const activeFilterAuthorList = filterAuthor.filter((item) => item.isActive)
    if (activeFilterAuthorList.length !== 0) {
      newPlaylist = newPlaylist.filter((music) =>
        activeFilterAuthorList.find(({ author }) => music.author === author),
      )
    }

    setTracks(newPlaylist)
    dispatch(setPlaylist(newPlaylist))
  }, [activeSortYear, activeFilterGenre, filterAuthor])

const turnOnTrack = (trackId) => {
  dispatch(setPlaylist(data));
  dispatch(setTrack(trackId));
};

const searchTrack = (searchValue, list) =>
  list.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    if (searchValue) {
      const filtered = searchTrack(searchValue, data);
      setTracks(filtered);
    } else {
      setTracks([]);
    }
  }, [searchValue, data]);

  return (
    <S.MainCenterblock>
      <Search setSearchValue={setSearchValue}/>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filter
          activeSortYear={activeSortYear}
          setAciveSortYear={setAciveSortYear}
          activeFilterGenre={activeFilterGenre}
          setAciveFilterGenre={setAciveFilterGenre}
          isActiveFiltersGenre={isActiveFiltersGenre}
          setIsActiveFiltersGenre={setIsActiveFiltersGenre}
          filterAuthor={filterAuthor}
          setFilterAuthor={setFilterAuthor}/>
            <S.CenterblockContent>
              <S.ContentTtitle>
                  <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
                  <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
                  <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
                  <S.PlaylistTitleCol04>
                    <S.PlaylistTitleSvg alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                  </S.PlaylistTitleCol04>
              </S.ContentTtitle>
                <S.ContentPlaylist>
                {error ? (
                    <h2> Не удалось загрузить мои треки</h2>
                  ) : (
                    <>
                      {searchValue && filteredTracks.length === 0 ? (
                        <h2>Ничего не найдено</h2>
                      ) : (
                        <TrackList data={filteredTracks.length === 0 ? (searchValue ? [] : data) : filteredTracks} turnOnTrack={turnOnTrack} /> 
                      )}
                    </>
                  )}
                  {filteredTracks.map((track) => ( 
                    <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />
                  ))}
                </S.ContentPlaylist>
            </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

