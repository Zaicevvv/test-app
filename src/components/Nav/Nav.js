import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Nav = () => (
  <ul className={css.nav}>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle} className={css.navItem}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/profile" activeStyle={activeStyle} className={css.navItem}>
        Profile
      </NavLink>
    </li>
    <li>
      <NavLink to="/news" activeStyle={activeStyle} className={css.navItem}>
        News
      </NavLink>
    </li>
  </ul>
);

export default Nav;
