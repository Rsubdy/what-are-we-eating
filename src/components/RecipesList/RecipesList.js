import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { selectAllRecipes } from '../../features/recipes/recipesSlice';
import DisplayedRecipe from './DisplayedRecipe';

function RecipesList() {


const allRecipes = useSelector(state=>state.recipes);

  return (
    <div>
      <h1>Recipes available from your products:</h1>
        {allRecipes.map((e)=>{
          return <DisplayedRecipe recipe={e} key={e.id} />
        })}
      </div>
  )
}

export default RecipesList;