import React, { useEffect } from 'react';
import { useApp } from '~/contexts/AppContext';
import Input from './Input';
import Item from './Item';
import Button from './Button';
import { MainContentProps } from '~/models/MainContent.model';

const MainContent: React.FC<MainContentProps> = ({ type, id }) => {
  const { getDocumentById, document, changeDocument, updateNote, changeShowModal } = useApp();

  useEffect(() => {
    getDocumentById({ type, id });
  }, [type, id]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (document) {
        if (type === 'note') {
          const { text, title } = document;
          if (title || text) {
            updateNote({ title, text, id });
          }
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [document]);

  if (type === 'note') {
    return (
      <div className='w-full max-w-xl flex-1 flex flex-col p-4'>
        <div className='flex items-center justify-between'>
          <Input
            className='mb-4'
            placeholder='Título'
            variant='content'
            maxLength={20}
            value={document?.title}
            onChange={({ target: { value } }) => {
              if (document) {
                changeDocument({ ...document, title: value });
              }
            }}
          />
          <Button variant='delete' onClick={() => changeShowModal('deleteDoc')}>
            Excluir nota
          </Button>
        </div>
        <textarea
          className='h-full w-full max-w-xl outline-none resize-none border shadow bg-zinc-50 text-xs p-4'
          placeholder='Escreva sua nota aqui'
          value={document?.text}
          onChange={({ target: { value } }) => {
            if (document) {
              changeDocument({ ...document, text: value });
            }
          }}
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
