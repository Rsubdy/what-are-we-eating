import React, { useEffect } from 'react';
import DietForm from './DietForm';
import { useDispatch, useSelector } from 'react-redux';
import { getDietPreferences, setPreferences } from './dietPreferencesSlice';


function DietSelection() {
  const dispatch = useDispatch();
  const storePreferences = useSelector(getDietPreferences);
  let storedLocally = localStorage.getItem('preferences');
  
useEffect(()=>{
    (storePreferences.excludedDiets[0] === 'initial' && storedLocally !== null ) && dispatch(setPreferences(JSON.parse(storedLocally)));
  }, [dispatch, storedLocally, storePreferences])
  
  return (
    <div>
        <p>Select your food preferences. If you don't tick anything I'll assume you eat everything. No judging, food is food! Alas in this demo version I've prepared only for 3 food preferences. Other diets could be easily introduced in the update!</p>
        <DietForm preferences={storePreferences} />
    </div>
  )
}

export default DietSelection