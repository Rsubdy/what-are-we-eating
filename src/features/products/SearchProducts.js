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