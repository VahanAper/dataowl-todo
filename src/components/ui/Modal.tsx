import React from 'react';

import './Modal.css';

type Props = {
  onClose: () => void;
  children: React.ReactChild;
};

const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal_content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
