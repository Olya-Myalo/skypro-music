import * as S from './main.styles';
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getTracks } from "../api";
// import { setFavoritesTracks, setPlaylist } from "../store/slices/trackSlice";
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import Bar from './components/Bar/Bar';
import { Outlet } from 'react-router';
import Sceleton from './components/Sceleton/Sceleton';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import { useGetTracksQuery } from '../store/service/serviceTracks';

export function PageLayout() {
  // const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);
  // const [tracks, setTracks] = useState([]);
  const {data, isLoading} = useGetTracksQuery()

  // useEffect(() => {
    // const timer = setTimeout(() => {
    // dispatch(setFavoritesTracks(data));

    // const fetchData = async () => {
    //   try {
    //     const t = await getTracks();
    //     setTracks(t);
    //     dispatch(setPlaylist(t));
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    // fetchData();
  // }, 3000);
  // return () => clearTimeout(timer);
  // }, [data, dispatch]);

  const currentTrack = useSelector((state) => state.player.track);
  
    return (
        <S.MainDiv>
          <S.Wrapper>
            <S.Container>
                <S.Main>
                  <Nav />
                    {isLoading ? <Sceleton />: <Outlet />}
                    {isLoading ? <SidebarSceleton />: <Sidebar />}
                 </S.Main>
                    {currentTrack ? <Bar tracks={data}/> : null }
                <footer></footer>
              </S.Container>
            </S.Wrapper>
          </S.MainDiv>
    );
  }
  