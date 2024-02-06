import React from 'react';
import DietSelection from '../features/diets/DietSelection';

function Hello() {
  


  return (
    <>
      <header>
        <h1>Full fridge seems more troubling than an empty one?</h1>
        <h2>Sometimes deciding on a meal to cook is a real nightmare, even if your fridge is stocked.
          With this app I'll help you find a perfect recipe in a few quick steps.
          Just give me your preferences, show me what's in your fridge and I've got you covered!
        </h2>
      </header>
      <main>
        <h3>
          Let's start with your diet. I wouldn't like you to waste time on browsing recipes with products you can't eat!
        </h3>
        <DietSelection />
      </main>
    </>
  )
}

export default Hello