import { useEffect, useState } from 'react';
// import { getTracks } from '../api';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';
import PlaylistSceleton from './components/Playlist/PlaylistSceleton';
import Playlist from './components/Playlist/Playlist';
import { useGetMainPlaylistQuery } from '../store/service/serviceFavorites';

export const Main = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const setTracks = useState([]);
  const [addTracksError, setAddTracksError] = useState(null);
  const { data } = useGetMainPlaylistQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) { 
          const result = await data;
          setTracks(result);
        }
      } catch (error) {
        setAddTracksError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [data]); 

  const turnOnTrack = (trackId) => {
    dispatch(setPlaylist(trackId));
  };

  return (
    <>
      {isLoading ? (
        <PlaylistSceleton />
      ) : (
        <Playlist
          data={data}
          turnOnTrack={turnOnTrack}
          addTracksError={addTracksError}
        />
      )}
    </>
  );
};

