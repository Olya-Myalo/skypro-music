import { styled } from 'styled-components';

export const App = styled.div`
html {
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