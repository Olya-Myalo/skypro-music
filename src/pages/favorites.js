import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import { useEffect, useState } from 'react';
import { getTracks } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';
import PlaylistSceleton from './components/Playlist/PlaylistSceleton';

export const Favorites = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])  // const [addTracksError, setAddTracksError] = useState(null)
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
        console.log(error.message)
      }

    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <>
                  {isLoading ? <PlaylistSceleton/> : <MyPlaуlist tracks={tracks}/>}
        </>
  );
}
