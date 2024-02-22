import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleDietExclusion } from './dietPreferencesSlice';
import DietButton from '../../components/DietButton/DietButton';
import { ToggleButtonGroup, Button, Container, Popover, OverlayTrigger, Row } from 'react-bootstrap';

function DietForm(props) {

//hooks:

const dispatch = useDispatch();
const navigate = useNavigate();
const [summary, setSummary] = useState('');

// props:

let storePreferences = props.preferences;
let excludedProducts = storePreferences.excludedProducts;

//helper functions:

const handleDietExclusion = useCallback((dietName) => {
    
    const constructDietPayload = (dietName) => {
    
    let productsToExcludeArray = [];

    switch (dietName) {
        case 'glutenfree':
        productsToExcludeArray = ['wheat', 'rye', 'barley'];
        break;
        case 'dairyfree':
        productsToExcludeArray = ['milk'];
        break;
        case 'vegetarian':
        productsToExcludeArray = ['meat', 'eggs'];
        break;
        default:
        break;
    }

    let payload = {
        diet: dietName,
        excludedDiet: dietName,
        excludedProducts: productsToExcludeArray
    }

return payload;
}

    dispatch(toggleDietExclusion(constructDietPayload(dietName)));
}, [dispatch]);

const createSummary = useCallback(() => {
    
    let summary;
    
    switch (excludedProducts.length) {
        case 0 :

        return 'You don\'t exclude any food type.'
        
        case 1 :
        summary = excludedProducts[0];
        break;

        case 2 :
        summary = excludedProducts.join(' and ');
        break;

        default:
        {let copyOfProducts = [...excludedProducts];
        let lastItem = copyOfProducts.pop();
        summary = copyOfProducts.join(', ') + ' and ' + lastItem;}
    }
    return 'Got it! So you don\'t eat: ' + summary + '.';
}, [excludedProducts]);


useEffect(()=>{
    setSummary(createSummary(storePreferences));
    // localStorage.setItem('preferences', JSON.stringify(storePreferences));
}, [setSummary, createSummary, storePreferences])

const dietDemoInfo = (
    <Popover id="dietInfos">
          <Popover.Header as="h3">This is only a portfolio project with few diets.</Popover.Header>
            <Popover.Body>
              Other diet preferences could be easily introduced!
            </Popover.Body>
            </Popover>
  );
  

    return (
        <Container className="d-grid justify-content-center">
            <div className="row d-grid justify-content-center">
            <ToggleButtonGroup type="checkbox" className="d-block">
                <DietButton dietName='glutenfree' storePreferences={storePreferences} onClick={handleDietExclusion}/>
                <DietButton dietName='dairyfree' storePreferences={storePreferences} onClick={handleDietExclusion}/>
                <DietButton dietName='vegetarian' storePreferences={storePreferences} onClick={handleDietExclusion}/>
                <OverlayTrigger trigger="click" placement="right" overlay={dietDemoInfo}><Button variant="btn btn-info text-white fw-bold">?</Button></OverlayTrigger>
            </ToggleButtonGroup>
            </div>
            <div className="row d-grid justify-content-center">
            <p className="text fw-bold d-block">{summary}</p>
            </div>
            <div className="row d-grid justify-content-center">
            <Button variant="dark btn mb-2 border border-2 border-black text fw-bold" onClick={()=> navigate('/fridge')}>Let's go to the fridge!</Button>
            </div>
        </Container>
  )
}

export default DietForm