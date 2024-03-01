import React from 'react'
import { selectAllProducts, selectProductByName, selectProductsByDietPreferences } from './productsSlice'
import {useSelector} from 'react-redux';
import ListedProduct from '../../components/ListedProduct/ListedProduct';
import { Col, Row, Container } from 'react-bootstrap';

function ProductsList({search}) {

const searchedProducts = useSelector(state => selectProductByName(state, search));
const allProducts = useSelector(selectAllProducts);

// const sortByNameAsc = array => {
//   let result = [];
//   let names => 
//   array.f
// }

let displayedProducts = allProducts;

search.length !== 0 && (displayedProducts = searchedProducts);

  return (
    <Container>
      <Row>
      {displayedProducts.length === 0 ? <p>No products matching your search!</p> : displayedProducts.map((e)=>{
        return <ListedProduct product={e} key={e.id} />
      })}
      </Row>
    </Container>
  )
}
    

export default ProductsList