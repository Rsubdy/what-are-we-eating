import {React} from 'react'
import {useDispatch} from 'react-redux';
import { removeFromFridge, fridgeSetAmount } from '../../features/fridge/fridgeSlice';
import { CloseButton, Col, Row, Image } from 'react-bootstrap';
import fridge from '../../img/fridge.png';

function FridgeProduct({product}) {
    
    
    let {name, diet, id} = product;
    const dispatch = useDispatch();

    //Button handlers:

    const handleRemoveFromFridge = () => {
        dispatch(fridgeSetAmount({id:id, amount: 1}));
        dispatch(removeFromFridge(product));
      }
   
   //for Further development:
      // const handleIncrementAmount = () => {
    //     dispatch(fridgeAmountIncrement(product));
    // }
    // const handleDecrementAmount = () => {
    //     amount === 1 ? handleRemoveFromFridge() : 
    //     dispatch(fridgeAmountDecrement(product));
    // }

    
      return (
      <div>
          <Row>
            <Col className="col-2">
              <Image src={fridge} alt={name} className="img w-100"/>
            </Col>
            <Col className="col-8">
              <h5>{name}</h5>
            </Col>
            <Col className="col-2">
              <CloseButton onClick={handleRemoveFromFridge} />
            </Col>
          </Row>
          {/* <Row>
            {diet.glutenfree === true && <img src='../../img/glutenFree.jpg' alt="glutenfree product" />}
            {diet.vegetarian === true && <img src='../../img/vegetarian.jpg' alt="vegetarian product" />}
            {diet.dairyfree === true && <img src='../../img/dairyFree.jpg' alt="dairyfree product" />}
          </Row>
          <h4>Amount: {amount}</h4>

          <button onClick={handleIncrementAmount}>+</button>
          <button onClick={handleDecrementAmount}>-</button> */}
      </div>
    )
}

export default FridgeProduct