import { createContext } from 'react';

type LoginContextType = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<LoginContextType>({
  isLogged: false, login: () => {}, logout: () => {}
});