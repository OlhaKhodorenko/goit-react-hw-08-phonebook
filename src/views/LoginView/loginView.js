import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import css from './loginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
