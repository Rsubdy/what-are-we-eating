import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom'
import RecipesList from './RecipesList/RecipesList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllRecipes, selectAllApiRecipes, addApiRecipe} from '../features/recipes/recipesSlice';
import { getFridgeFromLocalstorage, selectAllFridgeProducts } from '../features/fridge/fridgeSlice';
import { getExcludedDiets } from '../features/diets/dietPreferencesSlice';
import RecipesFromApi from '../features/recipes/RecipesFromApi';
import {Button} from 'react-bootstrap';
import ModalAlert from './ModalAlert/ModalAlert';

function Recipes() {
  
  
  const allRecipes = useSelector(selectAllRecipes);
  const allFridgeProducts = useSelector(selectAllFridgeProducts);
  const localStorageFridge = localStorage.getItem('fridge');
  const dispatch = useDispatch();
  const [recipesFromLocalDb, setRecipesFromLocalDb] = useState([]);
  const [recipesFromApi, setRecipesFromApi] = useState();
  const [apiRecipesLoaded, setApiRecipesLoaded] = useState(false);
  const [headline, setHeadline] = useState();
  const allApiRecipes = useSelector(selectAllApiRecipes);
  const excludedDiets = useSelector(getExcludedDiets);
  const localStorageApiRecipes = localStorage.getItem('recipesFromApi');
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  //helper functions: 

// rewriting diet names for query convention:

const rewriteDietNamesForQuery = (excludedDiets) => {

let dietNamesForQuery = [];

  if (excludedDiets.length === 0) {
    return dietNamesForQuery;
  } else {
    
for (let name of excludedDiets){

  switch (name){
    case 'glutenfree' :
    dietNamesForQuery.filter(name => name !== 'glutenfree');
    dietNamesForQuery.push('gluten-free');
    break;
    case 'dairyfree' :
    dietNamesForQuery.filter(name => name !== 'dairyfree');
    dietNamesForQuery.push('dairy-free');
    break;
    case 'vegetarian' :
    dietNamesForQuery.push('vegetarian');
    break;
    default:
    dietNamesForQuery = [];
    break;
}}
return dietNamesForQuery}
}

const dietPreferences = rewriteDietNamesForQuery(excludedDiets);
  
//selecting a maximum of 5 ingredients for fetching from public API:
  const fridgeProductsQuery = () => {
    let productsNamesArray = [];
    let maxProducts = allFridgeProducts.length;
    (allFridgeProducts.length > 5) && (maxProducts = 4);
    for (let product = 0; product < maxProducts; product++){
      productsNamesArray.push(allFridgeProducts[product].name.toLowerCase());
    }
    return productsNamesArray.join('%2C')
  }

  //fetching recipes from public API:

  const handleFetchRecipes = async () => {
    
    try {
      let ingredients = fridgeProductsQuery();
      if (ingredients.length === 0) {
        setAlertTitle('No products in your fridge!');
        setAlertMessage('Add some products and try again.');
        setShowAlert(true);

      }
        
        else {
          const appID = 'dea6581f';
          const apiKey = '513e64bd34b3c29b478441b9681dd34e';
          let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appID}&app_key=${apiKey}&random=true&field=ingredientLines&field=label&field=url`
          dietPreferences.length !== 0 && (url += '&health='+dietPreferences.join('&health='));
          const response = await fetch(url);
          let payload = [];
          if (response.ok){
            setAlertTitle('New recipes coming your way!');
            setAlertMessage('Fetching inspirations to use your ingredients with some additional condiments!');
            setShowAlert(true);
            let json = await response.json();
            let recipesArray = await json.hits;
            for (let i=0; i<5; i++){
              let newRecipe = {
                title: await recipesArray[i].recipe.label,
                ingredients: await recipesArray[i].recipe.ingredientLines,
                link: await recipesArray[i].recipe.url
              }
              payload.push(newRecipe);
            }
            localStorage.setItem('recipesFromApi', JSON.stringify(payload));
            dispatch(addApiRecipe(payload));
            setHeadline('Here are some inspirations from the web! You may not have all the ingredients, but you certainly have some!');
            
          } else {
            throw new Error('Error while getting results!')
          }
        }
    } catch (error) {
      setAlertTitle('Hmmm... Something has gone wrong...');
      setAlertMessage('Maybe clear your settings and try again?');
      setShowAlert(true);
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
  
// updating the recipes list if there are some products in the fridge stored in local storage

useEffect(()=> {
  if (localStorageFridge !== null) {
  let payload = JSON.parse(localStorageFridge);
  dispatch(getFridgeFromLocalstorage(payload))};
}, [dispatch, localStorageFridge])

useEffect(()=> {
  if (localStorageApiRecipes !== null) {
  let payload = JSON.parse(localStorageApiRecipes);
  setRecipesFromApi(payload);
  setApiRecipesLoaded(true);} else {
    setRecipesFromApi();
    setApiRecipesLoaded(false);
  }
}, [dispatch, localStorageFridge, localStorageApiRecipes, allFridgeProducts])

// loading list of recipes if fetching from API was succesfull
useEffect(()=>{
  if (allApiRecipes.length !== 0){
  setRecipesFromApi(allApiRecipes);
  setApiRecipesLoaded(true);
} else {
  setApiRecipesLoaded(false);
  setHeadline();
}
}, [recipesFromApi, allApiRecipes, allFridgeProducts])

  return (
    <div>
      <main>
      {showAlert && <ModalAlert show={showAlert} title={alertTitle} message={alertMessage}/>}
      <h2 className="text-center">Recipes from products in your fridge:</h2>
        {<div>
          <RecipesList recipes={recipesFromLocalDb} />
        </div>}
      </main>
      <aside>
        {<div>
          {headline !== null ? headline : <h3>Need more inspiration based on your fridge products?</h3>}
          {apiRecipesLoaded ? (<div><RecipesFromApi recipes={recipesFromApi}/></div>) : <Button className="btn btn-light" onClick={()=>handleFetchRecipes()}>Get more recipes from the web!</Button>}
        <Outlet />
        </div>}
      </aside>
    </div>
  )
}

export default Recipes