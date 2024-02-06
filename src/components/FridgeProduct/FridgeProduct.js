import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import { fridgeAmountDecrement, fridgeAmountIncrement, removeFromFridge, fridgeSetAmount } from '../../features/fridge/fridgeSlice';
import { addProduct } from '../../features/products/productsSlice';

function FridgeProduct({product}) {
    
    
    let {name, image, diet, amount, id} = product;
    const dispatch = useDispatch();
    let [localAmount, setLocalAmount] = useState(amount);
    
    //Button handlers:

    const handleRemoveFromFridge = () => {
        dispatch(fridgeSetAmount({id:id, amount: 1}));
        dispatch(removeFromFridge(product));
      }
    const handleIncrementAmount = () => {
        dispatch(fridgeAmountIncrement(product));
        setLocalAmount(amount+1);
    }
    const handleDecrementAmount = () => {
        localAmount === 1 ? handleRemoveFromFridge() : 
        dispatch(fridgeAmountDecrement(product));
        setLocalAmount(amount-1);
    }
      
      return (
      <div>
          <h3>{name}</h3>
          <img src={image} alt={name}/>
          {diet.glutenfree === true && <img src='../../img/glutenFree.jpg' alt="glutenfree product" />}
          {diet.vegetarian === true && <img src='../../img/vegetarian.jpg' alt="vegetarian product" />}
          {diet.dairyfree === true && <img src='../../img/dairyFree.jpg' alt="dairyfree product" />}
          <h4>Amount: {localAmount}</h4>
          <button onClick={handleIncrementAmount}>+</button>
          <button onClick={handleDecrementAmount}>-</button>
          <button onClick={handleRemoveFromFridge}>Remove</button>
          
      </div>
    )
}

export default FridgeProduct