import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './navigation.module.css';
import { Button } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Button>
        <Link to="/" className={css.link}>
          Home
        </Link>
      </Button>

      {isLoggedIn && (
        <Button>
          <Link to="/contacts" className={css.link}>
            Contacts
          </Link>
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
