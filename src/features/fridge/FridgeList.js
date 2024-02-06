import React from 'react'
import { selectAllFridgeProducts } from './fridgeSlice';
import {useSelector} from 'react-redux';
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';

function FridgeList() {

const allFridgeProducts = useSelector(selectAllFridgeProducts);

  return (
    <div>
      <h1>Products in the fridge:</h1>
        {allFridgeProducts.map((product)=>{
          return <FridgeProduct product={product} key={product.id} />
        })}
      </div>
  )
}

export default FridgeList;