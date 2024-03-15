import React from 'react'
import ApiRecipe from './ApiRecipe'
import {Row, Col, Container, Image} from 'react-bootstrap';
import acknowledgement from '../../img/Edamam_Badge_White.svg';

function RecipesFromApi(props) {
  
    const recipes = props.recipes;
    return (
    <Container>
        <Row>
        <Image src={acknowledgement} width={50} height={50} alt="acknowledgement Edamam API" />
        </Row>
        <Container className="d-flex">
        {recipes.map((recipe) => {
            return <Col className="col-1"><ApiRecipe recipe={recipe} key={recipe.id} /></Col>
        })}
        </Container>
    </Container>
  )
}

export default RecipesFromApi