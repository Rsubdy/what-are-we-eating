import React from 'react'
import {useNavigate, Outlet} from 'react-router-dom'
import RecipeCreator from './RecipeCreator/RecipeCreator';
import RecipesList from './RecipesList/RecipesList';

function Recipes() {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Recipes</h1>
      <aside>
        {<div>
          <RecipesList /> <button onClick={() => navigate("./newrecipe", { replace: false })}>Add new recipe!</button> </div>|| <RecipeCreator />}
        <Outlet />
      </aside>
      <main>
        Recipes from products in your fridge:
      </main>
    </div>
  )
}

export default Recipes


// https://rapidapi.com/spoonacular/api/recipe-food-nutrition/