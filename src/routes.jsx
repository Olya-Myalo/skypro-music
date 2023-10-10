import { Routes, Route, Outlet } from "react-router-dom";
// import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category";
import { Main } from "./pages/main";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./protected-route";
import AuthPage from "./pages/Auth/AuthPage";
import { useUser } from "./contex";
import Bar from "./pages/components/Bar/Bar";
import SidebarSceleton from "./pages/components/Sidebar/SidebarSceleton";
import Sidebar from "./pages/components/Sidebar/Sidebar";
import PlaylistSceleton from "./pages/components/Playlist/PlaylistSceleton";
import Filter from "./pages/components/Filter/Filter";
import InputSearch from "./pages/components/Search/Search";
import Nav from "./pages/components/Nav/Nav";
import * as S from './pages/main.styles';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTracks } from "./api";
import { setPlaylist } from "./store/slices/trackSlice";
import MyPlaуlist from "./pages/components/Playlist/MyFavoritesTracks";

function Dashboard() {
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
          <Outlet />
        </S.MainDiv>
  );
}

const AppRoutes = () => {
    const name = useUser()
  return (
    <Routes>
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(name.userName)} />}>
        <Route path="/" element={<Main/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<Dashboard />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;