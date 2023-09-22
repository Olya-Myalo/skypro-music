import * as S from './Signin.styles';
import { Link } from 'react-router-dom';

export const Signing = ({onAuthButtonClick}) => {
    
  
  return (
    <S.SigninDiv>
    <S.SigninWrapper>
      <S.SigninContainerEnter>
        <S.SigninModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
              // onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              // onChange={(e) => setPassword(e.target.value)}
            />
            <S.ModalBtnEnter>
              <Link to="/"  onClick={onAuthButtonClick}>Войти</Link>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <Link to="/register">Зарегистрироваться</Link>
            </S.ModalBtnSignup> 
          </S.ModalFormLogin>
        </S.SigninModalBlock>
      </S.SigninContainerEnter>
    </S.SigninWrapper>
  </S.SigninDiv>
  );
};