import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Label from '~/components/Label';
import Logo from '~/components/Logo';

const Login = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='min-h-screen min-w-full flex items-center justify-center overflow-y-scroll'>
      <div
        className={`${windowHeight < 430 ? 'hidden' : 'block'} absolute top-[calc(50%-14.5rem)]`}
      >
        <Logo />
      </div>
      <form className='w-full max-w-md flex flex-col border-2 border-black rounded p-8'>
        <Label>Usuário</Label>
        <Input type='text' placeholder='Usuário' />
        <Label>Senha</Label>
        <Input type='password' placeholder='Senha' />
        <Button className='mt-12' type='button'>
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
