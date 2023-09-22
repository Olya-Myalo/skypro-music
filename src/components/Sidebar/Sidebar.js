import { useUser } from '../../contex';
import * as S from './Sidebar.styles';

const Sidebar = () => {
    const {name} = useUser();
  return (
    <S.MainSidebar>
      <S.SidebarPersonal style={{position: 'relative'}}>
        <S.SidebarPersonalName>{name}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem style={{position: 'relative'}}>
            <S.SidebarLink href="#">
              <S.SidebarImg
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem style={{position: 'relative'}}>
            <S.SidebarLink href="#">
              <S.SidebarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem style={{position: 'relative'}}>
            <S.SidebarLink href="#">
              <S.SidebarImg
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
};

export default Sidebar;