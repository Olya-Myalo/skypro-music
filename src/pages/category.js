import { useParams } from 'react-router-dom'
import { CategoryPlaylist } from './components/Category-playlist/index.js'

export const Category = () => {
  const params = useParams()
  const list = CategoryPlaylist.find((list) => list.id === Number(params.id))
    return (
      <div>
        {list.name}
      </div>
    );
  }