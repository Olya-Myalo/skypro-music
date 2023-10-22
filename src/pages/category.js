import { useParams } from 'react-router-dom'
import * as S from './main.styles.js';
import InputSearch from './components/Search/Search.js';
import { useGetCatalogSectionTracksQuery } from '../store/service/serviceTracks.js';
import TrackOne from './components/trackOne/TrackOne.js';
import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice.js';

export const Category = () => {
  const { id } = useParams()
  const { data, error } = useGetCatalogSectionTracksQuery(id)
  const dispatch = useDispatch()

  const turnOnTrack = (trackId) => {
      dispatch(setPlaylist(data))
      dispatch(setTrack(trackId))
    }

    return (
        <S.MainCenterblock>
          <InputSearch/>
            <S.CenterblockH2>Треки выбранной категории</S.CenterblockH2>
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
                          data?.items.map((track) => {
                            return <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />;
                          }) )}
                </S.CenterblockContent>
        </S.MainCenterblock>
    );
  }