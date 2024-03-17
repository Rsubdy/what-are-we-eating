import React from 'react'
import ApiRecipe from './ApiRecipe'
import {Row, Col, Container, Image} from 'react-bootstrap';
import acknowledgement from '../../img/Edamam_Badge_White.svg';

function RecipesFromApi(props) {
  
    const recipes = props.recipes;
    return (
    <Container>
        <Row>
        <h2 className="text-center">Inspirations from the web:</h2>
        </Row>
        <Row>
        <Image src={acknowledgement} width={50} height={50} alt="acknowledgement Edamam API" />
        </Row>
        <Row style={{flexWrap: 'wrap'}} className="g-0 p-0">
            {recipes.map((recipe) => {
                return <Col className="col-4 p-0 m-0" style={{height:'100%'}}><ApiRecipe recipe={recipe} key={recipe.id} /></Col>
            })}
        </Row>
    </Container>
  )
}

export default RecipesFromApi