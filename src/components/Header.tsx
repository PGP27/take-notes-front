import React from 'react';
import Button from './Button';
import { Gear, Plus, SignOut } from 'phosphor-react';
import { useAuth } from '~/contexts/AuthContext';
import { useApp } from '~/contexts/AppContext';

const Header: React.FC = () => {
  const { logout, user } = useAuth();
  const { changeMainContent, changeShowModal, createNote, notes, lists } = useApp();

  return (
    <header className='h-screen w-48 flex flex-col justify-between bg-zinc-100 border-r shadow-sm'>
      <div className='w-full'>
        <p className='m-4'>{user.name}</p>
        <Button
          variant='header'
          onClick={() => {
            changeMainContent({ type: 'note' });
            createNote({ type: 'note' });
          }}
        >
          <Plus /> Adicionar nota
        </Button>
        {notes.map((note) => (
          <Button
            key={note._id}
            variant='header'
            onClick={() => changeMainContent({ type: 'note', id: note._id })}
          >
            {note.title || 'Sem Título'}
          </Button>
        ))}
        <Button
          variant='header'
          onClick={() => {
            changeMainContent({ type: 'list' });
            createNote({ type: 'list' });
          }}
        >
          <Plus /> Adicionar checklist
        </Button>
        {lists.map((list) => (
          <Button
            key={list._id}
            variant='header'
            onClick={() => changeMainContent({ type: 'list', id: list._id })}
          >
            {list.title || 'Sem Título'}
          </Button>
        ))}
        <Button variant='header' onClick={changeShowModal}>
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
