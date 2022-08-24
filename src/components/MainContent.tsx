import React from 'react';
import Input from './Input';
import { MainContentProps } from '~/models/MainContent.model';

const MainContent: React.FC<MainContentProps> = ({ type }) => {
  if (type === 'note') {
    return (
      <div className='flex-1 flex flex-col p-4'>
        <Input
          className='w-80 bg-transparent mb-4'
          placeholder='Título'
          variant='header'
          maxLength={20}
        />
        <textarea
          className='h-full w-full max-w-xl outline-none resize-none border shadow bg-zinc-50 text-xs p-4'
          placeholder='Escreva sua nota aqui'
        />
      </div>
    );
  }
  if (type === 'checklist') {
    return (
      <div className='flex-1 flex flex-col p-4'>
        <Input
          className='w-80 bg-transparent mb-4'
          placeholder='Título'
          variant='header'
          maxLength={20}
        />
        <textarea className='h-full w-full max-w-xl outline-none resize-none border shadow bg-zinc-50 text-xs p-4' />
      </div>
    );
  }
  return null;
};

export default MainContent;