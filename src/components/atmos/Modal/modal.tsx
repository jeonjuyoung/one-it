import React, { useState } from "react";
import "./modal.scss";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export const  Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    footer,
    children,
  }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-container">
          <div className="modal-overlay" onClick={onClose} />
          <div className="modal-content">
            <div className="modal-header">{title}</div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
    );
  };

  return {
    openModal,
    closeModal,
    Modal,
  };
};

// 사용 예시
// import React from "react";
// import { useModal } from "./useModal";

// export const ExampleComponent: React.FC = () => {
//   const { openModal, closeModal, Modal } = useModal();

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal isOpen={isOpen} onClose={closeModal} header={<h1>Modal Header</h1>} footer={<button onClick={closeModal}>Close Modal</button>}>
//         <p>내용이 들어감</p>
//       </Modal>
//     </div>
//   );
// };
