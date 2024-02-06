import React from 'react'
import {useDispatch} from 'react-redux';
import { addToFridge } from '../../features/fridge/fridgeSlice';
import { removeProduct } from '../../features/products/productsSlice';

function ListedProduct({product}) {
    
  const {name, image, diet} = product;
    const dispatch = useDispatch();
    
    //Button handlers:

    const handleAddToFridge = () => {
      dispatch(addToFridge(JSON.stringify(product)));
    }
    const handleDeleteFromDatabase = () => {
      alert("This will permanently delete product from database and can't be undone.")
      dispatch(removeProduct(product));
    }

    return (
    <div>
        <h3>{name}</h3>
        <img src={image} alt={name}/>
        {diet.glutenfree === true && <img src="../../img/glutenFree.jpg" alt="glutenfree product" />}
        {diet.vegetarian === true && <img src="../../img/vegetarian.jpg" alt="vegetarian product" />}
        {diet.dairyfree === true && <img src="../../img/dairyFree.jpg" alt="dairyfree product" />}
        <button onClick={handleAddToFridge}>Add to fridge</button>
        <button onClick={handleDeleteFromDatabase}>Delete</button>
    </div>
  )
}

export default ListedProduct