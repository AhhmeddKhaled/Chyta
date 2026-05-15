import style from './App.module.css'

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Home from './components/main/home/Hme';
import Products from './components/main/products/Products';

import ProductDetails from './components/main/products/productDetails/ProductDetails';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className={style.app}>

      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Home />
              <Products />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

      </Routes>

      <Footer />

    </div>
  )
}

export default App