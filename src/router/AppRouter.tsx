import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { EmailSent, ForgotPassword, Login, PasswordRecovery, PasswordReset, Register } from '../auth/pages';
import { Appearance, ChangePassword, EmotionSelector, Explore, Favorites, Home, Information, Player, Settings } from '../app/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={ <PublicRoute/> }>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="email-sent" element={<EmailSent />} />
        <Route path="password-recovery" element={<PasswordRecovery />} />
        <Route path="password-reset" element={<PasswordReset />} />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Route>

      <Route path='/' element= { <PrivateRoute/> }>
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore/>} />
        <Route path="favorites" element={<Favorites/>} />
        <Route path="settings/info" element={<Information/>} />
        <Route path="settings" element={<Settings/>} />
        <Route path="settings/appearance" element={<Appearance/>} />
        <Route path="settings/change-password" element={<ChangePassword/>} />
        <Route path="settings" element={<Settings/>} />
        <Route path="player" element={<Player />} />
        <Route path="emotion-selector" element={<EmotionSelector />} />

        <Route path="/*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}