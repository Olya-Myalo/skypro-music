import * as S from './main.styles';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracks } from "../api";
import { setFavoritesTracks, setPlaylist } from "../store/slices/trackSlice";
import Nav from './components/Nav/Nav';
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import Sidebar from './components/Sidebar/Sidebar';
import Bar from './components/Bar/Bar';
import { Outlet } from 'react-router';
import { useGetFavoriteTracksQuery } from '../store/service/serviceFavorites';

export function Layout() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const { data } = useGetFavoriteTracksQuery();

  useEffect(() => {
    dispatch(setFavoritesTracks(data));

    const fetchData = async () => {
      try {
        const t = await getTracks();
        setTracks(t);
        dispatch(setPlaylist(t));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [data, dispatch]);

  const currentTrack = useSelector((state) => state.player.track);
  
    return (
        <S.MainDiv>
          <S.Wrapper>
            <S.Container>
                <S.Main>
                  <Nav />
                     <Outlet />
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
  