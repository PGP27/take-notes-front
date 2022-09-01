import React from 'react';
import Logo from './Logo';
import { BaseAuthModel } from '~/models/BaseAuthModel';

const BaseAuthForm: React.FC<BaseAuthModel> = ({ title, children }) => (
  <div className='min-h-screen min-w-full flex items-center justify-center'>
    <form className='w-full max-w-md flex flex-col border border-zinc-400 rounded p-8'>
      <Logo className='self-center mb-8' />
      <h2 className='text-xl mb-4'>{title}</h2>
      {children}
    </form>
  </div>
);

export default BaseAuthForm;
