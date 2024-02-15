import { createSlice } from "@reduxjs/toolkit";

const dietPreferencesSlice= createSlice({
    name: "dietPreferences",
    initialState: {
        excludedDiets: ['initial'],
        excludedProducts: [],
        glutenfree: false,
        vegetarian: false,
        dairyfree: false,
    },
    reducers: {
        toggleDietExclusion: (state, action) => {
            let excludedDiet = action.payload.diet;
            state[excludedDiet] = !state[excludedDiet];
            state.excludedDiets = state.excludedDiets.filter((element) => element !== 'initial');
            state.excludedProducts = [...state.excludedProducts, action.payload.excludedProducts];
            
            if (state.excludedDiets.includes(action.payload.excludedDiet)){
                state.excludedDiets = state.excludedDiets.filter((diet) => diet !== action.payload.excludedDiet)
            } else {
                state.excludedDiets = [...state.excludedDiets, action.payload.excludedDiet]
            }
            
           // helper function filtering excluded products array of the products that are no longer excluded
            
            const clearOfExclusions = (arrayToClear, arrayOfProductsToClear) => {
            
            let result = arrayToClear.filter(product => product !== arrayOfProductsToClear[0]);
            arrayOfProductsToClear.shift();
            return arrayOfProductsToClear.length === 0 ? result : clearOfExclusions(result, arrayOfProductsToClear);
        }
            // state.excludedProducts = clearOfExclusions(state.excludedProducts, action.payload.excludedProducts);
    },
        
        // setPreferences: (state, action) => {
        //     const dietsToExclude = action.payload.excludedDiets;
        //     state.excludedProducts =  action.payload.excludedProducts;
            
        //     if (dietsToExclude.length !== 0) {
        //         if (dietsToExclude.includes('gluten-free')){
        //             state.glutenfree = 'true';
        //         } else {
        //         state.glutenfree = false;
        //         }

        //         if (dietsToExclude.includes('dairy-free')){
        //             state.glutenfree = true;
        //         } else {
        //         state.dairyfree = false;
        //         }
    
        //         state.vegetarian = dietsToExclude.includes('vegetarian');
        //     }
                
        // },

        clearPreferences: (state) => {
            state.excludedDiets = ['initial'];
            state.excludedProducts = [];
            state.glutenfree = false;
            state.vegetarian = false;
            state.dairyfree = false;
        }
        
    }  
})

//Selectors:

export const getDietPreferences = (state) => state.dietPreferences;
export const getExcludedDiets = (state) => state.dietPreferences.excludedDiets;
export const getExcludedproducts = (state) => state.dietPreferences.excludedProducts;


export const { toggleDietExclusion, setPreferences, clearPreferences} = dietPreferencesSlice.actions
export default dietPreferencesSlice.reducer