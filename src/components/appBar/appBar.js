import { useAuth } from 'hooks';
import UserMenu from 'components/userMenu/userMenu';
import AuthNav from 'components/authNav/authNav';
import Navigation from 'components/navigation/navigation';
//import css from './appBar.module.css';
import { AppBar, Box } from '@mui/material';

export default function AppBarComponent() {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex">
      <AppBar position="static">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
    </Box>
  );
}
