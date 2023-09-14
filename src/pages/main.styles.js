import { styled } from 'styled-components';

export const App = styled.div`
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
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../public/fonts/stratosskyengweb-regular.woff2") format("woff2"),
      url("../public/fonts/stratosskyengweb-regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
export const Wrapper = styled.div`
width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`
export const Container = styled.div`
max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`
export const Main = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: nowrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const MainDiv = styled.div`
margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  `