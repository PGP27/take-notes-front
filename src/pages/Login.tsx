import { useRef } from 'react';
import BaseAuthForm from '~/components/BaseAuthForm';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Label from '~/components/Label';
import { useAuth } from '~/contexts/AuthContext';
import { LoginModel } from '~/models/Login.model';

const Login = () => {
  const { login, loadingLogin } = useAuth();

  const loginRef = useRef<LoginModel>({} as LoginModel);

  return (
    <BaseAuthForm title='Login'>
      <Label>Usuário</Label>
      <Input
        type='text'
        placeholder='Usuário'
        variant='form'
        onChange={({ target: { value } }) => (loginRef.current.username = value)}
      />
      <Label>Senha</Label>
      <Input
        type='password'
        placeholder='Senha'
        variant='form'
        onChange={({ target: { value } }) => (loginRef.current.password = value)}
      />
      <Button
        className='mt-12'
        type='button'
        variant='enter'
        onClick={() =>
          login({ username: loginRef.current.username, password: loginRef.current.password })
        }
        disabled={loadingLogin}
      >
        Entrar
      </Button>
    </BaseAuthForm>
  );
};

export default Login;
