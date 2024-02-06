import React from 'react'
import {useSelector} from 'react-redux';

function DisplayedRecipe({recipe}) {
    
    const products = useSelector(state => state.products);
    
    let {name, image, ingredients, preparation} = recipe;

    //Getting products from the store by their id's to get names and information about diets accepting them

    const getProductsFromRecipesIngredients = (recipe) => {
        const getIngredientById = (state, id) => state.find((ingredient)=> ingredient.id === id);
        const arrayOfProducts = [];
        ingredients.forEach((ingredient) => {
            const product = getIngredientById(products, ingredient.id);
            arrayOfProducts.push({
                name: product.name,
                amount: ingredient.amount,
                unit: product.unit,
                diet: {
                    glutenfree: product.diet.glutenfree,
                    vegetarian: product.diet.vegetarian,
                    dairyfree: product.diet.dairyFree
                }
            }
            );
        });
        return arrayOfProducts;
    }
    
    const productsFromThisRecipe = getProductsFromRecipesIngredients(recipe); 
    
    //Assigning diet types to the recipe
    
     const glutenfree = productsFromThisRecipe.every((product)=>product.diet.glutenfree === true);
     const dairyfree = productsFromThisRecipe.every((product)=>product.diet.dairyfree === true);
     const vegetarian = productsFromThisRecipe.every((product)=>product.diet.vegetarian === true);
    
    return (
      <div key={recipe.id}>
          <h3>{name}</h3>
          <img src={image} alt={name}/>
          {glutenfree === true && <img src='../../img/glutenFree.jpg' alt="glutenfree product" />}
          {vegetarian === true && <img src='../../img/vegetarian.jpg' alt="vegetarian product" />}
          {dairyfree === true && <img src='../../img/dairyFree.jpg' alt="dairyfree product" />}
          <h4>Preparation:</h4>
          <p>{preparation.slice(0,50)+"..."}</p>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.amount}
            {productsFromThisRecipe.map((e) => <li key={e.id}>{e.name}, {e.amount} {e.amount < 1 ? e.unit : e.unit+"s"} </li>)}
          </ul>
          <button>Show more...</button>

      </div>
    )
}

export default DisplayedRecipe;