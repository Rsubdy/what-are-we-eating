import React from 'react'
import ApiRecipe from './ApiRecipe'
import {Row, Container, Image} from 'react-bootstrap';
import acknowledgement from '../../img/Edamam_Badge_White.svg';

function RecipesFromApi(props) {
  
    const recipes = props.recipes;
    return (
    <Container>
        <Row>
        <Image src={acknowledgement} width={50} height={50} alt="acknowledgement Edamam API" />
        </Row>
        <Container className="d-flex justify-content-center">
        {recipes.map((recipe) => {
            return <ApiRecipe recipe={recipe} key={recipe.id} />
        })}
        </Container>
    </Container>
  )
}

export default RecipesFromApi