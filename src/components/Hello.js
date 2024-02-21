import React from 'react';
import DietSelection from '../features/diets/DietSelection';
import { Container } from 'react-bootstrap';

function Hello() {
  


  return (
    <>
      <header>
        <h1 class="text-black">Full fridge seems more troubling than an empty one?</h1>
        <h2>With this app I'll help you find a perfect recipe.
          Just give me your preferences, show what's in your fridge and I've got you covered!
        </h2>
      </header>
      <Container className="bg-white text-black border border-black border-5 rounded bg-opacity-75">
        <DietSelection />
      </Container>
    </>
  )
}

export default Hello