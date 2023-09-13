import * as S from './Playlist/Playlist.styled';

const TrackOne = ({todo}) => {
    return (
      <S.PlaylistItem>
          <S.PlaylistTrack>
          <S.TrackTitle>
              <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
              <S.TrackTitleLink href="http://">{todo.todo.name}<S.TrackTitleSpan></S.TrackTitleSpan></S.TrackTitleLink>
              </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">{todo.todo.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">{todo.todo.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
              <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use></S.TrackTimeSvg>
              <S.TrackTimeText>{todo.todo.duration_in_seconds}</S.TrackTimeText>
          </S.TrackTime>
          </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  }

  export default TrackOne;