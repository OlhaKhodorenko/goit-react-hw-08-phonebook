import { Outlet } from 'react-router-dom';
import AppBarComponent from './appBar/appBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
