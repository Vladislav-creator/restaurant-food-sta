// import { configureStore } from '@reduxjs/toolkit';
// import ordersReducer from './ordersSlice';
// const store = configureStore({
//   reducer: {
//     orders: ordersReducer,
//   },
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // Использование localStorage
import ordersReducer from './ordersSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  orders: ordersReducer,
  // добавьте другие редьюсеры здесь
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
