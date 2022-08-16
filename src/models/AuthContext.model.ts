import { User } from './User.model';

export interface AuthContextProps {
  loadingLogin: boolean;
  token: string;
  login(username: string, password: string): Promise<void>;
  user: User;
}
