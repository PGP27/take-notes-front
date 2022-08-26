import { useAuth } from '~/contexts/AuthContext';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AppProvider } from '~/contexts/AppContext';

const Router = () => {
  const { token } = useAuth();

  return token ? (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  ) : (
    <AuthRoutes />
  );
};

export default Router;
