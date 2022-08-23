import Button from './Button';
import { Gear, Plus, SignOut } from 'phosphor-react';
import { useAuth } from '~/contexts/AuthContext';

const Header = () => {
  const { logout, user } = useAuth();

  return (
    <header className='h-screen w-48 flex flex-col justify-between bg-zinc-100 border-r shadow-sm'>
      <div className='w-full'>
        <p className='m-4'>{user.name}</p>
        <Button variant='header'>
          <Plus /> Adicionar nota
        </Button>
        <Button variant='header'>
          <Plus /> Adicionar checklist
        </Button>
        <Button variant='header'>
          <Gear /> Configurações
        </Button>
      </div>
      <Button variant='header' className='border-t' onClick={logout}>
        <SignOut /> Sair
      </Button>
    </header>
  );
};

export default Header;
