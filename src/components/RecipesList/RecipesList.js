import React from 'react'
import DisplayedRecipe from './DisplayedRecipe';

function RecipesList(props) {


const recipes = props.recipes;
const noRecipes = 'Hmm... I guess we have no recipes from your products in our database...Try adding more products to the fridge or check for suggestions on the web below!'
  
return (
    <div>
        {recipes.length === 0 ? <p>{noRecipes}</p> : recipes.map((recipe)=>{
          return <DisplayedRecipe recipe={recipe} key={recipe.id} />
        })}
      </div>
  )
}

export default RecipesList;