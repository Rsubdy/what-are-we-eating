import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { selectProductByName, selectProductById, selectProductByDiet } from '../features/products/productsSlice';

function App() {

           

  return (
    <div>
      <header>What are we eating?</header>
      <nav>
        <NavLink to="/hello" >Home</NavLink>
        <NavLink to="/fridge" >Fridge</NavLink>
        <NavLink to="/recipes" >Recipes</NavLink>
        <NavLink to="/mealplanner" >Meal Planner</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavLink to="/about" >About</NavLink>
      </footer>
    </div>
  );
}

export default App;