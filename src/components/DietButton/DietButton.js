import React, { useEffect, useState } from 'react'
import { ToggleButton } from 'react-bootstrap';

function DietButton(props) {

    const dietName = props.dietName;
    const dietState = props.storePreferences[dietName];
    const handleDietExclusion = props.onClick;
    
    const [variant, setVariant] = useState(dietState);
    
    useEffect(()=>{
      
      switch(dietName) {
        case 'glutenfree':
          setVariant(dietState === true ? 'warning' : 'warning opacity-50');
        break;

        case 'dairyfree':
          setVariant(dietState === true ? 'dark' : 'dark opacity-50');
        break;

        case 'vegetarian':
          setVariant(dietState === true ? 'success' : 'success opacity-50');
        break;
        
        default:
        break;
      }
      
    }, [handleDietExclusion, dietState, dietName]);
    
    
  return (
    <ToggleButton 
      variant={variant}
      className="text fw-bold"
      onClick={(event) => {
        event.preventDefault();
        handleDietExclusion(dietName)}
        }

      >{dietName}</ToggleButton>
  )
}

export default DietButton