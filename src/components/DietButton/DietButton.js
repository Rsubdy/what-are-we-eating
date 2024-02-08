import React from 'react'

function DietButton(props) {

    const dietName = props.dietName;
    const handleDietExclusion = props.onClick;
    const state = props.storePreferences[dietName];

  return (
    <div>
        <button onClick={(event) => {
            event.preventDefault();
            handleDietExclusion(dietName)}
    }>{dietName + state}</button>
    </div>
  )
}

export default DietButton