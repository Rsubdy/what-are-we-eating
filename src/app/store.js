import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/productsSlice';
import fridgeSlice from '../features/fridge/fridgeSlice';
import recipesSlice from '../features/recipes/recipesSlice';

const store = configureStore({
    reducer: {
      products: productsSlice,
      fridge: fridgeSlice,
      recipes: recipesSlice
    }
});


export const func = () => 1;
export default store;