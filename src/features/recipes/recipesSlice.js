import { createSlice } from "@reduxjs/toolkit";
import initialRecipesData from "./initialRecipesData";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllFridgeProducts } from "../fridge/fridgeSlice";

const recipesSlice= createSlice({
    name: "recipes",
    initialState: initialRecipesData,
    reducers: {
      addRecipe: (state, action) => {
        state.push(JSON.parse(action.payload));
      },
      removeRecipe: (state, action) => {
        return state.filter((e)=> e.id !== action.payload.id);
      }
    }
})

// Selectors: 
export const selectAllRecipes = (state) => state;
export const selectRecipeById = (state, id) => state.filter((e)=> e.id === id); // Get recipe to display details
export const selectRecipeByName = (state, name) => state.filter((e)=> e.name.toLowerCase().contains(name.toLowerCase())); // Search recipe by name

// Actions: 
export const { addRecipe, getRecipeById} = recipesSlice.actions
export default recipesSlice.reducer