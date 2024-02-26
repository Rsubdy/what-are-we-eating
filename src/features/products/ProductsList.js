import React from 'react'
import { selectProductsByDietPreferences } from './productsSlice'
import {useSelector} from 'react-redux';
import ListedProduct from '../../components/ListedProduct/ListedProduct';
import { Col, Row, Container } from 'react-bootstrap';

function ProductsList() {

  
  const allProducts = useSelector(selectProductsByDietPreferences);

  return (
    <Container>
      <Row>
      <h3>Select products:</h3>
      </Row>
      <Row>

      </Row>
      <Row>
      {allProducts.map((e)=>{
        return <ListedProduct product={e} key={e.id} />
      })}
      </Row>
    </Container>
  )
}
    

export default ProductsList