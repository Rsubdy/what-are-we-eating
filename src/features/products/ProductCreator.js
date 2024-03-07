import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button, ToggleButtonGroup} from 'react-bootstrap';
import {useDispatch } from 'react-redux';
function ProductCreator() {

const [name, setName] = useState('');
const [glutenfree, setGlutenfree] = useState(false);
const [dairyfree, setDairyfree] = useState(false);
const [vegetarian, setVegetarian] = useState(false);


const handleDietExclusion = (e) => {
    e.preventDefault();
    const diet = e.target.getAttribute('dietname');
    
    const toggleDiet = (diet) => {
        switch(diet) {
            case 'glutenfree' : {
                setGlutenfree(!glutenfree);
                break;
            }
            case 'dairyfree' : {
                setDairyfree(!dairyfree);
                break;
            }
            case 'vegetarian': {
                setVegetarian(!vegetarian);
                break;
            }
            default : return;
        }
    }
    toggleDiet(diet);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setName('asdasda')
}

const handleChange = (e) => {
    setName(e.target.value)
}

  return (
    <Container>
        <h3>Create new product:</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label><input type="text" value={name} placeholder="what's my name?" onChange={handleChange} />
            <ToggleButtonGroup type="checkbox" className="d-block">
                <Button variant="btn btn-warning btn-sm opacity-50" dietname='glutenfree' onClick={handleDietExclusion}>Glutenfree</Button>
                <Button variant="btn btn-dark btn-sm opacity-50" dietName='dairyfree' onClick={handleDietExclusion}>Dairyfree</Button>
                <Button variant="btn btn-success btn-sm opacity-50" dietName='vegetarian' onClick={handleDietExclusion}>Vegetarian</Button>
            </ToggleButtonGroup>
            <Button type="submit" className="btn btn-light">Add product</Button>
        </form>
    </Container>
  )
}

export default ProductCreator
