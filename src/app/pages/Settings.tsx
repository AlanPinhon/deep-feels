import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Settings = () => {
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  }

  return (
    <>
      <h1>Settings</h1>
      <button onClick={ onLogout }>Logout</button>
    </>
  )
}