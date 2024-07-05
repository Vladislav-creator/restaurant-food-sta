'use client'
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose}>
      <img src="./img/hero/arrow-go-back.png" alt="Back" className={styles.arrowImage} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;