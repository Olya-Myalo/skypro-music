import * as S from './Sidebar.styles';
import { Link } from "react-router-dom";
import { useUser } from '../../../contex';
import { CategoryPlaylist } from '../Category-playlist';

const Sidebar = () => {
  const { username } = useUser();
    
  return (
    <S.MainSidebar>
      <S.SidebarPersonal style={{position: 'relative'}}>
        <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
          <S.SidebarIcon>
            <Link to="/login">
              <svg alt="logout">
                <use xlinkHref="img/icon/sprite.svg#logout"></use>
              </svg>
            </Link>
        </S.SidebarIcon>
      </S.SidebarPersonal>
        <S.SidebarBlock>
        <S.SidebarList>
              {CategoryPlaylist.map((list) => (
                  <li key={list.id}>
                  <Link to={`/category/${list.id}`}>
                      <img src={list.img} alt="Image" />
                  </Link>
                  </li>
              ))}
          </S.SidebarList>
        </S.SidebarBlock>
    </S.MainSidebar>
  );
};

export default Sidebar;