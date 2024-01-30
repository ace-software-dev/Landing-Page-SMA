import React, { useRef } from 'react';  
import RoundedButton from '../Button/rounded-button';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode; // Children can be any valid React Node
}

const Modal = ({children, onClose}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} className="fixed inset-0 z-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleClickOutside}>
      <div onClick={handleClickOutside} className="bg-white p-8 max-w-screen-lg w-11/12 rounded-md  overflow-scroll h-3/4 overflow-x-auto z-10">
        {/* Children can be any React component or JSX */}
        {children}
        <div className='flex flex-col justify-end align-bottom items-end mt-6'>
          <RoundedButton classes="w-fit self-center" action={onClose}>Cerrar</RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;