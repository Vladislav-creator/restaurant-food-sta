"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, incrementQuantity, decrementQuantity, selectCartItemsById } from '../Redux/ordersSlice';
import QuantityControl from '../QuantityControl/QuantityControl';
import styles from './DishDetails.module.css';

const DishDetails = ({ dish }) => {
  const dispatch = useDispatch();
  const order = useSelector(state => selectCartItemsById(state, dish._id));
  const quantity = order ? order.quantity : 0;

  const increment = () => {
    dispatch(incrementQuantity({ id: dish._id }));
  };

  const decrement = () => {
    if (quantity > 0) {
      dispatch(decrementQuantity({ id: dish._id }));
    }
  };

  const addToCart = () => {
    const { _id, name, price, weight } = dish;
    dispatch(addItemToCart({ id: _id, name, price, weight }));
  };

  return (
    <div className={styles.dishDetails}>
      <h4 className={styles.dishName}>"{dish.name}"</h4>
      <div className={styles.divIngredients}><p className={styles.ingredients}>Склад: {dish.ingredients}</p></div>
      <p className={styles.weight}>Вага: {dish.weight} г</p>
      <p className={styles.price}>{dish.price} грн.</p>
      {quantity > 0 && (
        <QuantityControl
          quantity={quantity}
          onIncrement={increment}
          onDecrement={decrement}
        />
      )}
      <button
        onClick={addToCart}
        className={styles.buttonOrderNow}
      >
        {quantity > 0 ? 'Замовити ще' : 'Замовити'}
      </button>
    </div>
  );
};

export default DishDetails;