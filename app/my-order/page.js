
"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../components/Redux/ordersSlice';
import styles from './MyOrder.module.css';

const OrderSummary = () => {
  const totalAmount = useSelector(selectCartTotal);
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className={styles.orderSummary}>
      <h3>Мій заказ</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.name} - {order.quantity} порція(ї) - {order.totalPrice} грн.
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        Загальна сума: {totalAmount} грн.
      </div>
    </div>
  );
};

export default OrderSummary;