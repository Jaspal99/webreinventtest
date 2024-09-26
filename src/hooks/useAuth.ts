import useAuthStore from '../store/authStore';

const useAuth = () => {
  const { isAuthenticated, login, logout } = useAuthStore();

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
