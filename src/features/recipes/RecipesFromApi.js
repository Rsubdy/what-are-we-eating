import React from 'react'
import ApiRecipe from './ApiRecipe'

function RecipesFromApi(recipes) {
  return (
    <div>
        {recipes.map((recipe)=><ApiRecipe recipe={recipe} id={recipe.id}/>)}
    </div>
  )
}

export default RecipesFromApi