import { useEffect } from 'react';
import Header from '~/components/Header';
import MainContent from '~/components/MainContent';
import { useApp } from '~/contexts/AppContext';
import Modal from '~/components/Modal';
import Label from '~/components/Label';
import Input from '~/components/Input';

const Home = () => {
  const { mainContent, getAllUserNotes } = useApp();

  useEffect(() => {
    getAllUserNotes();
  }, []);

  return (
    <div className='flex'>
      <Header />
      <MainContent type={mainContent.type} />
      <Modal>
        <div className='flex gap-8'>
          <form className='flex flex-col items-start'>
            <h3 className='mb-4'>Editar Perfil</h3>
            <Label>Nome:</Label>
            <Input variant='form' type='text' />
            <Label>Email:</Label>
            <Input variant='form' type='email' />
            <Label>Usuário:</Label>
            <Input variant='form' type='text' />
          </form>
          <form className='flex flex-col items-start'>
            <h3 className='mb-4'>Alterar Senha</h3>
            <Label>Senha atual:</Label>
            <Input variant='form' type='password' />
            <Label>Nova senha:</Label>
            <Input variant='form' type='password' />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
