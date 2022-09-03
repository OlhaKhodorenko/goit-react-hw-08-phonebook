import React from 'react';
import { Link } from 'react-router-dom';
import css from './authNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" className={css.link}>
        Sign up
      </Link>
      <Link to="/login" className={css.link}>
        Login
      </Link>
    </div>
  );
}
