import { Dispatch, SetStateAction } from 'react';
import { LoginModel } from './Login.model';
import { ToastModel } from './Toast.model';
import { User } from './User.model';

export interface AuthContextProps {
  loadingLogin: boolean;
  showToast: ToastModel;
  setShowToast: Dispatch<SetStateAction<ToastModel>>;
  token: string;
  login({ username, password }: LoginModel): Promise<void>;
  logout(): void;
  user: User;
}
