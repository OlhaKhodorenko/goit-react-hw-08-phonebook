import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import css from 'components/userMenu/userMenu.module.css';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <span className={css.name}>Hello, {user.name}</span>
      <Button
        type="button"
        color="inherit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
