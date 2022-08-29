import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './authNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact className={css.link}>
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
