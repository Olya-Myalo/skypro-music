import * as S from './Sidebar.styles';
import { Link } from "react-router-dom";

const Sidebar = () => {
    
  return (
    <S.MainSidebar>
      <S.SidebarPersonal style={{position: 'relative'}}>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
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
          <S.SidebarItem style={{position: 'relative'}}>
          <Link to="/category/:id">
            <S.SidebarLink>
              <S.SidebarImg
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem style={{position: 'relative'}}>
          <Link to="/category/:id">
            <S.SidebarLink>
              <S.SidebarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem style={{position: 'relative'}}>
          <Link to="/category/:id">
            <S.SidebarLink>
              <S.SidebarImg
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
            </Link>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
};

export default Sidebar;