import { createSlice } from "@reduxjs/toolkit";

const fridgeSlice = createSlice({
    name: "fridge",
    initialState: [],
    reducers: {
        addToFridge: (state, action) => {
            state.push(JSON.parse(action.payload));
        },
        removeFromFridge: (state, action) => {
            return state.filter((productsInFridge)=> productsInFridge.id !== action.payload.id)
        },
        fridgeAmountIncrement: (state, action) => {
            let product = state.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount++;
        },
        fridgeAmountDecrement: (state, action) => {
            let product = state.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount--;
        },
        fridgeSetAmount: (state, action) => {
            let product = state.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount = action.payload.amount;
        }
    },
       
})

//Selectors:

export const selectAllFridgeProducts = (state) => state.fridge;
export const selectFridgeProductByName = (state, name) => state.fridge.find((productsInFridge)=> productsInFridge.name.toLowerCase().includes(name.toLowerCase()));
export const selectFridgeProductById = (state, id) => state.fridge.find((productsInFridge) => productsInFridge.id === id);
export const selectFridgeProductsByDiet = (state, diet) => state.fridge.filter((productsInFridge) => productsInFridge.diet.glutenfree === diet.glutenfree && productsInFridge.diet.vegetarian === diet.vegetarian && productsInFridge.diet.dairyfree === diet.dairyfree);

//Actions: 

export const { addToFridge, removeFromFridge, fridgeAmountIncrement, fridgeAmountDecrement, fridgeSetAmount } = fridgeSlice.actions

//Reducer:
export default fridgeSlice.reducer