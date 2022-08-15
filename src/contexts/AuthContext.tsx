import React, { createContext, useContext, useState } from 'react';
import { AuthContextProps, AuthProviderProps, User } from '~/models';
import { api } from '~/services/index.service';

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [user, setUser] = useState<User>(JSON.parse(localStorage.getItem('user') || '{}'));

  const login = async (username: string, password: string) => {
    setLoadingLogin(true);
    await api
      .post('/auth/login', { username, password })
      .then((res) => {
        setUser(res.data.user);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingLogin(false));
  };

  return (
    <AuthContext.Provider value={{ loadingLogin, token, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
