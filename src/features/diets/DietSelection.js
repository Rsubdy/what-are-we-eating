import React from 'react';
import DietForm from './DietForm';
import { useSelector } from 'react-redux';
import { getDietPreferences } from './dietPreferencesSlice';
import { Container, Row, Button } from 'react-bootstrap';


function DietSelection() {
  const storePreferences = useSelector(getDietPreferences);
//   let storedLocally = localStorage.getItem('preferences');
  
// useEffect(()=>{
//     if(storePreferences.excludedDiets[0] === 'initial' && storedLocally !== null){
//       dispatch(setPreferences(JSON.parse(storedLocally)))
//     }
//   }, [dispatch, storedLocally, storePreferences])
  

  return (
    <Container className="container d-flex justify-content-center">
      <Row className="d-grid justify-content-center">
        <h3 className="text-center">Select your food preferences:</h3>        
        <DietForm preferences={storePreferences} />
      </Row>
    </Container>
  )
}

export default DietSelection