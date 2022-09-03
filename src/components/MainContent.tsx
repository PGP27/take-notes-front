import React, { useEffect } from 'react';
import Input from './Input';
import Item from './Item';
import { MainContentProps } from '~/models/MainContent.model';
import { useApp } from '~/contexts/AppContext';

const MainContent: React.FC<MainContentProps> = ({ type, id }) => {
  const { getDocumentById, document } = useApp();

  useEffect(() => {
    getDocumentById({ type, id });
  }, [type, id]);

  if (type === 'note') {
    return (
      <div className='flex-1 flex flex-col p-4'>
        <Input
          className='mb-4'
          placeholder='Título'
          variant='content'
          maxLength={20}
          defaultValue={document?.title}
        />
        <textarea
          className='h-full w-full max-w-xl outline-none resize-none border shadow bg-zinc-50 text-xs p-4'
          placeholder='Escreva sua nota aqui'
          defaultValue={document?.text || ''}
        />
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className='flex-1 flex flex-col p-4'>
        <Input
          className='mb-4'
          placeholder='Título'
          variant='content'
          maxLength={20}
          defaultValue={document?.title}
        />
        <Item />
      </div>
    );
  }

  return null;
};

export default MainContent;
