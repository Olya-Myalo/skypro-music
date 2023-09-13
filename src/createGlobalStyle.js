import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
button,
._btn {
  cursor: pointer;
}

  ._btn-text:hover {
      border-color: #d9b6ff;
      color: #d9b6ff;
      cursor: pointer;
    }
    
    ._btn-icon:hover svg {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    
    ._btn-text:active {
      border-color: #ad61ff;
      color: #ad61ff;
      cursor: pointer;
    }
    
    ._btn-icon:active svg {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
    
    ._btn-icon:active .track-play__like-svg,
    ._btn-icon:active .track-play__dislike-svg {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }
    
    .skeleton-style {
      background-color: #4E4E4E; 
    }
  `