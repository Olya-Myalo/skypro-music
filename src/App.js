import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';
import { useState, useEffect, useReducer } from "react";
import { getTrackById, getTracks} from "./api";
import { useBeforeRender } from './utils';
import { UserContext, UserDispatchContext, reducer } from './contex';


function App() {
  const [user, setUser] = useState(null);

  useBeforeRender(() => {
    const registeredUser = localStorage.getItem('user');
    if (registeredUser) {
      setUser(JSON.parse(registeredUser));
    }
  }, []);

  const handleLogin = () => {
    const newUser = { login: 'taradam' };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

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
    const [state, dispatch] = useReducer(reducer, {userName:''});
 
  return (
    <UserContext.Provider value={state}>
    <UserDispatchContext.Provider value={dispatch}>
    <S.App>
        <GlobalStyle/>
          <AppRoutes user={user} tracks={tracks} handleLogin={handleLogin} 
          handleLogout={handleLogout} isLoading={isLoading}
          currentTrack={currentTrack} turnOnTrack={turnOnTrack} addTracksError={addTracksError}
        />
    </S.App>
    </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
