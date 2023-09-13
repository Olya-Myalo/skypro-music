import * as S from './main.styles';
import Bar from './components/Bar/Bar';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/Centerblock/Centerblock';
import { useState, useEffect } from "react";
import SidebarSceleton from './components/Sidebar/SidebarSceleton';

export const Main = ({tracks, setTracks}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <S.Body>
        <S.Wrapper>
          <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock tracks={tracks} setTracks={setTracks} />
                 {isLoading ? <SidebarSceleton />: <Sidebar />}
              </S.Main>
           
                <Bar />
              <footer></footer>
            </S.Container>
          </S.Wrapper>
        </S.Body>
  );
}
