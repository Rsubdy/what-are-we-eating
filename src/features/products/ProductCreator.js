import React, { useState } from 'react';
import {Container, Row, Col, Button, ToggleButtonGroup} from 'react-bootstrap';
import {useDispatch } from 'react-redux';
function ProductCreator() {

const [name, setName] = useState('');

const handleDietExclusion = () => {

}

  return (
    <Container>
        <h3>Create new product:</h3>
        <form>
            <label htmlFor="name">Name: </label><input type="text" value={name} placeholder="what's my name?" />
            <ToggleButtonGroup type="checkbox" className="d-block">
                <Button variant="btn btn-warning opacity-50" dietName='glutenfree' onClick={handleDietExclusion}/>
                <Button variant="btn btn-dark opacity-50" dietName='dairyfree' onClick={handleDietExclusion}/>
                <Button variant="btn btn-success opacity-50" dietName='vegetarian' onClick={handleDietExclusion}/>
            </ToggleButtonGroup>
            <Button type="submit" className="btn btn-light">Add product</Button>
        </form>
    </Container>
  )
}

export default ProductCreator
