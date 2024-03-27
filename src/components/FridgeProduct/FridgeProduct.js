import {React} from 'react'
import {useDispatch} from 'react-redux';
import { removeFromFridge, fridgeSetAmount } from '../../features/fridge/fridgeSlice';
import { CloseButton, Col, Row, Image } from 'react-bootstrap';
import fridge from '../../img/fridge.png';

function FridgeProduct({product}) {
    
    
    const {name, id} = product;
    const dispatch = useDispatch();

    //Button handlers:

    const handleRemoveFromFridge = () => {
        dispatch(fridgeSetAmount({id:id, amount: 1}));
        dispatch(removeFromFridge(product));
      }

    
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
      </div>
    )
}

export default FridgeProduct