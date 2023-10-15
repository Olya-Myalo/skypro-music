import { useUser } from '../../../contex';
import * as S from './Sidebar.styles';
import Skeleton from "react-loading-skeleton";

const SidebarSceleton = () => {
  const { username } = useUser();
  return (
    <S.MainSidebar>
      <S.SidebarPersonal style={{position: 'relative'}}>
        <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem className="skeleton-style">
            <Skeleton width={250} height={150} />
          </S.SidebarItem>
          <S.SidebarItem className="skeleton-style">
            <Skeleton width={250} height={150} />
          </S.SidebarItem>
          <S.SidebarItem className="skeleton-style">
            <Skeleton width={250} height={150} />
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default SidebarSceleton;