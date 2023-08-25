import './Centerblock.css';
import InputSearch from './Search';
import Filter from './Filter';
import Playlist from './Playlist';
import PlaylistSceleton from './PlaylistSceleton';
import { playlist } from './ArrayTrack';
import { useState, useEffect } from "react";

const Centerblock = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

//   state = {
//     tracks:playlist
// }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTracks(playlist); 
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main__centerblock centerblock">
      <InputSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        {isLoading && <PlaylistSceleton />}
        {!isLoading && <Playlist tracks={tracks} />}
      </div>
    </div>
  );
}

export default Centerblock;