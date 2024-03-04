import React, {useEffect} from 'react';
import ProductsList from '../products/ProductsList';
import FridgeList from './FridgeList';
import { useDispatch, useSelector } from 'react-redux';
import { getFridgeFromLocalstorage, selectAllFridgeProducts, clearFridge } from './fridgeSlice';
import { selectAllProducts } from '../products/productsSlice';
import { Container, Col, Row } from 'react-bootstrap';
import SearchProducts from '../products/SearchProducts';

function Fridge() {

const allProducts = useSelector(selectAllProducts);
let allFridgeProducts = useSelector(selectAllFridgeProducts);
const localStorageFridge = localStorage.getItem('fridge');
const dispatch = useDispatch();
const clear = clearFridge;

useEffect(()=> {
  if (localStorageFridge !== null) {
  let payload = JSON.parse(localStorageFridge);
  dispatch(getFridgeFromLocalstorage(payload))};
}, [dispatch, localStorageFridge])


  return (
    <div>
      <Container className="row">
      <Col className="col-6 border-end border-black border-4">
        <h3>Products in your fridge</h3>
        <FridgeList list={allFridgeProducts} clear={clear} />
      </Col>
      <Col className="col-6 ps-4">
        <h3>Select products:</h3>
        <SearchProducts allProducts={allProducts}/>
      </Col>
      </Container>
    </div>
  )
}

export default Fridge