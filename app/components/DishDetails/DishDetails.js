"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, incrementQuantity, decrementQuantity, selectCartItemsById } from '../Redux/ordersSlice';
import styles from './DishDetails.module.css';

const DishDetails = ({ dish }) => {
  

  const dispatch = useDispatch();
  const order = useSelector(state => selectCartItemsById(state, dish._id)); // Используем _id для поиска блюда в корзине
  const quantity = order ? order.quantity : 0;

  const increment = () => {
    
    dispatch(incrementQuantity({ id: dish._id })); // Передаем _id для увеличения количества
  };

  const decrement = () => {
     
    if (quantity > 0) {
      dispatch(decrementQuantity({ id: dish._id })); // Передаем _id для уменьшения количества
    }
  };

  const addToCart = () => {
    
    const { _id, name, price, weight } = dish;
    dispatch(addItemToCart({ id: _id, name, price, weight })); // Передаем необходимые данные о блюде для добавления в корзину
  };

  return (
    <div className={styles.dishDetails}>
      <h4 className={styles.dishName}>"{dish.name}"</h4>
      <div className={styles.divIngredients}><p className={styles.ingredients}>Склад: {dish.ingredients}</p></div>
      <p className={styles.weight}>Вага: {dish.weight} г</p>
      <p className={styles.price}>{dish.price} грн.</p>
      {quantity > 0 && (
        <div className={styles.quantityControl}>
          <button className={styles.buttonControlQuantity} onClick={decrement}>-</button>
          <span>Замовлено: {quantity} порц.</span>
          <button className={styles.buttonControlQuantity} onClick={increment}>+</button>
        </div>
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