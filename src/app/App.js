import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { clearFridge } from '../features/fridge/fridgeSlice';
import { clearPreferences } from '../features/diets/dietPreferencesSlice';
import { useDispatch } from 'react-redux';
import { clearApiRecipes } from '../features/recipes/recipesSlice';

function App() {
  
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearFridge([]));
    dispatch(clearPreferences());
    dispatch(clearApiRecipes());
  }

  const handleClearPreferences = () => {
    clear();
    setTimeout(()=>localStorage.clear(), 5);
  }
  
  return (
    <div>
      <header>What are we eating?</header>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/fridge" >Fridge</NavLink>
        <NavLink to="/recipes" >Recipes</NavLink>
        <NavLink to="/mealplanner" >Meal Planner</NavLink>
        <button onClick={()=>handleClearPreferences()}>Clear Preferences</button>
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