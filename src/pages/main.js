import { useEffect, useState } from 'react';
import { getTracks } from '../api';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';
import PlaylistSceleton from './components/Playlist/PlaylistSceleton';
import Playlist from './components/Playlist/Playlist';

export const Main = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])
  const [addTracksError, setAddTracksError] = useState(null)

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
  const turnOnTrack = (trackId) => {
      dispatch(setTracks(trackId))
    }

  return (
    <>
      {isLoading ? (
        <PlaylistSceleton />
      ) : (
        <Playlist
          tracks={tracks}
          turnOnTrack={turnOnTrack}
          addTracksError={addTracksError}
        />
      )}
    </>
  );
};

