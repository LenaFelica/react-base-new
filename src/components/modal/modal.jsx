import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseBlack } from '@/assets/icons/CloseBlack';
import { useWindowSize } from '@/hooks/useWindowSize';
import { lockScroll, unLockScroll } from '@/utils/scrollLock';

import styles from './modal.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    unLockScroll();
    onClose();
  };

  const modalContent = (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={handleModalClose} />
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeModalBtn} onClick={handleModalClose}>
          {isMobile ? <CloseBlack /> : 'Закрыть'}
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
