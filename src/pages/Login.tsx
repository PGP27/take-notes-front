import { useEffect, useRef, useState } from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Label from '~/components/Label';
import Logo from '~/components/Logo';
import { useAuth } from '~/contexts/AuthContext';
import { LoginModel } from '~/models/Login.model';

const Login = () => {
  const { login, loadingLogin } = useAuth();

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const loginRef = useRef<LoginModel>({} as LoginModel);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='min-h-screen min-w-full flex items-center justify-center overflow-y-scroll'>
      <div
        className={`${windowHeight < 430 ? 'hidden' : 'block'} absolute top-[calc(50%-13.5rem)]`}
      >
        <Logo />
      </div>
      <form className='w-full max-w-md flex flex-col border-2 border-black rounded p-8'>
        <Label>Usuário</Label>
        <Input
          type='text'
          placeholder='Usuário'
          variant='enter'
          onChange={({ target: { value } }) => (loginRef.current.username = value)}
        />
        <Label>Senha</Label>
        <Input
          type='password'
          placeholder='Senha'
          variant='enter'
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
      </form>
    </div>
  );
};

export default Login;
