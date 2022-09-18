import React from 'react';
import ReactDOM from 'react-dom';
import { useApp } from '~/contexts/AppContext';
import { X } from 'phosphor-react';
import Button from './Button';
import { ModalModel } from '~/models/Modal.model';

const Modal: React.FC<ModalModel> = ({ name, title, children }) => {
  const { showModal, changeShowModal } = useApp();

  return showModal.name === name && showModal.open
    ? ReactDOM.createPortal(
        <div className='absolute inset-0 flex items-center justify-center bg-modal-overlay shadow'>
          <div className='shadow rounded bg-white p-8'>
            <header className='flex items-center justify-between border-b pb-4 mb-8'>
              <h2>{title}</h2>
              <Button variant='close' onClick={() => changeShowModal(name)}>
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
