import React, { createContext, useContext, useState } from 'react';
import { AuthContextProps } from '~/models/AuthContext.model';
import { CreateAccountModel } from '~/models/CreateAccount.model';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { LoginModel } from '~/models/Login.model';
import { ToastModel } from '~/models/Toast.model';
import { User } from '~/models/User.model';
import { api } from '~/services/index.service';

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<HaveChildrenProps> = ({ children }) => {
  const [showToast, setShowToast] = useState<ToastModel>({ message: '' });
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [user, setUser] = useState<User>(JSON.parse(localStorage.getItem('user') || '{}'));

  const changeUser = (user: User) =>
    setUser((old) => ({
      ...old,
      ...user,
    }));

  const openToast = ({ variant, message }: ToastModel) => setShowToast({ variant, message });

  const closeToast = () => setShowToast({ message: '' });

  const login = async ({ username, password }: LoginModel) => {
    setAuthLoading(true);
    await api
      .post('/auth/login', { username, password })
      .then((res) => {
        setUser(res.data.user);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        closeToast();
      })
      .catch(() => openToast({ variant: 'error', message: 'Usuário ou senha incorretos!' }))
      .finally(() => setAuthLoading(false));
  };

  const logout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  const createAccount = async ({ name, email, username, password }: CreateAccountModel) => {
    setAuthLoading(true);
    await api
      .post('/user', { name, email, username, password })
      .then(() => openToast({ variant: 'success', message: 'Conta criada com sucesso!' }))
      .catch((err) => openToast({ variant: 'warning', message: err.response.data.message }))
      .finally(() => setAuthLoading(false));
  };

  return (
    <AuthContext.Provider
      value={{
        authLoading,
        showToast,
        openToast,
        closeToast,
        token,
        login,
        logout,
        user,
        changeUser,
        createAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
