import { createSlice } from "@reduxjs/toolkit";

const fridgeSlice = createSlice({
    name: "fridge",
    initialState: {
        list: []
    },
    reducers: {
        addToFridge: (state, action) => {
            let productInFridge = state.list.find(product => product.name === JSON.parse(action.payload).name);
            productInFridge ? productInFridge.amount++ : state.list.push(JSON.parse(action.payload));
            localStorage.setItem('fridge', JSON.stringify(state.list));
        },
        removeFromFridge: (state, action) => {
            state.list = state.list.filter((productsInFridge)=> productsInFridge.id !== action.payload.id);
            localStorage.setItem('fridge', JSON.stringify(state.list));
        },
        fridgeAmountIncrement: (state, action) => {
            let product = state.list.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount++;
            localStorage.setItem('fridge', JSON.stringify(state.list));
        },
        fridgeAmountDecrement: (state, action) => {
            let product = state.list.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount--;
            localStorage.setItem('fridge', JSON.stringify(state.list));
        },
        fridgeSetAmount: (state, action) => {
            let product = state.list.find((productsInFridge)=> productsInFridge.id === action.payload.id);
            product.amount = action.payload.amount;
            localStorage.setItem('fridge', JSON.stringify(state.list));
        },
        getFridgeFromLocalstorage: (state, action) => {
            state.list = action.payload;
        },
        clearFridge: (state, action) => {
            state.list = action.payload;
            localStorage.setItem('fridge', JSON.stringify(state.list));
        }
    },
       
})

//Selectors:

export const selectAllFridgeProducts = (state) => state.fridge.list;
export const selectFridgeProductByName = (state, name) => state.fridge.list.find((productsInFridge)=> productsInFridge.name.toLowerCase().includes(name.toLowerCase()));
export const selectFridgeProductById = (state, id) => state.fridge.list.find((productsInFridge) => productsInFridge.id === id);
export const selectFridgeProductsByDiet = (state, diet) => state.fridge.list.filter((productsInFridge) => productsInFridge.diet.glutenfree === diet.glutenfree && productsInFridge.diet.vegetarian === diet.vegetarian && productsInFridge.diet.dairyfree === diet.dairyfree);

//Actions: 

export const { addToFridge, removeFromFridge, fridgeAmountIncrement, fridgeAmountDecrement, fridgeSetAmount, getFridgeFromLocalstorage, clearFridge } = fridgeSlice.actions

//Reducer:
export default fridgeSlice.reducer