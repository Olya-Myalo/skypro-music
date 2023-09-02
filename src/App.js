import * as S from './App.styles';
import Bar from './components/Bar/Bar';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/Centerblock/Centerblock';
import { useState, useEffect } from "react";
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import { GlobalStyle } from './createGlobalStyle';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.App>
      <S.Body>
      <GlobalStyle/>
        <S.Wrapper>
          <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock />
                 {isLoading ? <SidebarSceleton />: <Sidebar />}
              </S.Main>
                <Bar />
              <footer className="footer"></footer>
            </S.Container>
          </S.Wrapper>
        </S.Body>
      </S.App>
  );
}

export default App;
