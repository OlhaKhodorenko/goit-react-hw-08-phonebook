import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from 'views/HomeView/homeView';
import RegisterView from 'views/RegisterView/registerView';
import LoginView from 'views/LoginView/loginView';
import ContactsView from 'views/ContactsView/contactsView';
import Container from 'components/container/container';
import AppBar from 'components/appBar/appBar';
import authOperations from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};
