import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}
@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../public/fonts/stratosskyengweb-regular.woff2") format("woff2"),
    url("../public/fonts/stratosskyengweb-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
button,
._btn {
  cursor: pointer;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
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