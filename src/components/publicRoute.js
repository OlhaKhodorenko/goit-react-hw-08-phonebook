import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  restrited = false,
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restrited;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
