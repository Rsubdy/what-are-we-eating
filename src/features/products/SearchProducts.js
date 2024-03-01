import React, {useState} from 'react'
import {Col, Row, Container } from 'react-bootstrap';
import ProductsList from './ProductsList';


function SearchProducts() {
    
const [searchInput, setSearchInput] = useState('');

const useHandleSearch = (e) => {
    setSearchInput(e.target.value);
}

  return (
    <Container >
        <Row>
            <form onSubmit={e => e.preventDefault()}>
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
            <ProductsList search={searchInput} />
        </Row>
    </Container>
  )
}

export default SearchProducts