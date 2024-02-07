import React from 'react'

function DietButton(props) {

    const dietName = props.dietName;
    const handleDietExclusion = props.onClick;

  return (
    <div>
        <button onClick={(event) => {
            event.preventDefault();
            handleDietExclusion(dietName)}
    }>{dietName}</button>
    </div>
  )
}

export default DietButton