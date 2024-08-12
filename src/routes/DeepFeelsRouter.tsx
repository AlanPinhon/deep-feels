import { Navigate, Route, Routes } from 'react-router-dom';
import {ForgotPassword, Login, Register} from '../pages/public';

export const DeepFeelsRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}