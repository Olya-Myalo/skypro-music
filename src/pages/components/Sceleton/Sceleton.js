import Filter from '../Filter/Filter';
import InputSearch from '../Search/Search';
import * as S from './Sceleton.styled';
import Skeleton from "react-loading-skeleton";

const Sceleton = ({tracks}) => {

  return (
    <S.MainCenterblock>
    <InputSearch/>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter tracks={tracks}/>
      <S.CenterblockContent>
      <S.ContentTtitle>
          <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
          <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
          <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
          <S.PlaylistTitleCol04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
          </S.PlaylistTitleCol04>
      </S.ContentTtitle>
      <S.ContentPlaylist>
            <S.ContentPlaylistSceleton>
                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>4:44</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>2:22</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>2:22</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>4:12</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>2:54</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>5:20</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>3:41</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>3:32</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        </S.TrackTitle>
                        <S.TrackAuthor className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAuthor>
                        <S.TrackAlbum className="skeleton-style">
                            <Skeleton height={25}/>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
                            <S.TrackTimeText>3:36</S.TrackTimeText>
                        </S.TrackTime>
                </S.PlaylistTrack>
                </S.PlaylistItem>
            </S.ContentPlaylistSceleton>
        </S.ContentPlaylist>
    </S.CenterblockContent>
</S.MainCenterblock>
  );
}

export default Sceleton;