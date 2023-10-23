import { useGetFavoriteTracksQuery } from '../store/service/serviceTracks';
import * as S from './main.styles';
import Search from './components/Search/Search';
import TrackOne from './components/trackOne/TrackOne';
import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';
import { useState } from 'react';
import TrackList from './components/Tracklist';
import Sceleton from './components/Sceleton/Sceleton';

export const Favorites = ({addTracksError}) => {
  const { data, isLoading } = useGetFavoriteTracksQuery();
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');

  const turnOnTrack = (trackId) => {
    dispatch(setPlaylist(data));
    dispatch(setTrack(trackId));
  };
  
  const searchTrack = (searchValue, list) =>
    list.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );
  
  const filteredTracks = searchValue ? searchTrack(searchValue, data) : data;

  if(isLoading) return <Sceleton />

  return (
    <S.MainCenterblock>
      <Search setSearchValue={setSearchValue}/>
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
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
                    <p>{addTracksError}</p>
                      {!data ? (
                          <h1>В этом плейлисте пока нет треков</h1>
                          ) : (
                            <>
                              {searchValue && filteredTracks.length === 0 ? (
                                <h2>Ничего не найдено</h2>
                              ) : (
                                <TrackList data={filteredTracks} turnOnTrack={turnOnTrack} /> 
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
}
