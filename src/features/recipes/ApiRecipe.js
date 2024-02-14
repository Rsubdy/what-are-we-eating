import React from 'react'

function ApiRecipe(props) {

    const {title, ingredients, link} = props.recipe;

  return (
    <div>
        <h2>{title}</h2>
        <h3>Ingredients:</h3> {ingredients.map(ingredient => <p key={ingredient.id}>{ingredient}</p>)}
        <h4><a href={link} target="blank">Go to the full recipe!</a></h4>
        <hr />
    </div>
  )
}

export default ApiRecipe