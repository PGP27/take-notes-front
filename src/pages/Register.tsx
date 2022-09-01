import { useRef } from 'react';
import BaseAuthForm from '~/components/BaseAuthForm';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Label from '~/components/Label';
import { RegisterModel } from '~/models/Register.model';

const Register = () => {
  const registerRef = useRef<RegisterModel>({} as RegisterModel);

  return (
    <BaseAuthForm title='Cadastro de usuário'>
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
      <Button className='mt-12' type='button' variant='enter'>
        Cadastrar
      </Button>
    </BaseAuthForm>
  );
};

export default Register;
