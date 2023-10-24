import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/productsSlice';
import fridgeSlice from '../features/fridge/fridgeSlice';

const store = configureStore({
    reducer: {
      products: productsSlice,
      fridge: fridgeSlice,
    }
});

export default store;