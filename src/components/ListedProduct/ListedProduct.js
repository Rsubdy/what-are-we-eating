import React from 'react'
import {useDispatch} from 'react-redux';
import { addToFridge } from '../../features/fridge/fridgeSlice';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';

import food from '../../img/food.png';

import HideProductButton from '../../features/products/HideProductButton';

function ListedProduct({product}) {
  
  const {name} = product;

  const dispatch = useDispatch();
  

  //Button handlers:

  const handleAddToFridge = () => {
      dispatch(addToFridge(JSON.stringify(product)));
    }
  

    return (
    <>
    <Container className="d-inline justify-content-center border-bottom border-black border-3 p-2">
        <Row>
          <Col className="col-2">
            <Image src={food} alt={name} className="img w-100"/>
          </Col>
          <Col className="col-3">
            <h5>{name}</h5>
          </Col>
          <Col className="col-7 d-flex justify-content-center ml-3">
            <Row className="">
            <Col>
            <Button className="btn-success btn-sm " onClick={handleAddToFridge}>Add</Button>
            </Col>
            <Col>
            <HideProductButton product={product}/>
            </Col>
            </Row>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default ListedProduct