import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './app/store';
import Fridge from './components/Fridge';
import ProductsList from './components/ProductsList';
import Recipes from './components/Recipes';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='/fridge' element={<Fridge />}>
                <Route path='/fridge/productslist' element={<ProductsList />} />
              </Route>
              <Route path='/recipes' element={<Recipes />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Route>  
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
