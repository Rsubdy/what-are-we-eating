import React from 'react'
import DisplayedRecipe from './DisplayedRecipe';

function RecipesList(props) {


const recipes = props.recipes;

  return (
    <div>
        {recipes.map((recipe)=>{
          return <DisplayedRecipe recipe={recipe} key={recipe.id} />
        })}
      </div>
  )
}

export default RecipesList;