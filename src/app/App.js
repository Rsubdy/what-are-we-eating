import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { selectProductByName, selectProductById, selectProductByDiet } from '../features/products/productsSlice';

function App() {

const products = useSelector((state) => state.products);
const milk = selectProductByDiet(products, {glutenfree: true, vegetarian: true, dairyfree: false});

const imie = milk.map((e)=> e.name);
const zdanie = "koszyk zawiera " + imie.join(",");
const diety = milk.diet;
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>{zdanie}</h2>
    </div>
  );
}

export default App;
