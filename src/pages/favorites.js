import { useGetFavoriteTracksQuery } from '../store/service/serviceTracks';
import * as S from './main.styles';
// import { useSelector } from 'react-redux';
import InputSearch from './components/Search/Search';
import TrackOne from './components/trackOne/TrackOne';
import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';

export const Favorites = ({addTracksError}) => {
  const { data, isLoading } = useGetFavoriteTracksQuery();
  const dispatch = useDispatch()

  const turnOnTrack = (trackId) => {
      dispatch(setPlaylist(data))
      dispatch(setTrack(trackId))
    }

  if(isLoading) return
  // const dataFavoritesTracks = useSelector((state) => state.player.favoritesTracks);

  return (
    <S.MainCenterblock>
      <InputSearch/>
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
                          data.map((track) => {
                            return <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />;
                          })
                        )}
                </S.ContentPlaylist>
          </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
