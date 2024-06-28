"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal, incrementQuantity, decrementQuantity } from '../components/Redux/ordersSlice';
import styles from './MyOrder.module.css';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectCartTotal);
  const orders = useSelector((state) => state.orders.orders);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <div className={styles.orderSummary}>
      <h3>Мій заказ</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id} className={styles.orderItem}>
            <span>{order.name}  <button onClick={() => handleDecrement(order.id)}>-</button> {order.quantity} порція(ї) <button onClick={() => handleIncrement(order.id)}>+</button> {order.totalPrice} грн.</span>
           
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