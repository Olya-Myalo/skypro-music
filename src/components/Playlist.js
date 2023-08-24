import './Centerblock.css';
import TrackOne from './tracks';

const Playlist = (props) => {
  return (
    <div className="content__playlist playlist">
        {props.tracks.map(track=>{
            return <TrackOne key={track.id} track={track} />
        })}
</div>
  );
}

export default Playlist;