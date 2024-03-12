import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {Container, Col, Row, Image, Badge } from 'react-bootstrap';
import FoodRestriction from './FoodRestriction';
import recipeImg from '../../img/recipeImg.png';


function DisplayedRecipe({recipe}) {
    
    const products = useSelector(state => state.products);
    
    const  {name, ingredients, preparation} = recipe;
    
    const [prepDescription, setPrepDescription] = useState(preparation.slice(0,30)+"...");
    const [moreClicked, setMoreClicked] = useState(false);

    const handleShowMore = () => {
        moreClicked ? setPrepDescription(preparation.slice(0, 30) + "...") : setPrepDescription(preparation);
        setMoreClicked(!moreClicked);
    }
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
    
    //

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
                {!glutenfree && <FoodRestriction diet='glutenfree' />}
                {!dairyfree && <FoodRestriction diet='dairyfree' />}
                {!vegetarian && <FoodRestriction diet='vegetarian' />}
                </Row>
            </Col>
          </Row>
          <h5>Preparation:</h5>
          <p>{prepDescription}</p><h6>{moreClicked ? <Badge className="btn btn-sm btn-light" onClick={handleShowMore}>Hide full description</Badge> : <Badge className="btn btn-sm btn-light" onClick={handleShowMore}>Show more</Badge>}</h6>
          <h5>Ingredients:</h5>
          <ul>
            {productsFromThisRecipe.map((e) => <li key={`product ${e.id}`}>{e.name}</li>)}
          </ul>

      </Container>
    )
}

export default DisplayedRecipe;