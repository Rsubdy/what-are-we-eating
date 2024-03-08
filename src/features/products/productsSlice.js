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
export const selectProductByName = (state, name) => {
  let allProducts = state.products;

  let productsToDisplay = [];

  let excludedDiets = state.dietPreferences.excludedDiets;
  
  let checkDiets = () => {
    let productsToTest = [...allProducts];
    let result = [];

    for (let product of productsToTest){
    if (excludedDiets.every(diet => product.diet[diet])){
    result.push(product);
    productsToTest.unshift();
  } 
  }
    return result;
  }
  
  productsToDisplay = excludedDiets.length === 0 ? allProducts : checkDiets();
  
  return productsToDisplay.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}
export const selectProductById = (state, id) => state.products.find((e)=>e.id === id);
export const selectProductsByDietPreferences = (state) => {
  
  let allProducts = state.products;
  let productsToDisplay = [];

  let excludedDiets = state.dietPreferences.excludedDiets;
  
  let checkDiets = () => {
    let productsToTest = [...allProducts];
    let result = [];

    for (let product of productsToTest){
    if (excludedDiets.every(diet => product.diet[diet])){
    result.push(product);
    productsToTest.unshift();
  } 
  }
    return result;
  }
  
  productsToDisplay = excludedDiets.length === 0 ? allProducts : checkDiets();
  
  return productsToDisplay;
}
  
//Actions:
export const {addProduct, removeProduct} = productsSlice.actions

//Reducer:
export default productsSlice.reducer