import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { loginUser, registerUser } from "../../api";
import { checkUserExists, useUserDispatch } from "../../contex";

export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setName] = useState('');
  const dispatch = useUserDispatch();
  const navigate = useNavigate();
  const [isComeRequest, setIsComeRequest] = useState(false);

  const isValidateForm = async () => {
    if (email=== "" || password==="") {
      setError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя')
      return false
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return false
    }
    if (password.length < 4 || repeatPassword.length < 4) {
      setError('Пароль должен содержать более 4 символов')
      return false
    }
    if (password.includes('123456')) {
      setError('Пароль слишком распространен')
      return false
    }
    try {
      const userExists = await checkUserExists(username);
      if (userExists) {
        setError("Пользователь с таким именем уже существует");
        return false;
      }
    } catch (error) {
      setError("Ошибка проверки существования пользователя");
      return false;
    }
    return true
  }

  const isValidateFormLogin = async () => {
    if (email === "" || password === "") {
      setError('Укажите почту/пароль');
      return false;
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя');
      return false;
    }
    try {
      await loginUser({ email, password });
      return true;
    } catch (error) {
      setError('Пользователь с таким email или паролем не найден');
      return false;
    }
  };

  const handleLogin = async ({ email, password }) => {
    const isValidLoginForm = await isValidateFormLogin();
    if (isValidLoginForm) {
      try {
        setIsComeRequest(true);
        await loginUser({ email, password });
        navigate("/");
      } catch (error) {
        isValidateFormLogin();
        setIsComeRequest(false);
      }
    } else {
      isValidateFormLogin();
      setIsComeRequest(false);
    }
  };

  const handleRegister = async () => {
    const isValidRegisterForm = await isValidateForm();
    if (isValidRegisterForm) {
      try {
        setIsComeRequest(true);
        const user = await registerUser({ email, password, username });
        navigate("/login");
        dispatch({type: "setUser", payload: user.username});
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        setIsComeRequest(false);
        isValidateForm();
      }
    } else {
      setIsComeRequest(false);
      isValidateForm();
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isComeRequest} onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
            <S.ModalInput
              type="Name"
              name="Name"
              placeholder="Имя пользователя"
              onChange={(e) => setName(e.target.value)}
            />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isComeRequest} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}