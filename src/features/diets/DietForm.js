import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleDietExclusion } from './dietPreferencesSlice';
import DietButton from '../../components/DietButton/DietButton';


function DietForm(props) {

//hooks:

const dispatch = useDispatch();
const navigate = useNavigate();
const [summary, setSummary] = useState('');

// props:

let storePreferences = props.preferences;
let { excludedProducts } = storePreferences;

//helper functions:

const handleDietExclusion = (dietName) => {
    
    const constructDietPayload = (dietName, productsToExclude) => {
        let payload = {
            diet: dietName,
            excludedDiet: dietName,
            excludedProducts: productsToExclude
        }
    
    return payload;
    }
    
    let productsToExcludeArray;

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
            return;
    }

    dispatch(toggleDietExclusion(constructDietPayload(dietName, productsToExcludeArray)));
}

const createSummary = useCallback((storePreferences) => {
    
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

let submitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('preferences', JSON.stringify(storePreferences));
        setSummary(createSummary());        
    }    

useEffect(()=>{
    setSummary(createSummary(storePreferences));
}, [setSummary, createSummary, storePreferences])

    return (
    <div>
        <form id='dietForm'>
            <p>My diet is:</p>
            <DietButton dietName='glutenfree' storePreferences={storePreferences} onClick={handleDietExclusion}/>
            <DietButton dietName='dairyfree' storePreferences={storePreferences} onClick={handleDietExclusion}/>
            <DietButton dietName='vegetarian' storePreferences={storePreferences} onClick={handleDietExclusion}/>
            <button type='submit' onClick={submitHandler}>That's it!</button>
        </form>
        {summary && (<div><h3>{summary}</h3><button onClick={()=> navigate('/fridge')}>Let's go to the fridge!</button></div>)}
    </div>
  )
}

export default DietForm