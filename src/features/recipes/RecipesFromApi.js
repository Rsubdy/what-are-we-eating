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
        <Row>
        {recipes.map((recipe) => {
            return <ApiRecipe recipe={recipe} key={recipe.id} />
        })}
        </Row>
    </Container>
  )
}

export default RecipesFromApi