import React from 'react';
import ProductsList from '../products/ProductsList';
import FridgeList from './FridgeList';

function Fridge() {
  return (
    <div>
      <h1>Fridge</h1>
      <aside>
        <ProductsList />
      </aside>
      <main>
        <FridgeList />
      </main>
    </div>
  )
}

export default Fridge