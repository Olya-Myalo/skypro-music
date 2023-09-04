import * as S from './Signup.styles';

const Signup = () => {
  return (
    <S.SignupBody>
    <S.SignupWrapper>
      <S.containerSignup>
        <S.SignupModalBlock>
          <S.SignupModalFormLogin>
            <a href="../">
              <S.SignupModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.SignupModalLogo>
            </a>
            <S.SignupModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.SignupModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.SignupModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.SignupModalBtnSignupEnt>
              <a href="../index.js">Зарегистрироваться</a>
            </S.SignupModalBtnSignupEnt>
          </S.SignupModalFormLogin>
        </S.SignupModalBlock>
      </S.containerSignup>
    </S.SignupWrapper>
  </S.SignupBody>
  );
};

export default Signup;