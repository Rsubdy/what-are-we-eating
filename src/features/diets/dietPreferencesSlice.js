import { createSlice } from "@reduxjs/toolkit";

const dietPreferencesSlice= createSlice({
    name: "dietPreferences",
    initialState: {
        excludedDiets: [],
        excludedProducts: [],
        glutenfree: false,
        vegetarian: false,
        dairyfree: false,

    },
    reducers: {
        toggleDietExclusion: (state, action) => {
            let excludedDiet = action.payload.diet;
            state[excludedDiet] = !state[excludedDiet];
            
            if (state[excludedDiet]){
                state.excludedDiets = [...state.excludedDiets, action.payload.excludedDiet];
                state.excludedProducts = [...state.excludedProducts, ...action.payload.excludedProducts];
            } else {
                    state.excludedDiets = state.excludedDiets.filter((diet) => diet !== excludedDiet);
                    
                    // function filtering excluded products array of the products that are no longer excluded
                    const clearOfExclusions = (arrayToClear, arrayOfProductsToClear) => {

                        let result = arrayToClear.filter(product => product !== arrayOfProductsToClear[0]);
                        arrayOfProductsToClear.shift();
                        return arrayOfProductsToClear.length === 0 ? result : clearOfExclusions(result, arrayOfProductsToClear);
                        }

                    state.excludedProducts = clearOfExclusions(state.excludedProducts, action.payload.excludedProducts);
                }
        },
        
        setPreferences: (state, action) => {
            const dietsToExclude = action.payload.excludedDiets;
            state.excludedDiets = dietsToExclude;
            state.excludedProducts =  action.payload.excludedProducts;
            
            if (dietsToExclude.length !== 0) {
                state.glutenfree = dietsToExclude.includes('glutenfree');
                state.dairyfree = dietsToExclude.includes('dairyfree');
                state.vegetarian = dietsToExclude.includes('vegetarian');
            }
                
        }
        
    }  
})

//Selectors:

export const getDietPreferences = (state) => state.dietPreferences;
export const getExclusions = (state) => state.dietPreferencesSlice.exclusions;
export const getExcludedproducts = (state) => state.dietPreferencesSlice.excludedProducts;


export const { toggleDietExclusion, setPreferences } = dietPreferencesSlice.actions
export default dietPreferencesSlice.reducer