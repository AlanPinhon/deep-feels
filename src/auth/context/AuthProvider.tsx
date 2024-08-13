import { useState } from 'react';
import { AuthContext } from './AuthContext';

type ProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }:ProviderProps) => {

  const [isLogged, setIsLogged] = useState<boolean>(JSON.parse(localStorage.getItem('logged')!) || false);

  const login = () => {
    setIsLogged(true);
    localStorage.setItem('logged', JSON.stringify(true));
  }

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem('logged');
  }

  const contextValue = { isLogged, login, logout }

  return (
    <AuthContext.Provider value={ contextValue }>
      {children}
    </AuthContext.Provider>
  )
}