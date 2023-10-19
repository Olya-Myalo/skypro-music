import { useParams } from 'react-router-dom'
import { CategoryPlaylist } from './components/Category-playlist/index.js'
import * as S from './components/Playlist/Playlist.styled.js';
import InputSearch from './components/Search/Search.js';

export const Category = () => {
  const params = useParams()
  const list = CategoryPlaylist.find((list) => list.id === Number(params.id))
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
                    <S.ContentPlaylist>
                        <div>
                          {list.name}
                        </div>
                    </S.ContentPlaylist>
                </S.CenterblockContent>
        </S.MainCenterblock>
    );
  }