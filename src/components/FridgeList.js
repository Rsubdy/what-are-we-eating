import React from 'react'
import { selectAllFridgeProducts } from '../features/fridge/fridgeSlice';
import {useSelector} from 'react-redux';
import FridgeProduct from './FridgeProduct/FridgeProduct';

function FridgeList() {

const allFridgeProducts = useSelector(selectAllFridgeProducts);

  return (
    <div>
      <h1>Products in the fridge:</h1>
        {allFridgeProducts.map((e)=>{
          return <FridgeProduct product={e} key={e.id} />
        })}
      </div>
  )
}

export default FridgeList;