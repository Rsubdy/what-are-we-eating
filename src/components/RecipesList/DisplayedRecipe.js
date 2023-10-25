import React from 'react'
import {useSelector} from 'react-redux';

function DisplayedRecipe({recipe}) {
    
    const products = useSelector(state => state.products);
    
    let {name, image, ingredients, preparation} = recipe;

    //Getting products from the store by their id's to get names and information about diets accepting them

    const getProductsFromRecipesIngredients = (recipe) => {
        const getIngredientById = (state, id) => state.find((e)=> e.id === id);
        const arrayOfProducts = [];
        ingredients.forEach((e) => {
            const product = getIngredientById(products, e.id);
            arrayOfProducts.push({
                name: product.name,
                amount: e.amount,
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
    
     const glutenfree = productsFromThisRecipe.every((e)=>e.diet.glutenfree === true);
     const dairyfree = productsFromThisRecipe.every((e)=>e.diet.dairyfree === true);
     const vegetarian = productsFromThisRecipe.every((e)=>e.diet.vegetarian === true);
    
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