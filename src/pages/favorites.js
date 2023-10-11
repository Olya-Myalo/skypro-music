import * as S from './main.styles';
import Bar from './components/Bar/Bar';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import { useEffect, useState } from 'react';
import { getTracks } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';
import PlaylistSceleton from './components/Playlist/PlaylistSceleton';
import Filter from './components/Filter/Filter';
import InputSearch from './components/Search/Search';

export const Favorites = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])
  // const [addTracksError, setAddTracksError] = useState(null)
  const playlist = useSelector((state) => state.player.playlist);
  console.log(playlist)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        getTracks().then((t) => 
        {
          setTracks(t) 
          dispatch(setPlaylist(t))
        }
      );
      } catch (error) {
        console.log(error.message)
      }

    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const currentTrack = useSelector(state => state.player.track)
  // const turnOnTrack = (trackId) => {
  //     dispatch(setTrack(trackId))
  //   }

  return (
      <S.MainDiv>
        <S.Wrapper>
          <S.Container>
              <S.Main>
                <Nav />
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
                  {isLoading ? <PlaylistSceleton/> : <MyPlaуlist />}
                  </S.CenterblockContent>
              </S.MainCenterblock>
                {isLoading ? <SidebarSceleton />: <Sidebar />}
              </S.Main>
              {currentTrack ? <Bar isLoading={isLoading} tracks={tracks}/> 
              : null }
              <footer></footer>
            </S.Container>
          </S.Wrapper>
        </S.MainDiv>
  );
}
