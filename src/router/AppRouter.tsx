import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ForgotPassword, Login, Register } from '../auth/pages';
import { Home, Player, Profile } from '../app/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <PublicRoute/> }>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        <Route path="/" element={<Navigate to="/login" />} />
      </Route>

      <Route path='/' element= { <PrivateRoute/> }>
        <Route path="home" element={<Home />} />
        <Route path="player" element={<Player />} />
        <Route path="profile" element={<Profile/>} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}