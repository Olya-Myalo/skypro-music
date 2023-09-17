import * as S from './main.styles';
import Bar from './components/Bar/Bar';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/Centerblock/Centerblock';
import SidebarSceleton from './components/Sidebar/SidebarSceleton';

export const Main = ({tracks, isLoading, currentTrack, turnOnTrack, addTracksError}) => {

  return (
      <S.MainDiv>
        <S.Wrapper>
          <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock tracks={tracks} isLoading={isLoading} currentTrack={currentTrack} 
                turnOnTrack={turnOnTrack} addTracksError={addTracksError}/>
                 {isLoading ? <SidebarSceleton />: <Sidebar />}
              </S.Main>
           
              {currentTrack ? <Bar isLoading={isLoading} tracks={tracks} currentTrack={currentTrack}/> : null }
              <footer></footer>
            </S.Container>
          </S.Wrapper>
        </S.MainDiv>
  );
}
