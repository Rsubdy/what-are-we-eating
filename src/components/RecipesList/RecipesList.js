import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { selectAllRecipes } from '../../features/recipes/recipesSlice';
import DisplayedRecipe from './DisplayedRecipe';

function RecipesList() {


const allRecipes = useSelector(state=>state.recipes);

  return (
    <div>
      <h1>Recipes available from your products:</h1>
        {allRecipes.map((recipe)=>{
          return <DisplayedRecipe recipe={recipe} key={recipe.id} />
        })}
      </div>
  )
}

export default RecipesList;