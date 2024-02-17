import {React} from 'react'
import {useDispatch} from 'react-redux';
import { removeFromFridge, fridgeSetAmount } from '../../features/fridge/fridgeSlice';


function FridgeProduct({product}) {
    
    
    let {name, image, diet, id} = product;
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
          <h3>{name}</h3>
          <img src={image} alt={name}/>
          {diet.glutenfree === true && <img src='../../img/glutenFree.jpg' alt="glutenfree product" />}
          {diet.vegetarian === true && <img src='../../img/vegetarian.jpg' alt="vegetarian product" />}
          {diet.dairyfree === true && <img src='../../img/dairyFree.jpg' alt="dairyfree product" />}
          {/* <h4>Amount: {amount}</h4>
          <button onClick={handleIncrementAmount}>+</button>
          <button onClick={handleDecrementAmount}>-</button> */}
          <button onClick={handleRemoveFromFridge}>Remove</button>
          
      </div>
    )
}

export default FridgeProduct