import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import { useEffect, useState } from 'react';
import { getFavoritesTracks } from '../api';
import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';
import PlaylistSceleton from './components/Playlist/PlaylistSceleton';

export const Favorites = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])  
  const [addTracksError, setAddTracksError] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        getFavoritesTracks().then((t) => 
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

  const turnOnTrack = (trackId) => {
    dispatch(setTrack(trackId))
  }

  return (
        <>
          {isLoading ? <PlaylistSceleton/> : <MyPlaуlist tracks={tracks} 
        turnOnTrack={turnOnTrack} addTracksError={addTracksError}/>}
        </>
  );
}
