import Skeleton from "react-loading-skeleton";
import * as S from './Bar.styles';

const Bar = ({isLoading, currentTrack}) => {

  return (
    <S.BarBasic>
    <S.BarContent>
      <S.BarPlayerProgress></S.BarPlayerProgress>
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.PlayerBtnPrev>
              <S.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>
              <S.PlayerBtnPlaySvg alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
              <S.PlayerBtnNextSvg alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat className="_btn-icon">
              <S.PlayerBtnRepeatSvg alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="_btn-icon">
              <S.PlayerBtnShuffleSvg alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>
          <S.PlayerTrackPlay>
                {isLoading && <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                  <S.TrackPlayAuthor className="skeleton-style">
                  <Skeleton width={100} height={20}/>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum className="skeleton-style">
                    <Skeleton width={100} height={20} />
                  </S.TrackPlayAlbum>
                  </S.TrackPlayContain>}
                {!isLoading && <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">{currentTrack.name}</S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">{currentTrack.author}</S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>}
            <S.TrackPlayLikeDis>
              <S.TrackPlayLike className="_btn-icon">
                <S.TrackPlayLikeSvg alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackPlayLikeSvg>
              </S.TrackPlayLike>
              <S.TrackPlayDisLike className="_btn-icon">
                <S.TrackPlayDisLikeSvg alt="dislike">
                  <use  xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </S.TrackPlayDisLikeSvg>
              </S.TrackPlayDisLike>
            </S.TrackPlayLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <S.VolumeContent>
            <S.VolumeImage>
              <S.VolumeSvg alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress className="_btn">
              <S.VolumeProgressLine className="_btn" type="range"  name="range" />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.BarBasic>
  );
}

export default Bar;