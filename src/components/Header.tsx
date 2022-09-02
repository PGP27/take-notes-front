import React from 'react';
import Button from './Button';
import { Gear, Plus, SignOut } from 'phosphor-react';
import { useAuth } from '~/contexts/AuthContext';
import { useApp } from '~/contexts/AppContext';

const Header: React.FC = () => {
  const { logout, user } = useAuth();
  const { setMainContent, userNotes, setOpenModal } = useApp();

  return (
    <header className='h-screen w-48 flex flex-col justify-between bg-zinc-100 border-r shadow-sm'>
      <div className='w-full'>
        <p className='m-4'>{user.name}</p>
        <Button variant='header' onClick={() => setMainContent({ type: 'note' })}>
          <Plus /> Adicionar nota
        </Button>
        {userNotes.map((note) => (
          <Button
            key={note._id}
            variant='header'
            onClick={() => setMainContent({ type: 'note', noteId: note.id })}
          >
            {note.title}
          </Button>
        ))}
        <Button variant='header' onClick={() => setMainContent({ type: 'checklist' })}>
          <Plus /> Adicionar checklist
        </Button>
        <Button variant='header' onClick={() => setOpenModal(true)}>
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
