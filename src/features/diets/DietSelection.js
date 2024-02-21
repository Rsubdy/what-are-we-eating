import React from 'react';
import DietForm from './DietForm';
import { useSelector } from 'react-redux';
import { getDietPreferences } from './dietPreferencesSlice';
import { Container, Row, Col, Button, Popover, PopoverContent, OverlayTrigger } from 'react-bootstrap';


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
      <Row>
        <h2>Select your food preferences:</h2>
        <OverlayTrigger trigger="click" placement="right" overlay="{dietDemoInfo}"><Button variant="button-sm button-info">?</Button></OverlayTrigger>
        <Popover id="dietInfos">
        <Popover.Header as="h3">This is only a portfolio project with few diets.</Popover.Header>
          <Popover.Body>
            Other diet preferences could be easily introduced in the update!
          </Popover.Body>
          </Popover>
        
        <DietForm preferences={storePreferences} />
      </Row>
    </Container>
  )
}

export default DietSelection