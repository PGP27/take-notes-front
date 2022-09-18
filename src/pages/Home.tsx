import { useEffect } from 'react';
import { useApp } from '~/contexts/AppContext';
import { useAuth } from '~/contexts/AuthContext';
import Header from '~/components/Header';
import MainContent from '~/components/MainContent';
import Modal from '~/components/Modal';
import Label from '~/components/Label';
import Input from '~/components/Input';
import Button from '~/components/Button';

const Home = () => {
  const { user } = useAuth();
  const { mainContent, getAllDocuments, changeShowModal } = useApp();

  useEffect(() => {
    getAllDocuments();
  }, []);

  return (
    <div className='flex'>
      <Header />
      <MainContent type={mainContent.type} id={mainContent.id} />
      <Modal name='config' title='Configurações'>
        <form className='flex gap-8'>
          <div className='flex flex-col'>
            <h3 className='mb-4'>Editar Perfil</h3>
            <Label>Nome:</Label>
            <Input variant='form' type='text' defaultValue={user.name} />
            <Label>Email:</Label>
            <Input variant='form' type='email' defaultValue={user.email} />
            <Label>Usuário:</Label>
            <Input variant='form' type='text' defaultValue={user.username} />
          </div>
          <div className='relative flex flex-col'>
            <h3 className='mb-4'>Alterar Senha</h3>
            <Label>Senha atual:</Label>
            <Input variant='form' type='password' />
            <Label>Nova senha:</Label>
            <Input variant='form' type='password' />
            <Button className='absolute w-40 bottom-0 right-0' type='button' variant='primary'>
              Salvar alterações
            </Button>
          </div>
        </form>
      </Modal>
      <Modal name='deleteDoc' title='Tem certeza de deseja excluir esse documento?'>
        <div className='flex items-center justify-between'>
          <Button
            variant='primary'
            className='w-fit p-2'
            onClick={() => changeShowModal('deleteDoc')}
          >
            Não
          </Button>
          <Button variant='delete'>Sim</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
