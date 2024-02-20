import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { clearFridge } from '../features/fridge/fridgeSlice';
import { clearPreferences } from '../features/diets/dietPreferencesSlice';
import { useDispatch } from 'react-redux';
import { clearApiRecipes } from '../features/recipes/recipesSlice';
import logo from '../img/logo.png'

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
    <div className="container-fluid bg-warning justify-content">
      <nav className="navbar navbar-collapse-sm justify-content">
        <div className="column">
          <img className="navbar-logo img-fluid"src={logo} alt="logo" width="200" height="200" />
        </div>
        <div className="column">
          <div className="row">
            <header className="title">What are we eating?</header>
          </div>
          <div className="navbar">
              <NavLink className="navbar navbar-item active" to="/" ><p className="navbar-link btn btn-dark border-black border-5 text-uppercase">Home</p></NavLink>
              <NavLink className="navbar navbar-item" to="/fridge" ><p className="navbar-link btn btn-dark border-black border-5">Fridge</p></NavLink>
              <NavLink className="navbar navbar-item" to="/recipes" ><p className="navbar-link btn btn-dark border-black border-5">Recipes</p></NavLink>
              <NavLink className="navbar navbar-item" to="/mealplanner" ><p className="navbar-link btn btn-dark border-black border-5">Meal Planner</p></NavLink>
          </div>
        </div>
        <button className="btn btn-danger sticky-right" onClick={()=>handleClearPreferences()}><strong>Clear Preferences</strong></button>
      </nav>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <NavLink to="/about" >About</NavLink>
      </footer>
    </div>
  );
}

export default App;