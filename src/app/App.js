import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import { selectProductByName, selectProductById, selectProductByDiet } from '../features/products/productsSlice';
function App() {

           

  return (
    <div>
    <nav>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/fridge" >Fridge</NavLink>
      <NavLink to="/recipes" >Recipes</NavLink>
      <NavLink to="/about" >About</NavLink>
    </nav>
    <Outlet />
      <h1> hello world!</h1>
    </div>
  );
}

export default App;