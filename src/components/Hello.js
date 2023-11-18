import React from 'react';
import DietSelection from '../features/diets/DietSelection';

function Hello() {
  return (
    <>
      <header>
        <h1>Plethora of nourishment yet a paucity of feasting inventions!</h1>
        <h2>...confused?</h2>
        <h3>Sometimes deciding on a meal to cook is a real nightmare, even if your fridge is stocked.
          Simple things shouldn't be as complicated as our greeting!
          With this app we'll help you find a perfect recipe in a few quick steps.
          Just give us your preferences, show us what's in your fridge and we've got you covered!
        </h3>
      </header>
      <main>
        <h4>
          Let's start with your diet. We wouldn't like you wasting time on browsing recipes of food you can't eat!
        </h4>
        <DietSelection />
      </main>
    </>
  )
}

export default Hello