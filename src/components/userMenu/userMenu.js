import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import css from 'components/userMenu/userMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <span className={css.name}>Hello, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
