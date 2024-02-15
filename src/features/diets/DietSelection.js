import React, { useEffect } from 'react';
import DietForm from './DietForm';
import { useDispatch, useSelector } from 'react-redux';
import { getDietPreferences, setPreferences } from './dietPreferencesSlice';


function DietSelection() {
  const dispatch = useDispatch();
  const storePreferences = useSelector(getDietPreferences);
//   let storedLocally = localStorage.getItem('preferences');
  
// useEffect(()=>{
//     if(storePreferences.excludedDiets[0] === 'initial' && storedLocally !== null){
//       dispatch(setPreferences(JSON.parse(storedLocally)))
//     }
//   }, [dispatch, storedLocally, storePreferences])
  
  return (
    <div>
        <p>Select your food preferences. This is the demo version with only 3 diets. Other could be easily introduced in the update!</p>
        <DietForm preferences={storePreferences} />
    </div>
  )
}

export default DietSelection