import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';
import { useState, useEffect } from "react";
import { getTracks} from "./api";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const registeredUser = localStorage.getItem('user')
    if (registeredUser) {
      setUser(JSON.parse(registeredUser))
    }
  }, [])

  const handleLogin = () => {
    const newUser = { login: 'taradam' }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const [tracks, setTracks] = useState([null])

  useEffect(() => {
    getTracks().then((tracks) => 
    setTracks(tracks.tracks)
    );
  }, []); 
  return (
    <S.App>
        <GlobalStyle/>
          <AppRoutes user={user} tracks={tracks} setTracks={setTracks} handleLogin={handleLogin} 
          handleLogout={handleLogout}/>
    </S.App>
  );
}

export default App;
