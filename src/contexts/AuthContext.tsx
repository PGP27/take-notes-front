import React, { createContext, useContext, useState } from 'react';
import { AuthContextProps } from '~/models/AuthContext.model';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { LoginModel } from '~/models/Login.model';
import { User } from '~/models/User.model';
import { api } from '~/services/index.service';

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<HaveChildrenProps> = ({ children }) => {
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [user, setUser] = useState<User>(JSON.parse(localStorage.getItem('user') || '{}'));

  const login = async ({ username, password }: LoginModel) => {
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

  const logout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ loadingLogin, token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
