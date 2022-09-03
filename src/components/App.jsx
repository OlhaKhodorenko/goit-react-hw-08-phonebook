import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import Container from 'components/container/container';
import { authOperations } from '../redux/auth';
import { useAuth } from 'hooks';
import { Layout } from './layout';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const HomeView = lazy(() => import('../views/HomeView/homeView'));
const RegisterView = lazy(() => import('../views/RegisterView/registerView'));
const LoginView = lazy(() => import('../views/LoginView/loginView'));
const ContactsView = lazy(() => import('../views/ContactsView/contactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute component={<HomeView />} />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  restrited
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  restrited
                  redirectTo="/contacts"
                  component={<LoginView />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />}
                />
              }
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
};
