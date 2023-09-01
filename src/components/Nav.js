import { useState } from 'react';
import * as S from './Nav.styles';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

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
            <S.MenuLink href="/">Главная</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="/playlist">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="/signin">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
      )}
    </S.MainNav>
  );
};

export default Nav;