import { createSlice } from '@reduxjs/toolkit';
import initialProductsData from './initialProductsData';


const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsData,
  reducers: {
    add: (state, action) => {
        state.push(action.payload);
    },
    remove: (state, action) => {
        return state.filter((element)=> element.id !== action.payload.id)
    }
  }
});

//Selectors:

export const selectAllProducts = (state) => state.products;
export const selectProductByName = (state, name) => state.filter((e)=> e.name.toLowerCase().includes(name.toLowerCase()));
export const selectProductById = (state, id) => state.filter((e)=>e.id === id);
export const selectProductByDiet = (state, diet) => state.filter((e) => e.diet.glutenfree === diet.glutenfree && e.diet.vegetarian === diet.vegetarian && e.diet.dairyfree === diet.dairyfree);

//Actions:
export const {add, remove} = productsSlice.actions

//Reducer:
export default productsSlice.reducer