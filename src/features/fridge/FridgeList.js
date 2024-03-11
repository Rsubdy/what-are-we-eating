import {React, useState, useEffect } from 'react'
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearApiRecipes } from '../recipes/recipesSlice';
import {Button, Container, Row, Col} from 'react-bootstrap';


function FridgeList(props) {

const allProducts = props.list; 
const clear = props.clear;
const dispatch = useDispatch();
const navigate = useNavigate();

const [showRecipes, setShowRecipes] = useState('Add products to get recipes');
const [recipesButton, setRecipesButton] = useState(false);
const handleShowRecipes = () => {
  navigate('/recipes');
}


useEffect(()=>{
  if (allProducts.length === 0)
  {setShowRecipes('Add products to get recipes');
   setRecipesButton(false)
 } else
  {setShowRecipes('Show me recipes!');
   setRecipesButton(true);
 }
   }
  , [allProducts]);
 

return (
    <Container>
      <Row>
        <Col>
        <Button className={recipesButton ? "btn-light btn-sm fw-bold border-black border-2" : "btn-light btn-sm border-light border-2 disabled"} onClick={handleShowRecipes}>{showRecipes}</Button>
        </Col>
      <Col>
      {allProducts.length !== 0 && <Button 
        className="btn-danger btn-sm border-black border-3 fw-bold mb-3"
        onClick={(event)=>{
          dispatch(clear([]));
          localStorage.removeItem('recipesFromApi');
          dispatch(clearApiRecipes())}}
      >Clear fridge</Button>}
      </Col>
      </Row>
      <Row>
      <Col>
      {allProducts.map((product)=>{
          return <FridgeProduct product={product} key={product.id} />
        })}
      
      </Col>
      </Row>
      </Container>
  )
}

export default FridgeList;