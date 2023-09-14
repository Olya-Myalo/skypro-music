import TrackOne from '../tracks';
import * as S from './Playlist.styled';

const Playlist = ( {tracks} ) => {
  console.log(tracks)
  return (
    <S.ContentPlaylist>
        {tracks.map((track) => {
            return <TrackOne key={track.id} track={track} />;
        })}
    </S.ContentPlaylist>
  );
}

export default Playlist;