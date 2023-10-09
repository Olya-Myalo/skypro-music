import { useSelector } from 'react-redux';
import * as S from './Playlist/Playlist.styled';
// import { setTrack } from '../../store/slices/trackSlice';

const formattedDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const formattedDuration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedDuration;
  }; 
  
const TrackOne = (props) => {
    const playingTrack = useSelector(state => state.player.track)

      const isCurrentlyPlaying = props.track.id === playingTrack;
      console.log(isCurrentlyPlaying)
    return (
      <S.PlaylistItem>
          <S.PlaylistTrack>
          <S.TrackTitle>
              <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
              {isCurrentlyPlaying  && (
              <S.BlinkingDot></S.BlinkingDot>
            )}
              </S.TrackTitleImage>
              <S.TrackTitleText>
              <S.TrackTitleLink onClick={() => props.turnOnTrack(props.track.id)} >{props.track.name}<S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
              </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
              <S.TrackAuthorLink >{props.track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
              <S.TrackAlbumLink >{props.track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
              <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
              <S.TrackTimeText>{formattedDuration(props.track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime>
          </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  }

  export default TrackOne;