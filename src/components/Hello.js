import React from 'react';
import DietSelection from '../features/diets/DietSelection';

function Hello() {
  


  return (
    <>
      <header>
        <h1>Full fridge seems more troubling than an empty one?</h1>
        <h2>With this app I'll help you find a perfect recipe.
          Just give me your preferences, show what's in your fridge and I've got you covered!
        </h2>
      </header>
      <main>
        <DietSelection />
      </main>
    </>
  )
}

export default Hello