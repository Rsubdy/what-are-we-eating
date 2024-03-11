import React, {useEffect} from 'react';
import FridgeList from './FridgeList';
import { useDispatch, useSelector } from 'react-redux';
import { getFridgeFromLocalstorage, selectAllFridgeProducts, clearFridge } from './fridgeSlice';
import { selectProductsByDietPreferences } from '../products/productsSlice';
import { Container, Col, Accordion } from 'react-bootstrap';
import SearchProducts from '../products/SearchProducts';
import ProductCreator from '../products/ProductCreator';

function Fridge() {

const allProducts = useSelector(selectProductsByDietPreferences);
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
        <h3>Products list</h3>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Add new product
            </Accordion.Header>
            <Accordion.Body>
             <ProductCreator />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Select products
            </Accordion.Header>
            <Accordion.Body>
              <SearchProducts allProducts={allProducts}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
      </Container>
    </div>
  )
}

export default Fridge