import * as S from './Signin.styles';

export const Signing = () => {
  return (
    <S.SigninBody>
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
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <a href="../index.is">Войти</a>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <a href="signup.js">Зарегистрироваться</a>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.SigninModalBlock>
      </S.SigninContainerEnter>
    </S.SigninWrapper>
  </S.SigninBody>
  );
};