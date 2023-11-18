import React from 'react';
import DietForm from './DietForm';
function DietSelection() {
  

  return (
    <div>
        <p>Select your food preferences. If you don't tick anything we'll assume you eat everything. No judging, food is food! Apologies to vegans and other preferences - we'll include your diets in the next update!</p>
        <DietForm />
    </div>
  )
}

export default DietSelection