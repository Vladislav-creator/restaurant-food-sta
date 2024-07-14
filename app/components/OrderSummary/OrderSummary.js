// "use client";
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCartTotal, incrementQuantity, decrementQuantity, delItemToCart, clearOrder } from '../Redux/ordersSlice';
// import QuantityControl from '../QuantityControl/QuantityControl';
// import styles from './OrderSummary.module.css';

// const OrderSummary = () => {
//   const dispatch = useDispatch();
//   const totalAmount = useSelector(selectCartTotal);
//   const orders = useSelector((state) => state.orders.orders);

//   const handleIncrement = (id) => {
//     dispatch(incrementQuantity({ id }));
//   };

//   const handleDecrement = (id) => {
//     dispatch(decrementQuantity({ id }));
//   };

//   const handleRemove = (id) => {
//     dispatch(delItemToCart({ id }));
//   };
  
//   const handleClearOrder = () => {
//     dispatch(clearOrder());
//   };

//   return (
//     <div className={styles.orderSummary}>
//       <h3>Мій заказ</h3>
//       <ul>
//         {orders.map((order, index) => (
//           <li key={order.id} className={styles.orderItem}>
//             <p className={styles.nameDish}>{index + 1}. {order.name} </p>
//             <QuantityControl
//               quantity={order.quantity}
//               onIncrement={() => handleIncrement(order.id)}
//               onDecrement={() => handleDecrement(order.id)}
//             />
//             <p className={styles.orderPrice}>{order.price} грн.</p> <p> Всього {order.totalPrice} грн.</p>
//             <button className={styles.delButton} onClick={() => handleRemove(order.id)}>×</button>
//           </li>
//         ))}
//       </ul>
//       <div className={styles.total}>
//         Загальна сума: {totalAmount} грн.
//       </div>
//       <button className={styles.clearOrderButton} onClick={handleClearOrder}>
//         Clear Order
//       </button>
//     </div>
//   );
// };

// export default OrderSummary;

"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal, incrementQuantity, decrementQuantity, delItemToCart, clearOrder } from '../Redux/ordersSlice';
import QuantityControl from '../QuantityControl/QuantityControl';
import styles from './OrderSummary.module.css';

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

  const handleRemove = (id) => {
    dispatch(delItemToCart({ id }));
  };
  
  const handleClearOrder = () => {
    dispatch(clearOrder());
  };

  return (
    <div className={styles.orderSummary}>
      <h3>Мій заказ</h3>
      <table className={styles.orderTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Назва</th>
            <th>Кількість</th>
            <th>Ціна за порцію</th>
            <th>Загальна сума</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td className={styles.quantityColumn}>
                <QuantityControl
                  quantity={order.quantity}
                  onIncrement={() => handleIncrement(order.id)}
                  onDecrement={() => handleDecrement(order.id)}
                />
              </td>
              <td>{order.price} грн.</td>
              <td>{order.totalPrice} грн.</td>
              <td>
                <button className={styles.delButton} onClick={() => handleRemove(order.id)}>×</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.total}>
        Загальна сума: {totalAmount} грн.
      </div>
      <button className={styles.clearOrderButton} onClick={handleClearOrder}>
        Видалити замовлення
      </button>
    </div>
  );
};

export default OrderSummary;