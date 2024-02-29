import React from 'react'
import {useSelector} from 'react-redux';
import {Container, Col, Row, Button, Fade, Image, Modal } from 'react-bootstrap';

import recipeImg from '../../img/recipeImg.png';
import dairy from '../../img/dairy.jpg';
import gluten from '../../img/gluten.png';
import meat from '../../img/meat.png';



function DisplayedRecipe({recipe}) {
    
    const products = useSelector(state => state.products);
    
    let {name, ingredients, preparation} = recipe;

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
      <Container key={recipe.id}>
          <Row>
            <Col className="d-flex justify-content-start col-2">
                <Image src={recipeImg} width="50" height="50" alt="Dish icon"/>
            </Col>
            <Col className="d-flex justify-content-start col-3">
                <h4>{name}</h4>
            </Col>
            <Col className="d-flex justify-content-end col-7">
                <Row>
                    <p>Food restrictions:</p>
                </Row>
                <Row>
                {glutenfree === false && <Col><Image width="40" height="40" src={gluten} alt="glutenfree product" /></Col>}
                {vegetarian === false && <Col><Image width="40" height="40" src={meat} alt="vegetarian product" /></Col>}
                {dairyfree === false && <Col><Image width="40" height="40" src={dairy} alt="dairyfree product" /></Col>}
                </Row>
            </Col>
          </Row>
          <h5>Preparation:</h5>
          <p>{preparation.slice(0,50)+"..."}</p>
          <h5>Ingredients:</h5>
          <ul>
            {productsFromThisRecipe.map((e) => <li key={e.id}>{e.name}</li>)}
          </ul>
          <button>Show more...</button>

      </Container>
    )
}

export default DisplayedRecipe;