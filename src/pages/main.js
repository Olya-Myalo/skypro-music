import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';
import * as S from './main.styles';
import InputSearch from './components/Search/Search';
import Filter from './components/Filter/Filter';
import TrackOne from './components/trackOne/TrackOne';
import { useGetTracksQuery } from '../store/service/serviceTracks';

export const Main = () => {
  const { data, error } = useGetTracksQuery()
  const dispatch = useDispatch()

  const turnOnTrack = (trackId) => {
    console.log(trackId)
    console.log(data)
      dispatch(setPlaylist(data))
      dispatch(setTrack(trackId))
    }

  return (
    <S.MainCenterblock>
      <InputSearch/>
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
                  <p>{error}</p>
                    {data.map((track) => {
                      return <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />;
                    })}
                </S.ContentPlaylist>
            </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

