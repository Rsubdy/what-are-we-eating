import React from 'react'
import {useDispatch} from 'react-redux';
import { addToFridge } from '../../features/fridge/fridgeSlice';
import { removeProduct } from '../../features/products/productsSlice';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import food from '../../img/food.png';
import gluten from '../../img/gluten.png';
import meat from '../../img/meat.png';
import dairy from '../../img/dairy.jpg'; 


function ListedProduct({product}) {
  
  const {name, diet} = product;

  const dispatch = useDispatch();
    
    //Button handlers:

    const handleAddToFridge = () => {
      dispatch(addToFridge(JSON.stringify(product)));
    }
    const handleDeleteFromDatabase = () => {
      alert("This will permanently delete product from database and can't be undone.")
      dispatch(removeProduct(product));
    }

    // function Alergen (diet){
    //   const diet = props;
    //   let 
      
    //   let alergen;
    //   if 
    // }

    return (
    
    <Container className="d-inline justify-content-center">
        <Row>
          <Col className="col-2">
            <Image src={food} alt={name} className="img w-100"/>
          </Col>
          <Col>
            <h5>{name}</h5>
          </Col>
        </Row>
        <Row>
        </Row>
        <Row>
        {diet.glutenfree === true && (<img src="../../img/glutenFree.jpg" alt="glutenfree product" />)}
        </Row>
        <Col>
            <Row>
            </Row>
              <p>Contains</p>
          </Col >
        {diet.vegetarian === true && <img src="../../img/vegetarian.jpg" alt="vegetarian product" />}
        {diet.dairyfree === true && <img src="../../img/dairy.jpg" alt="dairyfree product" />}
        <Button className="btn-success btn-sm " onClick={handleAddToFridge}>Add to fridge</Button>
        <Button className="btn-success btn-sm "  onClick={handleDeleteFromDatabase}>Delete</Button>
    </Container>
  )
}

export default ListedProduct