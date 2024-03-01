import React, {useState} from 'react'
import {Col, Row, Container } from 'react-bootstrap';
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';
import ProductsList from './ProductsList';
import { useSelector } from 'react-redux';
import { selectProductByName } from './productsSlice';

function SearchProducts() {
    
const [displayedProducts, setDisplayedProducts] = useState();
const [searchInput, setSearchInput] = useState('');
const usePerformSearch = (input) => {
    const result = useSelector(selectProductByName(input));
    setDisplayedProducts(result);
}
const useHandleSearch = (e) => {
    setSearchInput(e.target.value);
    usePerformSearch(searchInput);
}


  return (
    <Container >
        <Row>
            <form>
            <Row>
            <p>Search product by name:</p>
            </Row>
            <Row>
            <input type="text" value={searchInput} onChange={useHandleSearch}/>
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