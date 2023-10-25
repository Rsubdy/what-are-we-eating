import { createSlice } from '@reduxjs/toolkit';
import initialProductsData from './initialProductsData';


const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsData,
  reducers: {
    addProduct: (state, action) => {
    state.push(JSON.parse(action.payload));
    },
    removeProduct: (state, action) => {
        return state.filter((element)=> element.id !== action.payload.id)
    }
  }
});

//Selectors:

export const selectAllProducts = (state) => state.products;
export const selectProductByName = (state, name) => state.products.filter((e)=> e.name.toLowerCase().includes(name.toLowerCase()));
export const selectProductById = (state, id) => state.products.find((e)=>e.id === id);
export const selectProductByDiet = (state, diet) => state.products.filter((e) => e.diet.glutenfree === diet.glutenfree && e.diet.vegetarian === diet.vegetarian && e.diet.dairyfree === diet.dairyfree);

//Actions:
export const {addProduct, removeProduct} = productsSlice.actions

//Reducer:
export default productsSlice.reducer