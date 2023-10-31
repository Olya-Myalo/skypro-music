import { keyframes, styled } from 'styled-components';

  export const ContentPlaylist = styled.div`
  display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: scroll;
      height: 700px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: rgb(138, 133, 133);
  }
  
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
  `
  export const ContentPlaylistSceleton = styled.div`
  display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: scroll;
      height: 700px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: rgb(138, 133, 133);
  }
  
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
  `
  export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
  `
  export const PlaylistTrack = styled.div`
  display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
  `
  export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
  `
  export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
  `
  export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  `
  export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  `
  export const TrackTitleText = styled.div``
  
  export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
  `
  export const TrackAuthor = styled.div`
  width: 321px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
  `
  export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  `
  export const TrackAlbum = styled.div`
  width: 245px;
  `
  export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  `
  export const TrackLike = styled.svg`
  width: 16px;
  height: 14px;
  cursor: pointer;
  ` 
  
  export const TrackTime = styled.div``
  export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
  `
  export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
  `
  const blinkAnimation = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;
  
  export const Animation = styled.div`
    width: 150px; /* Adjust the size as needed */
    height: 15px; /* Adjust the size as needed */
    background-color: purple;
    border-radius: 50%;
    animation-play-state: paused;
  `;

  export const StopAnimation = styled.div`
    width: 150px; /* Adjust the size as needed */
    height: 15px; /* Adjust the size as needed */
    background-color: purple;
    border-radius: 50%;
    animation: ${blinkAnimation} 1s infinite;
  `;
  export const MainCenterblock = styled.div`
  width: auto;
      -webkit-box-flex: 3;
      -ms-flex-positive: 3;
      flex-grow: 3;
      padding: 20px 40px 20px 111px;
  `
  export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  `
  export const CenterblockContent = styled.div`
  display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  `
  export const ContentTtitle = styled.div`
  display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-bottom: 24px;
  `
  export const PlaylistTitleCol01 = styled.div`
  font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 2px;
      color: #696969;
      text-transform: uppercase;
      width: 447px;
  `
  export const PlaylistTitleCol02 = styled.div`
  font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 2px;
      color: #696969;
      text-transform: uppercase;
      width: 321px;
  `
  export const PlaylistTitleCol03 = styled.div`
  font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 2px;
      color: #696969;
      text-transform: uppercase;
      width: 245px;
  `
  export const PlaylistTitleCol04 = styled.div`
  font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 2px;
      color: #696969;
      text-transform: uppercase;
      width: 60px;
      text-align: end;
  `
  export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  `