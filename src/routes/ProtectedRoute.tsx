import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuthStore();

  // Always return either children (if authenticated) or <Navigate /> (if not)
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
