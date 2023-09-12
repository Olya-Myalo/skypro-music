import * as S from './Sidebar.styles';
import { Link } from "react-router-dom";
import { CategoryPlaylist } from '../Category-playlist';

export const SidebarItems = () => {
    return (
        <S.SidebarList>
            {CategoryPlaylist.map((list) => (
                <li key={list.id}>
                <Link to={`/category/${list.id}`}>
                    <img src={list.img} alt="Image" />
                </Link>
                </li>
            ))}
        </S.SidebarList>
    )
}