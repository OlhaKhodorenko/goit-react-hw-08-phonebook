import React from 'react';
import { Link } from 'react-router-dom';
import css from './authNav.module.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function AuthNav() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Button color="inherit">
        <Link to="/register" className={css.link}>
          Sign up
        </Link>
      </Button>
      <Button color="inherit">
        <Link to="/login" className={css.link}>
          Login
        </Link>
      </Button>
    </Box>
  );
}
