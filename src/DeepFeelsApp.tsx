import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const DeepFeelsApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}