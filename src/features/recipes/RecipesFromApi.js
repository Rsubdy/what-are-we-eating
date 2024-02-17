import React from 'react'
import ApiRecipe from './ApiRecipe'

function RecipesFromApi(props) {
  
    const recipes = props.recipes;
    return (
    <div>
        {recipes.map((recipe) => {
            return <ApiRecipe recipe={recipe} key={recipe.id} />
        })}
    </div>
  )
}

export default RecipesFromApi