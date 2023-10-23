import { useParams } from 'react-router-dom'
import * as S from './main.styles.js';
import Search from './components/Search/Search.js';
import { useGetCatalogSectionTracksQuery } from '../store/service/serviceTracks.js';
import TrackOne from './components/trackOne/TrackOne.js';
import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice.js';
import { useState } from 'react';
import TrackList from './components/Tracklist.js';
import Sceleton from './components/Sceleton/Sceleton.js';

export const Category = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetCatalogSectionTracksQuery(id)
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');

  if(isLoading) return <Sceleton />

  const turnOnTrack = (trackId) => {
    dispatch(setPlaylist(data.items));
    dispatch(setTrack(trackId));
  };
  
  const searchTrack = (searchValue, list) =>
    list.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );
  
  const filteredTracks = searchValue ? searchTrack(searchValue, data?.items) : data?.items;


    return (
        <S.MainCenterblock>
          <Search setSearchValue={setSearchValue}/>
            <S.CenterblockH2>{data?.name}</S.CenterblockH2>
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
                      {error ? ( <h2>Не удалось загрузить треки</h2>
                        ) :  (
                          <>
                            {searchValue && filteredTracks.length === 0 ? (
                              <h2>Ничего не найдено</h2>
                            ) : (
                              <TrackList data={filteredTracks} turnOnTrack={turnOnTrack} /> 
                            )}
                          </>
                        )}
                        {data?.items.map((track) => ( 
                          <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />
                        ))}
                </S.CenterblockContent>
        </S.MainCenterblock>
    );
  }