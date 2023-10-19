import { useState } from 'react';
import * as S from './Nav.styles';
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <S.MainNav>
        <S.NavLogo>
          <S.LogoImg src="img/logo.png" alt="logo" />
        </S.NavLogo>
        <S.NavBurger onClick={toggleVisibility}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
      {visible && (
        <S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
            <Link to="/">
              <S.MenuLink>Главная</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/favorites">
              <S.MenuLink>Мой плейлист</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/login" >
              <S.MenuLink>{user ? 'Войти' : 'Выйти'}</S.MenuLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
      )}
    </S.MainNav>
  );
};

export default Nav;