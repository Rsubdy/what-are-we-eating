import React from 'react'

function ApiRecipe(props) {

    const recipe = props.recipe;
    
  return (
    <div>
        <h2>{recipe}</h2>
    </div>
  )
}

export default ApiRecipe