import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  totalPrice: 0,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    clearOrder(state) {
      console.log('Clearing order'); // логирование
      state.orders = [];
      state.totalPrice = 0;
    },
    addItemToCart: (state, action) => {
      console.log('Adding item to cart:', action.payload); // логирование
      const newItem = action.payload;
      const existingItem = state.orders.find(order => order.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.orders.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalPrice += newItem.price;
    },
    delItemToCart: (state, action) => {
      console.log('Deleting item from cart:', action.payload); // логирование
      const { id } = action.payload;
      const existingItemIndex = state.orders.findIndex(order => order.id === id);
      if (existingItemIndex !== -1) {
        const existingItem = state.orders[existingItemIndex];
        state.totalPrice -= existingItem.totalPrice;
        state.orders.splice(existingItemIndex, 1);
      }
    },
    incrementQuantity: (state, action) => {
      console.log('Incrementing quantity:', action.payload); // логирование
      const { id } = action.payload;
      const existingItem = state.orders.find(order => order.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalPrice += existingItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      console.log('Decrementing quantity:', action.payload); // логирование
      const { id } = action.payload;
      const existingItemIndex = state.orders.findIndex(order => order.id === id);
      if (existingItemIndex !== -1) {
        const existingItem = state.orders[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalPrice -= existingItem.price;
        } else {
          state.totalPrice -= existingItem.price;
          state.orders.splice(existingItemIndex, 1);
        }
      }
    }
  },
});

export const { clearOrder, addItemToCart, incrementQuantity, decrementQuantity, delItemToCart } = ordersSlice.actions;

export const selectCartTotal = (state) => state.orders.totalPrice;

export const selectCartItemsById = (state, id) =>
  state.orders.orders.find(order => order.id === id);

export default ordersSlice.reducer;