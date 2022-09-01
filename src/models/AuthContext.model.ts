import { Dispatch, SetStateAction } from 'react';
import { LoginModel } from './Login.model';
import { User } from './User.model';

export interface AuthContextProps {
  loadingLogin: boolean;
  showToast: string;
  setShowToast: Dispatch<SetStateAction<string>>;
  token: string;
  login({ username, password }: LoginModel): Promise<void>;
  logout(): void;
  user: User;
}
