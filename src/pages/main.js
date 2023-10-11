import * as S from './main.styles';
import Bar from './components/Bar/Bar';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/Centerblock/Centerblock';
import SidebarSceleton from './components/Sidebar/SidebarSceleton';
import { useEffect, useState } from 'react';
import { getTracks } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])
  const [addTracksError, setAddTracksError] = useState(null)
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
        setAddTracksError(error.message)
      }

    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const currentTrack = useSelector(state => state.player.track)
  const turnOnTrack = (trackId) => {
      dispatch(setTrack(trackId))
    }

  return (
      <S.MainDiv>
        <S.Wrapper>
          <S.Container>
              <S.Main>
                <Nav />
                <CenterBlock tracks={tracks} 
                isLoading={isLoading} 
                turnOnTrack={turnOnTrack} 
                addTracksError={addTracksError}/>
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
