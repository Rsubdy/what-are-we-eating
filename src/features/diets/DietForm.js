import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function DietForm() {

const [preferences, setPreferences] = useState('');
const [dairyfree, setDairyfree] = useState(false);
const [glutenfree, setGlutenfree] = useState(false);
const [vegetarian, setVegetarian] = useState(false);
const foodOptions = [dairyfree, glutenfree, vegetarian];
let navigate = useNavigate();

const checkForExclusions = () => {
    let summary = 'Ok, so you ';
    
    if(foodOptions.some(exclusion => {
        let result;
        if (exclusion){
            result = true;
        }  
        return result;
    })){
        summary += 'don\'t eat ';
    } else {
        summary += 'don\'t exclude any foodtype';
    }
    
    let excluded = [];
    foodOptions.forEach((foodexclusion)=>{
        
        if(foodexclusion){
            excluded.push(foodexclusion);
        }
    });
    
    if (excluded.length>1){
        let excludedList = excluded.join(', ');
        summary = summary + excludedList + '.';
    } else {
        summary = summary + excluded + '.';
    }

    return summary;
}

const submitHandler = (event) => {
    event.preventDefault();
    const summary = checkForExclusions();
    setPreferences(summary);
}
  
    return (
    <div>
        <form id="dietForm">
            <p>My diet is:</p>
            <label htmlFor="vegetarian">Vegetarian (no meat!)
                <input
                    type='checkbox'
                    id='vegetarian'
                    onChange={() => {
                        if(vegetarian)
                        {setVegetarian(false)
                        } else {
                            setVegetarian('meat')
                        }}
                    }
                />
            </label>
            <label htmlFor='dairyfree'>Dairyfree (no milk!)
                <input 
                    type='checkbox'
                    id='dairyfree'
                    onChange={() => {
                        if(dairyfree)
                        {setDairyfree(false)
                        } else {
                            setDairyfree('milk')
                        }}
                    }
                />
            </label>
            <label htmlFor="glutenfree">Glutenfree (no wheat!)
                <input
                    type='checkbox'
                    id='glutenfree'
                    onChange={() => {
                        if(glutenfree)
                        {setGlutenfree(false)
                        } else {
                            setGlutenfree('wheat products')
                        }}
                    }
                />
            </label>
            <button type='submit' onClick={submitHandler}>That's it!</button>
        </form>
        {preferences ? <div><h3>{preferences}</h3><button onClick={()=> navigate('/fridge')}>Let's go to the fridge!</button></div>: null}
    </div>
  )
}

export default DietForm