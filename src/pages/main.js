import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';
import * as S from './main.styles';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import TrackOne from './components/trackOne/TrackOne';
import { useGetTracksQuery } from '../store/service/serviceTracks';
import { useState } from 'react';
import TrackList from './components/Tracklist';

export const Main = () => {
const { data, error } = useGetTracksQuery();
const dispatch = useDispatch();
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

  return (
    <S.MainCenterblock>
      <Search setSearchValue={setSearchValue}/>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filter tracks={data}/>
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
};

