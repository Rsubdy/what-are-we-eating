import { createSlice } from "@reduxjs/toolkit";

const fridgeSlice = createSlice({
    name: "fridge",
    initialState: {
        fridgeproducts: []
    },
    reducers: {
        addToFridge: (state, action) => {
            let productInFridge = state.fridgeproducts.find(product => product.name === JSON.parse(action.payload).name);
            productInFridge ? productInFridge.amount++ : state.fridgeproducts.push(JSON.parse(action.payload));
            localStorage.setItem('fridge', JSON.stringify(state));
        },
        removeFromFridge: (state, action) => {
            state.fridgeproducts.filter((productsInFridge)=> productsInFridge.id !== action.payload.id);
            localStorage.setItem('fridge', JSON.stringify(state));
        },
        fridgeAmountIncrement: (state, action) => {
            let product = state.fridgeproducts.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount++;
            localStorage.setItem('fridge', JSON.stringify(state));
        },
        fridgeAmountDecrement: (state, action) => {
            let product = state.fridgeproducts.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount--;
            localStorage.setItem('fridge', JSON.stringify(state));
        },
        fridgeSetAmount: (state, action) => {
            let product = state.fridgeproducts.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount = action.payload.amount;
            localStorage.setItem('fridge', JSON.stringify(state));
        },
        getFridgeFromLocalstorage: (state, action) => {
            state.fridgeproducts = action.payload.fridgeproducts;
        }
    },
       
})

//Selectors:

export const selectAllFridgeProducts = (state) => state.fridge;
export const selectFridgeProductByName = (state, name) => state.fridge.find((productsInFridge)=> productsInFridge.name.toLowerCase().includes(name.toLowerCase()));
export const selectFridgeProductById = (state, id) => state.fridge.find((productsInFridge) => productsInFridge.id === id);
export const selectFridgeProductsByDiet = (state, diet) => state.fridge.filter((productsInFridge) => productsInFridge.diet.glutenfree === diet.glutenfree && productsInFridge.diet.vegetarian === diet.vegetarian && productsInFridge.diet.dairyfree === diet.dairyfree);

//Actions: 

export const { addToFridge, removeFromFridge, fridgeAmountIncrement, fridgeAmountDecrement, fridgeSetAmount, getFridgeFromLocalstorage } = fridgeSlice.actions

//Reducer:
export default fridgeSlice.reducer