import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Login = () => {

  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login();
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={ onLogin }>Login</button>
    </>
  )
}