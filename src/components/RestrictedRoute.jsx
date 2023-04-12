import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selector';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит redirect на redirectTo
 * -  В противном случае рендерит компонент
 */
export const RestrictedRoute = ({
  redirectTo,
  restricted = false,
  component,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};