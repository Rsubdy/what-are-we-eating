import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button, ToggleButtonGroup} from 'react-bootstrap';
import {useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';
import Product from '../products/Product';

function ProductCreator() {

const [name, setName] = useState('');
const [glutenfree, setGlutenfree] = useState(false);
const [dairyfree, setDairyfree] = useState(false);
const [vegetarian, setVegetarian] = useState(false);

const dispatch = useDispatch();

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

// constructor for new product constructor(name, image = food, unit = "item", diet = {glutenfree: false, vegetarian: false, dairyfree: false}, amount = 1)

const handleSubmit = (e) => {
    e.preventDefault();
    if (name === ''){
        alert("Please enter the name of the product!");
    } else {
    const newProduct = JSON.stringify(new Product({name: name, diet: {glutenfree: glutenfree, dairyfree: dairyfree, vegetarian: vegetarian}}));
    dispatch(addProduct(newProduct));
    setName('');
    setDairyfree(false);
    setGlutenfree(false);
    setVegetarian(false);
    }
}

const handleChange = (e) => {
    setName(e.target.value)
}

  return (
    <Container>
        <h3>Create new product:</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label><input id="name" type="text" value={name} placeholder="what's my name?" onChange={handleChange} />
            <ToggleButtonGroup type="checkbox" className="d-block">
                <Button variant="btn btn-warning btn-sm" className={glutenfree ? "" : "opacity-50"} dietname='glutenfree' onClick={handleDietExclusion}>Glutenfree</Button>
                <Button variant="btn btn-dark btn-sm" className={dairyfree ? "" : "opacity-50"} dietName='dairyfree' onClick={handleDietExclusion}>Dairyfree</Button>
                <Button variant="btn btn-success btn-sm" className={vegetarian ? "" : "opacity-50"}  dietName='vegetarian' onClick={handleDietExclusion}>Vegetarian</Button>
            </ToggleButtonGroup>
            <Button type="submit" className="btn btn-light">Add product</Button>
        </form>
    </Container>
  )
}

export default ProductCreator
