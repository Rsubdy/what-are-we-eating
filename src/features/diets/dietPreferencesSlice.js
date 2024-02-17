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

            const add = (state, action) => {
                
                state[action.payload.excludedDiet] = true; 
                state.excludedDiets = [...state.excludedDiets, action.payload.excludedDiet];
                state.excludedProducts = [...state.excludedProducts, ...action.payload.excludedProducts];
                }
                
            const remove = (state, action) => {  
                state[action.payload.excludedDiet] = false;
                state.excludedDiets = state.excludedDiets.filter(diet => diet !== action.payload.excludedDiet);
                  
                //helper function removing excluded products from state
                const clearExcludedProducts = (stateArray, actionArray) => {
                    if ((actionArray.length === 0 ) || (stateArray.length === 0)) {
                      return stateArray }
                      else {
                        stateArray = stateArray.filter(element => element !== actionArray[0]);
                        actionArray.shift();
                        return clearExcludedProducts(stateArray, actionArray);
                      }
                  }
                  
                state.excludedProducts = clearExcludedProducts(state.excludedProducts, action.payload.excludedProducts);
                }
                
                state.excludedDiets.includes(action.payload.excludedDiet) ? remove(state, action) : add(state, action);
                },
        
        setPreferences: (state, action) => {
            const dietsToExclude = action.payload.excludedDiets;
            state.excludedProducts =  action.payload.excludedProducts;
            
            if (dietsToExclude.length !== 0) {
                if (dietsToExclude.includes('gluten-free')){
                    state.glutenfree = 'true';
                } else {
                state.glutenfree = false;
                }

                if (dietsToExclude.includes('dairy-free')){
                    state.glutenfree = true;
                } else {
                state.dairyfree = false;
                }
    
                state.vegetarian = dietsToExclude.includes('vegetarian');
            }
                
        },

        clearPreferences: (state) => {
            state.excludedDiets = [];
            state.excludedProducts = [];
            state.glutenfree = false;
            state.vegetarian = false;
            state.dairyfree = false;
        }
        
    }
}
)

//Selectors:

export const getDietPreferences = (state) => state.dietPreferences;
export const getExcludedDiets = (state) => state.dietPreferences.excludedDiets;
export const getExcludedproducts = (state) => state.dietPreferences.excludedProducts;


export const { toggleDietExclusion, setPreferences, clearPreferences} = dietPreferencesSlice.actions
export default dietPreferencesSlice.reducer