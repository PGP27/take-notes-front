import { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export interface AuthContextProps {
  loadingLogin: boolean;
  token: string;
  login(username: string, password: string): Promise<void>;
  user: User;
}

export interface AuthProviderProps {
  children: ReactNode;
}
