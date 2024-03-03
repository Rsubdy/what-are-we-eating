import React from 'react'
import { selectAllProducts, selectProductByName, selectProductsByDietPreferences } from './productsSlice'
import {useSelector} from 'react-redux';
import ListedProduct from '../../components/ListedProduct/ListedProduct';
import { Col, Row, Container } from 'react-bootstrap';
import {sorting} from './sorting';

function ProductsList({search}) {

const searchedProducts = useSelector(state => selectProductByName(state, search));
const allProducts = useSelector(selectAllProducts);

let displayedProducts = sorting(allProducts);

search.length !== 0 && (displayedProducts = sorting(searchedProducts));

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