import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

// const Container = lazy(() => import('components/App/AppStyled'));
import { Container } from 'components/App/AppStyled';
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
import { HomePage } from './pages/HomePage/HomePage';
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
import { LoginPage } from './pages/LoginPage/LoginPage';

export const Layout = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={
            <PrivateRoute 
            redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="/register" element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
              restricted
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPage />}
              restricted
            />
          }
        />
        <Route path="*" element={<p>Sorry, something went wrong</p>}></Route>
      </Routes>
      </Container>
    </Suspense>
  );
};
