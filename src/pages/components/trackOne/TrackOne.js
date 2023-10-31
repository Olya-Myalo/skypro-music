import {useSelector } from 'react-redux';
import * as S from './track.styled';
// import { setTrack } from '../../../store/slices/trackSlice';
import {useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from '../../../store/service/serviceTracks';
import { useEffect, useState } from 'react';

const formattedDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const formattedDuration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedDuration;
  }; 
  
const TrackOne = (props) => {
  const playing = useSelector((state) => state.player.playing)
  const currentTrack = useSelector((state) => state.player.track)
  // const dispatch = useDispatch()
  const authUser = JSON.parse(localStorage.getItem('user'))
  const [likeTrack] = useAddFavoriteTrackMutation()
  const [dislikeTrack] = useDeleteFavoriteTrackMutation()
  const isLike = Boolean( props.track.stared_user ? 
    props.track.stared_user.find(({ id }) => id === authUser.id) : [],
  )
  const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
      setIsLiked(isLike)
    }, [isLike])
    // const turnOnTrack = (id) => {
    //     dispatch(setTrack(id)) 
    // }

    const handleLike =  (id) => {
      likeTrack({ id });
      setIsLiked(true);
    }

    const handleDislike =  (id) => {
        dislikeTrack(id);
        setIsLiked(false);
    }

    const toggleLikeDislike = () => {
      isLiked ? handleDislike(props.track.id) : handleLike(props.track.id)
    }

    return (
      <S.PlaylistItem>
          <S.PlaylistTrack>
          <S.TrackTitle>
              <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
              <use xlinkHref="../img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
              {props.track.id === currentTrack?.id && playing && (<S.StopAnimation></S.StopAnimation>)}
              {props.track.id === currentTrack?.id && !playing && (<S.Animation></S.Animation>)}
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
              </S.TrackTimeSvg>
              <S.TrackLike alt="like" onClick={toggleLikeDislike}>
            {isLiked ? (
              <use
                xlinkHref="/img/icon/sprite.svg#icon-like"
                fill="#ad61ff"
              ></use>) : ( <use xlinkHref="/img/icon/sprite.svg#icon-like"></use> )}
          </S.TrackLike>
              <S.TrackTimeText>{formattedDuration(props.track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime>
          </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  }

  export default TrackOne;