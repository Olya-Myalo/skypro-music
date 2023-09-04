import TrackOne from '../tracks';
import * as S from './Playlist.styled';

const Playlist = (props) => {
  return (
    <S.ContentPplaylist>
        {props.tracks.map(track=>{
            return <TrackOne key={track.id} track={track} />
        })}
</S.ContentPplaylist>
  );
}

export default Playlist;