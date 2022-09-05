import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import css from './registerView.module.css';
import { TextField, Button, Container } from '@mui/material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Sign up</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="standard-password-input"
          label="Name"
          type="text"
          name="name"
          autoComplete="current-name"
          variant="standard"
          value={name}
          onChange={handleChange}
        />

        <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="current-email"
          variant="standard"
          value={email}
          onChange={handleChange}
        />

        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          sx={{
            mr: 'auto',
            ml: 'auto',
            mt: '30px',
            display: 'block',
            alignItems: 'center',
          }}
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </Container>
  );
}
