import React, {useState} from 'react';
import DietSelection from '../features/diets/DietSelection';
import { Container, Button, Collapse } from 'react-bootstrap';

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
          <h4 class="text-black">Full fridge seems more troubling than an empty one?</h4>
          <p class="text-black">This app will help you find a perfect recipe.
            Just give me your preferences, show what's in your fridge and I've got you covered!
          </p>
          <Button variant="btn btn-light border border-black border-3 fw-bold" aria-controls="hello-collapse diet-expand" onClick={()=>{toggleHello()}}>
            Let's start!
          </Button>
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