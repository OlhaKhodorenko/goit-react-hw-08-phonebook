import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={css.link}>
      Phonebook
    </NavLink>
    <NavLink to="/contacts" exact className={css.link}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
