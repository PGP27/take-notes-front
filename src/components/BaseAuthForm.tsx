import React from 'react';
import useWindowSize from '~/hooks/useWindowSize';
import Logo from './Logo';
import { BaseAuthModel } from '~/models/BaseAuthModel';

const BaseAuthForm: React.FC<BaseAuthModel> = ({ title, children }) => {
  const { height } = useWindowSize();

  return (
    <div className='min-h-screen min-w-full flex items-center justify-center'>
      <div
        className={`${
          height && height < 430 ? 'hidden' : 'block'
        } absolute top-[calc(50%-15.5rem)]`}
      >
        <Logo />
      </div>
      <form className='w-full max-w-md flex flex-col border border-black rounded p-8'>
        <h2 className='text-lg mb-4'>{title}</h2>
        {children}
      </form>
    </div>
  );
};

export default BaseAuthForm;
