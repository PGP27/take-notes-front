import { LoginModel } from './Login.model';
import { User } from './User.model';

export interface AuthContextProps {
  loadingLogin: boolean;
  token: string;
  login({ username, password }: LoginModel): Promise<void>;
  user: User;
}
