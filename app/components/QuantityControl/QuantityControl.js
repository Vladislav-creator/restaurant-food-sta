"use client";
import React from 'react';
import styles from './QuantityControl.module.css';

const QuantityControl = ({ quantity, onIncrement, onDecrement }) => {
  const getPortionLabel = (quantity) => {
    if (quantity === 1) {
      return 'порція';
    } else if (quantity >= 2 && quantity <= 4) {
      return 'порції';
    } else {
      return 'порцій';
    }
  };

  return (
    <div className={styles.quantityControl}>
      <button className={styles.buttonControlQuantity} onClick={onDecrement}>-</button>
      <div className={styles.getPortionLabel}>{quantity} {getPortionLabel(quantity)}</div>
      <button className={styles.buttonControlQuantity} onClick={onIncrement}>+</button>
    </div>
  );
};

export default QuantityControl;