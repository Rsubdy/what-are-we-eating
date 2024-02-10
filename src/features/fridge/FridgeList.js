import {React } from 'react'
import FridgeProduct from '../../components/FridgeProduct/FridgeProduct';

function FridgeList(props) {

const allProducts = props.fridgeProducts; 

  return (
    <div>
      <h1>Products in the fridge:</h1>
        {allProducts.map((product)=>{
          return <FridgeProduct product={product} key={product.id} />
        })}
      </div>
  )
}

export default FridgeList;