import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

export const HomeRoutes = () => {
  return (
    <>
      <Outlet/>
      <Navbar/>
    </>
  )
}