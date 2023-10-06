import TrackOne from '../tracks';
import * as S from './Playlist.styled';

const Playlist = ( {tracks, turnOnTrack, addTracksError} ) => {
  
  return (
    <S.ContentPlaylist>
      <p>{addTracksError}</p>
        {tracks.map((track) => {
            return <TrackOne turnOnTrack={turnOnTrack} key={track.id} track={track} />;
        })}
    </S.ContentPlaylist>
  );
}

export default Playlist;