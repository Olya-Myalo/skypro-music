import * as S from './main.styles';
import { useSelector } from "react-redux";
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import Bar from './components/Bar/Bar';
import { Outlet } from 'react-router';
import Sceleton from './components/Sceleton/Sceleton';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import { useGetTracksQuery } from '../store/service/serviceTracks';
// import { useEffect } from 'react';
// import { setFilters } from '../store/slices/trackSlice';

export function PageLayout() {
  const {data, isLoading} = useGetTracksQuery()
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setFilters(data))
  // }, [isLoading])

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
  