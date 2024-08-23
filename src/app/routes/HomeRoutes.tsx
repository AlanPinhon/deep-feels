import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';

export const HomeRoutes = () => {
  return (
    <>
      <Outlet/>
      <Navbar/>
    </>
  )
}