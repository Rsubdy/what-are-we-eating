import { createSlice } from "@reduxjs/toolkit";
import initialRecipesData from "./initialRecipesData";

const recipesSlice= createSlice({
    name: "recipes",
    initialState: {
      localRecipes: initialRecipesData,
      apiRecipes: []
    },
    reducers: {
      addRecipe: (state, action) => {
        state.localRecipes.push(JSON.parse(action.payload));
      },
      removeRecipe: (state, action) => {
        return state.localRecipes.filter((e)=> e.id !== action.payload.id);
      },
      addApiRecipe: (state, action) => {
        state.apiRecipes = action.payload;
      },
      clearApiRecipes: (state) => {
        state.apiRecipes = [];
      }
    }
  })

// Selectors: 
export const selectAllRecipes = (state) => state.recipes.localRecipes;
export const selectRecipeById = (state, id) => state.recipes.localRecipes.filter((e)=> e.id === id); // Get recipe to display details
export const selectRecipeByName = (state, name) => state.recipes.localRecipes.filter((e)=> e.name.toLowerCase().contains(name.toLowerCase())); // Search recipe by name
export const selectAllApiRecipes = (state) => state.recipes.apiRecipes;

// Actions: 
export const { addRecipe, getRecipeById, addApiRecipe, clearApiRecipes} = recipesSlice.actions
export default recipesSlice.reducer