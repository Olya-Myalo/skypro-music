import InputSearch from '../Search/Search';
import Filter from '../Filter/Filter';
import Playlist from '../Playlist/Playlist';
import PlaylistSceleton from '../Playlist/PlaylistSceleton';
import { useState, useEffect } from "react";
import * as S from './Centerblock.styles';

const Centerblock = ({tracks, setTracks}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTracks(tracks); 
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
        {isLoading ? <PlaylistSceleton/> : <Playlist tracks={tracks} />}
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default Centerblock;