import * as S from './Sidebar.styles';
import { Link } from "react-router-dom";
import { SidebarItems } from './SidebarItem';
import { useUser } from '../../../contex';

const Sidebar = () => {
  const {userName} =useUser();
    
  return (
    <S.MainSidebar>
      <S.SidebarPersonal style={{position: 'relative'}}>
        <S.SidebarPersonalName>{userName}</S.SidebarPersonalName>
        <S.SidebarIcon>
        <Link to="/login">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
          </Link>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
      <SidebarItems></SidebarItems>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
};

export default Sidebar;