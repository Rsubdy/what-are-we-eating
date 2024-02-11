import {React } from 'react'
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';
import { useDispatch } from 'react-redux';

function FridgeList(props) {

const allProducts = props.list; 
const clear = props.clear;
const dispatch = useDispatch();

  return (
    <div>
      <h1>Products in the fridge:</h1>
      {allProducts.length !== 0 && <button onClick={(event)=>dispatch(clear([]))}>Clear fridge</button>}
        {allProducts.map((product)=>{
          return <FridgeProduct product={product} key={product.id} />
        })}
      </div>
  )
}

export default FridgeList;