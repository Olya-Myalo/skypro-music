import TrackOne from '../tracks';
import * as S from './Playlist.styled';

const Playlist = ( {todos} ) => {
  return (
    <S.ContentPplaylist>
        {todos.map((todo) => {
            return <TrackOne key={todo.id} todo={todo} />;
        })}
</S.ContentPplaylist>
  );
}

export default Playlist;