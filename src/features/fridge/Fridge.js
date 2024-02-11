import React, {useEffect} from 'react';
import ProductsList from '../products/ProductsList';
import FridgeList from './FridgeList';
import { useDispatch, useSelector } from 'react-redux';
import { getFridgeFromLocalstorage, selectAllFridgeProducts } from './fridgeSlice';


function Fridge() {

let allFridgeProducts = useSelector(selectAllFridgeProducts);
const localStorageFridge = localStorage.getItem('fridge');
const dispatch = useDispatch();

useEffect(()=> {
  if (localStorageFridge !== null) {
  let payload = JSON.parse(localStorageFridge);
  dispatch(getFridgeFromLocalstorage(payload))};
}, [dispatch, localStorageFridge])


  return (
    <div>
      <h1>Fridge</h1>
      <aside>
        <ProductsList />
      </aside>
      <main>
        <FridgeList list={allFridgeProducts} />
      </main>
    </div>
  )
}

export default Fridge