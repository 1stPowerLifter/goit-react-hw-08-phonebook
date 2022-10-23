import { GlobalStyle } from './GlobalStyle';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './RouteParts/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RouteParts/RestrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/goit-react-hw-08-phonebook/register"
            element={
              <RestrictedRoute redirectTo="/goit-react-hw-08-phonebook/phonebook" component={<RegisterPage />} />
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/login"
            element={
              <RestrictedRoute redirectTo="/goit-react-hw-08-phonebook/phonebook" component={<LoginPage />} />
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/phonebook"
            element={
              <PrivateRoute redirectTo="/goit-react-hw-08-phonebook/login" component={<PhonebookPage />} />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};