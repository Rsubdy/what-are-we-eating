import React, {useState} from 'react';
import {Container, Card, Button, Badge} from 'react-bootstrap';

function ApiRecipe(props) {

    const {title, ingredients, link} = props.recipe;
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
      setShowMore(!showMore);
    }

  return (
    <Container>
        <Card style={{ width: '100%', height: '100%' }}>
          <Card.Body>
          <Card.Title style={{fontSize: '1.2rem'}}>
          {title}
          </Card.Title>  
          <Card.Text>
          <strong style={{fontSize: '0.9rem'}}>Ingredients:</strong>
          {showMore ? <Badge className="btn btn-sm btn-light" onClick={handleShowMore}>Hide full description</Badge> : <Badge className="btn btn-sm btn-light" onClick={handleShowMore}>Show more</Badge>}
          {showMore ? (ingredients.map(ingredient => <p key={ingredient.id} style={{fontSize: '0.9rem'}}>{ingredient}</p>)) : (ingredients.slice(0,5).map(ingredient => <p key={ingredient.id} style={{fontSize: '0.9rem'}}>{ingredient}</p>))}
          </Card.Text>
          <a href={link} target="blank"><Button variant="btn btn-sm btn-light border border-black border-2 fw-bold">Go to full recipe</Button></a>
          </Card.Body>
        </Card>        
      
    </Container>
  )
}

export default ApiRecipe