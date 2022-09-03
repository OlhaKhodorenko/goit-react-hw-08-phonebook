import { useAuth } from 'hooks';
import UserMenu from 'components/userMenu/userMenu';
import AuthNav from 'components/authNav/authNav';
import Navigation from 'components/navigation/navigation';
import css from './appBar.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
