import React, {useState} from 'react';
import DietSelection from '../features/diets/DietSelection';
import { Container, Button, Collapse, Image, Row, Col } from 'react-bootstrap';
import fridgeStocked from '../img/fridgeStocked.png'
function Hello() {
  
const [helloVisibility, setHelloVisibility] = useState(true);
const [dietVisibility, setDietVisibility] = useState(false);

const toggleHello = () => {
  setHelloVisibility(false);
  setDietVisibility(true);
}

  return (
    <Container className="d-grid justify-content-center">
      <Collapse in={helloVisibility}>
        <div id="hello-collapse" aria-expanded={helloVisibility}>
          <Container>
          <Row>
          <h4 className="text-black">Full fridge seems more troubling than an empty one?</h4>
          </Row>
          <Row>
            <Col className="col-6"> 
              <p className="text-black">First declare your preferences, then show what's in your fridge and this app will find you a recipe!</p>
            </Col>
            <Col className="col-6">
              <Image className="border border-black border-4 m-6" src={fridgeStocked} alt="Stocked fridge" width="250" height="300" />
            </Col>
          </Row>
          
          <Button variant="btn btn-light border border-black border-3 fw-bold" aria-controls="hello-collapse diet-expand" onClick={()=>{toggleHello()}}>
            Let's start!
          </Button>
          
          </Container>
        </div>
      </Collapse>
      <Collapse in={dietVisibility}>
      <Container id="diet-expand" aria-expanded={dietVisibility} >
        <DietSelection />
      </Container>
      </Collapse>
    </Container>
  )
}

export default Hello