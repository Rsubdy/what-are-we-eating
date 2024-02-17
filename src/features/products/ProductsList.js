import React from 'react'
import { selectProductsByDietPreferences } from './productsSlice'
import {useSelector} from 'react-redux';
import ListedProduct from '../../components/ListedProduct/ListedProduct';

function ProductsList() {

  
  const allProducts = useSelector(selectProductsByDietPreferences);

  return (
    <div>
      <h1>Products to add:</h1>
      {allProducts.map((e)=>{
        return <ListedProduct product={e} key={e.id} />
      })}
    </div>
  )
}
    

export default ProductsList