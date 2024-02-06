import React from 'react';
import DietForm from './DietForm';
import { useSelector, useDispatch } from 'react-redux';
import { getDietPreferences, setPreferences } from './dietPreferencesSlice';


function DietSelection() {
  
  const dispatch = useDispatch();
  const storePreferences = useSelector(getDietPreferences);

  localStorage.getItem('preferences') === null ? localStorage.setItem('preferences', JSON.stringify(storePreferences)) : ;
  let localStoragePreferences = JSON.parse(localStorage.getItem('preferences'));
  
  dispatch(setPreferences(JSON.parse(localStorage.getItem('preferences'))))
  return (
    <div>
        <p>Select your food preferences. If you don't tick anything I'll assume you eat everything. No judging, food is food! Apologies to vegans and other preferences - I'll include your diets in the next update!</p>
        <DietForm preferences={localStoragePreferences} storePreferences={storePreferences}/>
    </div>
  )
}

export default DietSelection