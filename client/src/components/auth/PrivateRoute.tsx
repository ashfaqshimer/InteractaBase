import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';

const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
