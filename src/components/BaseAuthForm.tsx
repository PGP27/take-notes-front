import React from 'react';
import Logo from './Logo';
import Description from './Description';
import { BaseAuthModel } from '~/models/BaseAuthModel';

const BaseAuthForm: React.FC<BaseAuthModel> = ({ title, description, children }) => (
  <div className='min-h-screen min-w-full flex items-center justify-center'>
    <form className='w-full max-w-md flex flex-col border border-zinc-400 rounded p-8 shadow'>
      <Logo className='self-center mb-12' />
      <h2 className='text-xl mb-4'>{title}</h2>
      <Description className='text-xs mb-8'>{description}</Description>
      {children}
    </form>
  </div>
);

export default BaseAuthForm;
