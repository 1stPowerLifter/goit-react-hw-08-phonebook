import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Box m='0 auto' maxWidth={960} p='0 16px'>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};