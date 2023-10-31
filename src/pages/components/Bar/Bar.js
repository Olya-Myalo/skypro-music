import * as S from './Bar.styles';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying, setPlaylist, setShufflePlaylist, setTrack } from "../../../store/slices/trackSlice";
import { shufflePlaylistSelector } from "../../../store/selectors/trackSelector";
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from '../../../store/service/serviceTracks';

const Bar = () => {
  // const [isPlaying, setIsPlaying] = useState(true);
  const isPlaying = useSelector(state => state.player.playing)
  const audioRef = useRef(null);
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(1);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentTrack = useSelector(state => state.player.track)
  const [isShuffle, setIsShuffle] = useState(false)
  const playlist = useSelector((state) => state.player.playlist);
  const dispatch = useDispatch()
  const audioElem = useRef(null)
  const shufflePlaylist = useSelector(shufflePlaylistSelector)
  const authUser = JSON.parse(localStorage.getItem('user'))
  const isLike = Boolean( currentTrack.stared_user ? 
    currentTrack.stared_user.find(({ id }) => id === authUser.id) : [],
  )
  const [isLiked, setIsLiked] = useState(false)
  const [likeTrack] = useAddFavoriteTrackMutation()
  const [dislikeTrack] = useDeleteFavoriteTrackMutation()

    useEffect(() => {
      setIsLiked(isLike)
    }, [isLike, currentTrack])

  const handleStart = () => {
    audioRef.current.play();
    dispatch(setPlaying(true));
  };
  
  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setPlaying(false));
  };
  
  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    if (isPlaying) handleStart()
    else handleStop()
  }, [currentTrack.trackFile])
  
  const toggleLoop = () => {
    setLoop(!loop);
    audioRef.current.loop = !loop;
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const progressBarRef = useRef();
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const onLoadedData = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const endTrack = () => {
    if (!loop) {
      handleNext()
    }
  } 

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  const handleNext = () => {
    const trackList = isShuffle ? [...shufflePlaylist] : [...playlist]
    let index = trackList.findIndex((item) => item.id === currentTrack.id)
    if (+index === trackList.length - 1) return
    index = +index + 1
    dispatch(setTrack(trackList[index].id))
  }

  const handlePrev = () => {
    if (audioElem.current?.currentTime > 5) {
      audioElem.current.currentTime = 0
      return
    }
    const trackList = isShuffle ? [...shufflePlaylist] : [...playlist]
    let index = trackList.findIndex((item) => item.id === currentTrack.id)
    if (+index === 0) return
    index = +index - 1

    dispatch(setTrack(trackList[index].id))
  }

  const handleShufflePlaylist = () => {
    setIsShuffle(true); 
    const currentPlaylist = [...playlist];
    for (let i = currentPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentPlaylist[i], currentPlaylist[j]] = [currentPlaylist[j], currentPlaylist[i]];
    }
    dispatch(setShufflePlaylist(currentPlaylist)); 
  };

  const stopShufflePlaylist = () => {
    setIsShuffle(false); 
    dispatch(setShufflePlaylist([])); 
    dispatch(setPlaylist([...playlist]));
  };

  const toggleShuffle = isShuffle ? stopShufflePlaylist : handleShufflePlaylist

  const handleLike =  (id) => {
    likeTrack({ id });
    setIsLiked(true);
  }

  const handleDislike =  (id) => {
      dislikeTrack(id);
      setIsLiked(false);
  }

  const toggleLike = () => {
    isLiked ? handleDislike(currentTrack.id) : handleLike(currentTrack.id)
  }

  return (
    <S.BarBasic>
    <S.BarContent>
      <S.BarTime>
      <span>{formatTime(timeProgress)}</span>
      <span>/</span>
      <span>{formatTime(currentTrack.duration_in_seconds)}</span>
      </S.BarTime>
      <S.BarPlayerProgress onLoadedData={onLoadedData}>
      <S.StyledProgressInput 
      type="range"
      min={0}
      max={duration}
      value={timeProgress}
      step={0.01}
      $color="#B672FF"
      ref={progressBarRef}
      onChange={handleProgressChange}
    />
      </S.BarPlayerProgress>
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.PlayerBtnPrev onClick={handlePrev}>
              <S.PlayerBtnPrevSvg alt="prev" >
                <use xlinkHref="../img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay onClick={togglePlay}>
              <S.PlayerBtnPlaySvg alt="play">
              {isPlaying?  <use xlinkHref="../img/icon/sprite.svg#icon-pause" /> : <use xlinkHref="../img/icon/sprite.svg#icon-play"></use>}
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext onClick={handleNext}>
              <S.PlayerBtnNextSvg alt="next" >
                <use xlinkHref="../img/icon/sprite.svg#icon-next"></use>
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat onClick={toggleLoop} className="_btn-icon">
              <S.PlayerBtnRepeatSvg alt="repeat">
              { loop ? <use xlinkHref="../img/icon/sprite.svg#icon-tworepeat"></use>
              : <use xlinkHref="../img/icon/sprite.svg#icon-repeat"></use>}
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="_btn-icon">
              <S.PlayerBtnShuffleSvg alt="shuffle" className={isShuffle ? 'active' : ''}
          onClick={toggleShuffle}>
               { isShuffle ? <use xlinkHref="../img/icon/sprite.svg#icon-isshuffle"></use> : <use xlinkHref="../img/icon/sprite.svg#icon-shuffle"></use>} 
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>
          <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <audio ref={audioRef} 
                  loop={loop} 
                  onLoadedData={onLoadedData} 
                  onTimeUpdate={() => setTimeProgress(audioRef.current.currentTime)} 
                  src={currentTrack.track_file} 
                  autoPlay 
                  style={{ volume: volume }}
                  onEnded={endTrack} />
                      <S.TrackPlayImage>
                          <S.TrackPlaySvg alt="music">
                            <use xlinkHref="../img/icon/sprite.svg#icon-note"></use>
                          </S.TrackPlaySvg>
                      </S.TrackPlayImage>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://">{currentTrack.name}</S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                          <S.TrackPlayAlbumLink href="http://">{currentTrack.author}</S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                    </S.TrackPlayContain>
                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike className="_btn-icon" onClick={() => toggleLike(currentTrack.id)}>
                    <S.TrackPlayLikeSvg alt="like">
                    {isLiked ? (
                        <use
                          xlinkHref="../img/icon/sprite.svg#icon-like"
                          fill="#ad61ff"
                        ></use>) : ( <use xlinkHref="../img/icon/sprite.svg#icon-like"></use> )}
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                </S.TrackPlayLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <S.VolumeContent>
            <S.VolumeImage onClick={togglePlay} >
              <S.VolumeSvg alt="volume">
                <use xlinkHref="../img/icon/sprite.svg#icon-volume"></use>
              </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress className="_btn">
              <S.VolumeProgressLine className="_btn" type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange} />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.BarBasic>
  );
}

export default Bar;