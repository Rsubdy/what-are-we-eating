import React from 'react'
import {Container, Card, Button} from 'react-bootstrap';

function ApiRecipe(props) {

    const {title, ingredients, link} = props.recipe;

  return (
    <Container>
        <Card style={{ width: '15rem' }}>
          <Card.Body>
          <Card.Title style={{fontSize: '1.2rem'}}>
          {title}
          </Card.Title>  
          <Card.Text>
          <strong style={{fontSize: '0.9rem'}}>Ingredients:</strong>
          {ingredients.map(ingredient => <p key={ingredient.id} style={{fontSize: '0.9rem'}}>{ingredient}</p>)}
          </Card.Text>
          <Button variant="btn btn-light border border-black border-2 fw-bold">Go to full recipe</Button>
          </Card.Body>
        </Card>        
      
    </Container>
  )
}

export default ApiRecipe