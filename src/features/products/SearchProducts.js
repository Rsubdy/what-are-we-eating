import React, {useState} from 'react'
import {Col, Row, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import ProductsList from './ProductsList';
import { useSelector } from 'react-redux';
import { selectProductByName } from './productsSlice';
import { sorting } from './sorting';

function SearchProducts({allProducts}) {

const [searchInput, setSearchInput] = useState('');
const [sortingPreference, setSortingPreference] = useState('0');
const [displayedProducts, setDisplayedProducts] = useState(sorting(allProducts, sortingPreference));

const searchedProducts = useSelector(state => selectProductByName(state, searchInput));
    
const handleSearch = (e) => {
    setSearchInput(e.target.value);
}
const handleSelect = (eventKey) => {
    setSortingPreference(eventKey)
    setDisplayedProducts(displayedProducts, sortingPreference);
}

  return (
    <Container >
        <Row>
            <form onSubmit={e => e.preventDefault()}>
            <Row>
            <input type="text" value={searchInput} onChange={handleSearch} placeholder="Search product by name..." className="mb-2" />
            </Row>
            </form>
            <Row>
            <DropdownButton id="sorting" title="Sort products" onSelect={handleSelect} variant="light">
                <Dropdown.Item eventKey="0">A-Z</Dropdown.Item>
                <Dropdown.Item eventKey="1">Z-A</Dropdown.Item>
            </DropdownButton>
            </Row>
        </Row>
        <Row>
        {searchedProducts.length === 0 ? <p>No products matching your search!</p> : 
            <ProductsList searchedProducts={searchedProducts} sortingPreference={sortingPreference} displayedProducts={displayedProducts} />}
        </Row>
    </Container>
  )
}

export default SearchProducts