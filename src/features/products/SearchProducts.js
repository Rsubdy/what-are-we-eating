import React, {useState, useRef} from 'react'
import {Col, Row, Container } from 'react-bootstrap';
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';
import ProductsList from './ProductsList';


function SearchProducts() {
    
const [displayedProducts, setDisplayedProducts] = useState(); 
const searchInput = useRef();

  return (
    <Container >
        <Row>
            <form>
            <Row>
            <p>Search product by name:</p>
            </Row>
            <Row>
            <input type="text" ></input>
            </Row>
            <Row>
            <label htmlFor="glutenfree">Glutenfree<input type="checkbox" id="glutenfree" /></label>
            <label htmlFor="dairyfree">Dairyfree<input type="checkbox" id="dairyfree" /></label>
            <label htmlFor="vegetarian">Vegetarian<input type="checkbox" id="vegetarian" /></label>
            </Row>
            <Row>
                <select>Sort by:
                    <option>Name A-Z</option>
                    <option>Name Z-A</option>
                    <option></option>
                </select>
            </Row>
            </form>
        </Row>
        <Row>
            <ProductsList products={displayedProducts} />
        </Row>
    </Container>
  )
}

export default SearchProducts