import React from 'react';
import ReactDOM from 'react-dom';
import { useApp } from '~/contexts/AppContext';
import { HaveChildrenProps } from '~/models/HaveChildren.model';

const Modal: React.FC<HaveChildrenProps> = ({ children }) => {
  const { openModal, setOpenModal } = useApp();

  return openModal
    ? ReactDOM.createPortal(
        <button
          className='absolute inset-0 bg-gray-600 opacity-50 cursor-default'
          onClick={() => setOpenModal(false)}
        >
          {children}
        </button>,
        document.body,
      )
    : null;
};

export default Modal;
