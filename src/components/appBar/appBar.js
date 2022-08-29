import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/userMenu/userMenu';
import AuthNav from 'components/authNav/authNav';
import Navigation from 'components/navigation/navigation';
import css from './appBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
