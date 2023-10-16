import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import { useGetFavoriteTracksQuery } from '../store/service/serviceFavorites';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';

export const Favorites = () => {
  const dispatch = useDispatch()
  const { data , isLoading } = useGetFavoriteTracksQuery();

  if (isLoading) return <h1>В этом плейлисте пока нет треков</h1>;

  dispatch(setPlaylist(data))

  return (
        <>
          <MyPlaуlist data={data}/>
        </>
  );
}
