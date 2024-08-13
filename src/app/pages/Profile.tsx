import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Profile = () => {
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  }

  return (
    <>
      <h1>Profile</h1>
      <button onClick={ onLogout }>Logout</button>
    </>
  )
}