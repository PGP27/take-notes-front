import React from 'react';
import ReactDOM from 'react-dom';
import { useApp } from '~/contexts/AppContext';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { X } from 'phosphor-react';
import Button from './Button';

const Modal: React.FC<HaveChildrenProps> = ({ children }) => {
  const { openModal, setOpenModal } = useApp();

  return openModal
    ? ReactDOM.createPortal(
        <div className='absolute inset-0 flex items-center justify-center bg-modal-overlay shadow'>
          <div className='shadow rounded bg-white p-8'>
            <header className='flex items-center justify-between border-b pb-4 mb-8'>
              <h2>Configurações</h2>
              <Button variant='close' onClick={() => setOpenModal(false)}>
                <X />
              </Button>
            </header>
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
