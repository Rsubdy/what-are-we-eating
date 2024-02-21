import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleDietExclusion } from './dietPreferencesSlice';
import DietButton from '../../components/DietButton/DietButton';
import { ToggleButtonGroup, Button, Container } from 'react-bootstrap';

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

    return (
    <div>
        <form id='dietForm'>
            <p>Your diet is:</p>

        <ToggleButtonGroup type="checkbox">
            <DietButton dietName='glutenfree' storePreferences={storePreferences} onClick={handleDietExclusion}/>
            <DietButton dietName='dairyfree' storePreferences={storePreferences} onClick={handleDietExclusion}/>
            <DietButton dietName='vegetarian' storePreferences={storePreferences} onClick={handleDietExclusion}/>
        </ToggleButtonGroup>
        </form>
        {summary && (<Container ><p className="text fw-bold">{summary}</p><Button variant="danger text fw-bold" onClick={()=> navigate('/fridge')}>Let's go to the fridge!</Button></Container>)}
    </div>
  )
}

export default DietForm