import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selector';
/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит redirect на redirectTo
 */
export const PrivateRoute = ({ redirectTo, component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};
