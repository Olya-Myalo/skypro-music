import { styled } from 'styled-components';

export const SignupBody = styled.body`
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
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  @font-face {
    font-family: 'StratosSkyeng';
    src: local("StratosSkyeng"), local("StratosSkyeng"), url("../fonts/StratosSkyeng.woff2") format("woff2"), url("../fonts/StratosSkyeng.woff") format("woff"), url("../fonts/StratosSkyeng.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
  }
`
export const SignupWrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
`
export const containerSignup = styled.div`
max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
`
export const SignupModalBlock = styled.div`
position: absolute;
    z-index: 2;
    left: calc(50% - (366px/2));
    top: calc(50% - (439px/2));
    opacity: 1;
`
export const SignupModalFormLogin = styled.form`
width: 366px;
height: 439px;
background-color: #FFFFFF;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 43px 44px 47px 40px;
& input:first-child {
    margin-bottom: 30px;
  }
  
`
export const SignupModalLogo = styled.div`
width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;
    & img {
        width: 140px;
        height: auto;
      }
`
export const SignupModalInput = styled.input`
width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #D0CECE;
    padding: 8px 1px;
    margin-right: 3px;
    margin-bottom: 30px;
    &::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #D0CECE;
      }
      &:-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #D0CECE;
      }
      &::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #D0CECE;
      }
      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #D0CECE;
      }
`
export const SignupModalBtnSignupEnt = styled.button`
width: 278px;
height: 62px;
background-color: #580EA2;
border-radius: 6px;
margin-left: 4px;
border: none;
margin-top: 30px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
        &:hover {
            background-color: #3F007D;
          }
  &:active {
    background-color: #271A58;
  }
  & a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }       
`