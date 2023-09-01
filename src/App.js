import * as S from './App.styles';
import Bar from './components/Bar';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import CenterBlock from './components/Centerblock';
import { useState, useEffect } from "react";
import SidebarSceleton from './components/SidebarSceleton';

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
      <body>
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
        </body>
      </S.App>
  );
}

export default App;
