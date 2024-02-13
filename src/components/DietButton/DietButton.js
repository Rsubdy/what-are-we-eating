import React, { useEffect, useState } from 'react'

function DietButton(props) {

    const dietName = props.dietName;
    const dietState = props.storePreferences[dietName];
    const handleDietExclusion = props.onClick;
    
    const [buttonClass, setButtonClass] = useState(dietState);
    
    useEffect(()=>{
      setButtonClass(dietState === true ? 'dietButton__active' : 'dietButton__passive');
    }, [handleDietExclusion, dietState]);
    
  return (
    <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleDietExclusion(dietName)}
            }
          className={buttonClass}
          >{dietName}</button>
    </div>
  )
}

export default DietButton