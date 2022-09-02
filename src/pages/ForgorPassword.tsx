import { Link } from 'react-router-dom';
import BaseAuthForm from '~/components/BaseAuthForm';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Label from '~/components/Label';

const ForgorPassword = () => {
  return (
    <BaseAuthForm title='Recuperar senha' description='Insira seu usuário para recuperar a senha'>
      <Label>Usuário</Label>
      <Input variant='form' type='text' placeholder='Usuário' />
      <div className='flex justify-between mt-8'>
        <Link to='/'>
          <Button className='w-28' type='button' variant='secondary'>
            Fazer login
          </Button>
        </Link>
        <Button className='w-28' type='button' variant='primary'>
          Recuperar
        </Button>
      </div>
    </BaseAuthForm>
  );
};

export default ForgorPassword;
