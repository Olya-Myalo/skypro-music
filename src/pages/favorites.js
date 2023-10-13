import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPlaylist, setTrack } from '../store/slices/trackSlice';
import { useGetFavoritesTracksQuery } from '../store/slices/serviceFavorites';

export const Favorites = () => {
  const dispatch = useDispatch();
  const [addTracksError, setAddTracksError] = useState(null);
  const { data = [], isLoading } = useGetFavoritesTracksQuery();

  if (isLoading) return <h1>В этом плейлисте пока нет треков</h1>;

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        dispatch(setPlaylist(data));
      } catch (error) {
        setAddTracksError(error.message);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const turnOnTrack = (trackId) => {
    dispatch(setTrack(trackId));
  };


  return (
        <>
          <MyPlaуlist data={data} turnOnTrack={turnOnTrack} addTracksError={addTracksError}/>
        </>
  );
}
