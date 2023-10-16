import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import { useGetFavoriteTracksQuery } from '../store/service/serviceFavorites';
import { useDispatch} from 'react-redux';
import { setPlaylist } from '../store/slices/trackSlice';

export const Favorites = () => {
  const dispatch = useDispatch()
  const { data } = useGetFavoriteTracksQuery();

  dispatch(setPlaylist(data))

  return (
        <>
          <MyPlaуlist data={data}/>
        </>
  );
}
