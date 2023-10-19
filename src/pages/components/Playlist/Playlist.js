import Filter from '../Filter/Filter';
import InputSearch from '../Search/Search';
import TrackOne from '../tracks';
import * as S from './Playlist.styled';

const Playlist = ( {tracks, turnOnTrack, addTracksError} ) => {
  
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
}

export default Playlist;