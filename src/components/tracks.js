const TrackOne = (props) => {
    return (
      <div className="playlist__item">
          <div className="playlist__track track">
          <div className="track__title">
              <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
              <use xlinkHref={props.track.icon}></use></svg>
              </div>
              <div className="track__title-text">
              <a className="track__title-link" href="http://">{props.track.track}<span className="track__title-span"></span></a>
              </div>
          </div>
          <div className="track__author">
              <a className="track__author-link" href="http://">{props.track.author}</a>
          </div>
          <div className="track__album">
              <a className="track__album-link" href="http://">{props.track.album}</a>
          </div>
          <div className="track__time">
              <svg className="track__time-svg" alt="time">
              <use xlinkHref={props.track.like}></use></svg>
              <span className="track__time-text">{props.track.time}</span>
          </div>
          </div>
      </div>
    );
  }

  export default TrackOne;