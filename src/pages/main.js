import { useEffect, useState } from 'react';
import { getTracks } from '../api';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';
import * as S from './main.styles';
import InputSearch from './components/Search/Search';
import Filter from './components/Filter/Filter';
import TrackOne from './components/trackOne/TrackOne';

export const Main = () => {
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState([])
  const [addTracksError, setAddTracksError] = useState(null)

  useEffect(() => {
      try {
        getTracks().then((t) => 
        {
          setTracks(t) 
          dispatch(setPlaylist(t))
        }
      );
      } catch (error) {
        setAddTracksError(error.message)
      }
  }, []);
  
  const turnOnTrack = (trackId) => {
      dispatch(setTracks(trackId))
    }

  return (
    <S.MainCenterblock>
      <InputSearch/>
        <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filter tracks={tracks}/>
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
                    {tracks.map((track) => {
                      return <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />;
                    })}
                </S.ContentPlaylist>
            </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

