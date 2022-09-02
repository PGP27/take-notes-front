import { useRef } from 'react';
import { Link } from 'react-router-dom';
import BaseAuthForm from '~/components/BaseAuthForm';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Label from '~/components/Label';
import { useAuth } from '~/contexts/AuthContext';
import { RegisterModel } from '~/models/Register.model';

const Register = () => {
  const { createAccount, closeToast } = useAuth();
  const registerRef = useRef<RegisterModel>({} as RegisterModel);

  return (
    <BaseAuthForm title='Criar sua conta' description='Insira seus dados para criar uma conta'>
      <Label>Nome</Label>
      <Input
        type='text'
        placeholder='Nome'
        variant='form'
        onChange={({ target: { value } }) => (registerRef.current.name = value)}
      />
      <Label>Email</Label>
      <Input
        type='email'
        placeholder='Email'
        variant='form'
        onChange={({ target: { value } }) => (registerRef.current.email = value)}
      />
      <Label>Usuário</Label>
      <Input
        type='text'
        placeholder='Usuário'
        variant='form'
        onChange={({ target: { value } }) => (registerRef.current.username = value)}
      />
      <Label>Senha</Label>
      <Input
        type='password'
        placeholder='Senha'
        variant='form'
        onChange={({ target: { value } }) => (registerRef.current.password = value)}
      />
      <div className='flex justify-between mt-8'>
        <Link to='/'>
          <Button className='w-28' type='button' variant='secondary' onClick={closeToast}>
            Fazer login
          </Button>
        </Link>
        <Button
          className='w-28'
          type='button'
          variant='primary'
          onClick={() => {
            const { name, email, username, password } = registerRef.current;
            createAccount({ name, email, username, password });
          }}
        >
          Cadastrar
        </Button>
      </div>
    </BaseAuthForm>
  );
};

export default Register;
