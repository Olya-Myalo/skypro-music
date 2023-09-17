import InputSearch from '../Search/Search';
import Filter from '../Filter/Filter';
import Playlist from '../Playlist/Playlist';
import PlaylistSceleton from '../Playlist/PlaylistSceleton';
import * as S from './Centerblock.styles';

const Centerblock = ({tracks, isLoading, currentTrack, turnOnTrack, addTracksError}) => {
  

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
        {isLoading ? <PlaylistSceleton/> : <Playlist tracks={tracks} currentTrack={currentTrack} 
        turnOnTrack={turnOnTrack} addTracksError={addTracksError}/>}
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default Centerblock;