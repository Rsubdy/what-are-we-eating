import React, { useEffect, useState } from 'react'
import {useNavigate, Outlet, useFetcher} from 'react-router-dom'
import RecipesList from './RecipesList/RecipesList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllRecipes } from '../features/recipes/recipesSlice';
import { getFridgeFromLocalstorage, selectAllFridgeProducts } from '../features/fridge/fridgeSlice';
import RecipesFromApi from '../features/recipes/RecipesFromApi';

function Recipes() {
  
  const navigate = useNavigate();
  const allRecipes = useSelector(selectAllRecipes).recipes;
  const allFridgeProducts = useSelector(selectAllFridgeProducts);
  const localStorageFridge = localStorage.getItem('fridge');
  const dispatch = useDispatch();
  const [recipesFromLocalDb, setRecipesFromLocalDb] = useState([]);
  const [apiRecipesLoaded, setApiRecipesLoaded] = useState(false);
  const [headline, setHeadline] = useState();
  const allApiRecipes = useSelector(selectAllApiRecipes);
  //helper functions: 

  //selecting ingredients for fetching from public API:
  const fridgeProductsQuery = () => {
    let productsNamesArray = [];
    for (let product of allFridgeProducts){
      productsNamesArray.push(product.name.toLowerCase());
    }
    return productsNamesArray.join('%2C')
  }

  //fetching recipes from public API:

  const handleFetchRecipes = async () => {
    try {
      let ingredients = fridgeProductsQuery();
      alert(ingredients);
      if (ingredients.length === 0) {
        throw new Error()} else {
          let appID = 'dea6581f'
          let apiKey = '513e64bd34b3c29b478441b9681dd34e'
          let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appID}&app_key=${apiKey}&random=true&field=ingredientLines&field=label`

          const response = await fetch(url);
          if (response.ok){

          } else {
            alert('')
          }
        }
    } catch (error) {
      alert("Hmmm... Sometimes the web fails... Try again later!")

     setApiRecipesLoaded(false); 
    }
  }

  //selecting recipes from local database by ingredients in the fridge:

  
  useEffect(()=>{
      let result = [];
      for (let recipe of allRecipes){
            let fridgeProductsIds = [];
            for (let product of allFridgeProducts){
              fridgeProductsIds.push(product.id);
            }
            recipe.ingredients.every(ingredient => fridgeProductsIds.includes(ingredient.id)) && result.push(recipe);
          }
      setRecipesFromLocalDb(result);
  }, [allFridgeProducts, allRecipes])
  

useEffect(()=> {
  if (localStorageFridge !== null) {
  let payload = JSON.parse(localStorageFridge);
  dispatch(getFridgeFromLocalstorage(payload))};
}, [dispatch, localStorageFridge])


  return (
    <div>
      <main>
      <h1>Recipes from products in your fridge:</h1>
        {<div>
          <RecipesList recipes={recipesFromLocalDb} />
        </div>}
      </main>
      <aside>
        {<div>
          <h3>Need more inspiration based on your fridge products?</h3>
          {apiRecipesLoaded ? (<div>{headline}<RecipesFromApi recipes={allApiRecipes}/></div>) : <button onClick={()=>handleFetchRecipes()}>Get more recipes from the web!</button>}
        <Outlet />
        </div>}
      </aside>
    </div>
  )
}

export default Recipes


// https://rapidapi.com/spoonacular/api/recipe-food-nutrition/