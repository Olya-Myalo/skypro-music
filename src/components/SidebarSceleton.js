import './Sidebar.css';
import Skeleton from "react-loading-skeleton";

const SidebarSceleton = () => {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal" style={{position: 'relative'}}>
        <div className="sidebar__personal-name">Sergey.Ivanov</div>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item skeleton-style">
            <Skeleton width={250} height={150} />
          </div>
          <div className="sidebar__item skeleton-style">
            <Skeleton width={250} height={150} />
          </div>
          <div className="sidebar__item skeleton-style">
            <Skeleton width={250} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarSceleton;