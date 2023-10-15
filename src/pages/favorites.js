import MyPlaуlist from './components/Playlist/MyFavoritesTracks';
import { useGetFavoriteTracksQuery } from '../store/service/serviceFavorites';

export const Favorites = () => {
  const { data = [], isLoading } = useGetFavoriteTracksQuery();

  if (isLoading) return <h1>В этом плейлисте пока нет треков</h1>;

 
  return (
        <>
          <MyPlaуlist data={data}/>
        </>
  );
}
