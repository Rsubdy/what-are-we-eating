import { createSlice } from "@reduxjs/toolkit";
import initialRecipesData from "./initialRecipesData";

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

export const selectRecipeByDiet = (state, diets, fridgeProducts) => {
    const {glutenfree, vegetarian, dairyfree} = diets;
    const productsByDiet = fridgeProducts.filter((e) => e.diet.glutenfree === glutenfree && e.diet.vegetarian === vegetarian && e.diet.dairyfree === dairyfree);
    const result = [];
    state.recipes.forEach((recipe)=>{
        for (const ingredient of recipe.ingredients) {

        }
    })

    
}// Display recipes that match food preferences

export const selectRecipeByIngredients = (state, action) => {} // Display recipes for meals that can be made from the products in the fridge

// Actions: 
export const { addRecipe, getRecipeById, } = recipesSlice.actions
export default recipesSlice.reducer