import React from 'react';
import ProductsList from '../products/ProductsList';
import FridgeList from './FridgeList';
import { useDispatch } from 'react-redux';
import { getFridgeFromLocalstorage } from './fridgeSlice';


function Fridge() {

let fridgeProducts = [];
const localStorageFridge = localStorage.getItem('fridge');
const dispatch = useDispatch();

if (localStorageFridge !== null) {
  let payload = JSON.parse(localStorageFridge);
  fridgeProducts = payload.fridgeProducts;
  dispatch(getFridgeFromLocalstorage(payload));
}

  return (
    <div>
      <h1>Fridge</h1>
      <aside>
        <ProductsList />
      </aside>
      <main>
        <FridgeList fridgeProducts={fridgeProducts} />
      </main>
    </div>
  )
}

export default Fridge