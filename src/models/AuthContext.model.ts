import { CreateAccountModel } from './CreateAccount.model';
import { LoginModel } from './Login.model';
import { ToastModel } from './Toast.model';
import { User } from './User.model';

export interface AuthContextProps {
  authLoading: boolean;
  showToast: ToastModel;
  openToast({ variant, message }: ToastModel): void;
  closeToast(): void;
  token: string;
  login({ username, password }: LoginModel): Promise<void>;
  logout(): void;
  user: User;
  changeUser(user: User): void;
  createAccount({ name, email, username, password }: CreateAccountModel): void;
}
