import React from 'react'

function DietButton(props) {

    const dietName = props.dietName;
    const handleDietExclusion = props.onChange;

  return (
    <div>
        <label htmlFor='{dietName}'>{dietName}
                <input
                    type='checkbox'
                    id={dietName}
                    onChange={()=>handleDietExclusion(dietName)}
                />
            </label>
    </div>
  )
}

export default DietButton