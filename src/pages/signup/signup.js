import { useState } from 'react';
import { registerUser } from '../../api';
import * as S from './Signup.styles';
import { useUserDispatch } from '../../contex';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [twoPassword, setTwoPassword] = useState('');
    const [username, setName] = useState('');
    const dispatch = useUserDispatch();
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(null)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password===twoPassword && password!=='' && twoPassword!=='') {
        const user = await registerUser({ email, password, username });
        console.log(user.errorMessage)
        if (user.errorMessage) {
          setRegisterError(user.errorMessage)
          return
        }
        dispatch({type: "setUser", payload: user.username});
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/login");
      } else {
        setRegisterError("Пароли не совпадают!");
      }
    }; 

  return (
    <S.SignupDiv>
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
              type="Name"
              name="Name"
              placeholder="Имя пользователя"
              onChange={(e) => setName(e.target.value)}
            />
            <S.SignupModalInput
              type="text"
              name="login"
              placeholder="Почта"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.SignupModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.SignupModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
              onChange={(e) => setTwoPassword(e.target.value)}
            />
            <p style={{color: "red"}}>{registerError}</p>
            <S.SignupModalBtnSignupEnt>
              <a onClick={handleSubmit} href="#">Зарегистрироваться</a>
            </S.SignupModalBtnSignupEnt>
          </S.SignupModalFormLogin>
        </S.SignupModalBlock>
      </S.containerSignup>
    </S.SignupWrapper>
  </S.SignupDiv>
  );
};
