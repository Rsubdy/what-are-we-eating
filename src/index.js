import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./app/store";
import Hello from "./components/Hello";
import Fridge from "./features/fridge/Fridge";
import ProductsList from "./features/products/ProductsList";
import Recipes from "./components/Recipes";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Hello />} />
            <Route path="/fridge" element={<Fridge />}>
              <Route path="/fridge/productslist" element={<ProductsList />} />
            </Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
            <Route path="/what-are-we-eating" element={<Hello />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
