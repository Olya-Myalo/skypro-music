import './Nav.css';
import { useState } from 'react';

const Nav = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div onClick={toggleVisibility} className="nav__burger burger">
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
      {visible && (
        <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="/" className="menu__link">Главная</a>
          </li>
          <li className="menu__item">
            <a href="/playlist" className="menu__link">Мой плейлист</a>
          </li>
          <li className="menu__item">
            <a href="/signin" className="menu__link">Войти</a>
          </li>
        </ul>
      </div>
      )}
    </nav>
  );
};

export default Nav;