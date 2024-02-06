import React, { useState} from 'react'
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

let storedPreferences = props.preferences;
let storePreferences = props.storePreferences;
let { excludedProducts } = storedPreferences;

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
    
const submitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('preferences', JSON.stringify(storePreferences));
        const createSummary = () => {
            let summary;
            
            switch (excludedProducts.length) {
                case 0 :
                summary = excludedProducts[0];
                break;
    
                case 1 :
                summary = excludedProducts.join(' and ');
                break;
    
                default:
                {let lastItem = excludedProducts.pop();
                summary = excludedProducts.join(', ') + ' and ' + lastItem;}
            }
            return "Got it! So you don't eat: " + summary + '.';
        }
    
        setSummary(createSummary());        
    }    




    return (
    <div>
        <form id='dietForm'>
            <p>My diet is:</p>
            <DietButton dietName='glutenfree' storedPreferences={storedPreferences} onChange={handleDietExclusion}/>
            <button type='submit' onClick={submitHandler}>That's it!</button>
        </form>
        {summary && (<div><h3>{summary}</h3><button onClick={()=> navigate('/fridge')}>Let's go to the fridge!</button></div>)}
    </div>
  )
}

export default DietForm