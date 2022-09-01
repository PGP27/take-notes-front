import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
      <Link className='w-fit mt-4' to='forgot-password'>
        <p className='w-fit text-sm font-medium text-sky-700 hover:text-sky-800'>
          Esqueceu sua senha?
        </p>
      </Link>
      <div className='flex justify-between mt-8'>
        <Link to='register'>
          <Button className='w-28' type='button' variant='secondary' disabled={loadingLogin}>
            Criar conta
          </Button>
        </Link>
        <Button
          className='w-28'
          type='button'
          variant='primary'
          onClick={() =>
            login({ username: loginRef.current.username, password: loginRef.current.password })
          }
          disabled={loadingLogin}
        >
          Entrar
        </Button>
      </div>
    </BaseAuthForm>
  );
};

export default Login;
