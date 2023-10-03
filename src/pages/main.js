import * as S from './main.styles';
import Bar from './components/Bar/Bar';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/Centerblock/Centerblock';
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import { useEffect, useState } from 'react';
import { getTrackById, getTracks } from '../api';

export const Main = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])
  const [addTracksError, setAddTracksError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        getTracks().then((t) => 
        {setTracks(t)}
      );
      } catch (error) {
        setAddTracksError(error.message)
      }

    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [currentTrack, setCurrentTrack] = useState(null);
  const turnOnTrack = (trackId) => {
      getTrackById(trackId)
        .then(trackData => {
          setCurrentTrack(trackData);
          console.log(trackData);
        })
    }

  return (
      <S.MainDiv>
        <S.Wrapper>
          <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock tracks={tracks} 
                isLoading={isLoading} 
                currentTrack={currentTrack} 
                turnOnTrack={turnOnTrack} 
                addTracksError={addTracksError}/>
                {isLoading ? <SidebarSceleton />: <Sidebar />}
              </S.Main>
              {currentTrack ? <Bar isLoading={isLoading} tracks={tracks} currentTrack={currentTrack}/> 
              : null }
              <footer></footer>
            </S.Container>
          </S.Wrapper>
        </S.MainDiv>
  );
}
