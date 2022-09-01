import { useAuth } from '~/contexts/AuthContext';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AppProvider } from '~/contexts/AppContext';
import Toast from '~/components/Toast';

const Router = () => {
  const { token, showToast } = useAuth();

  return token ? (
    <AppProvider>
      <AppRoutes />
      {showToast && <Toast />}
    </AppProvider>
  ) : (
    <>
      <AuthRoutes />
      {showToast && <Toast />}
    </>
  );
};

export default Router;
