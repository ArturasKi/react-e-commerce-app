import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './Pages/ProductPage';
import Home from './Pages/Home';
import ProductListMens from './Pages/ProductListMens';
import ProductListWomens from './Pages/ProductListWomens';
import AppContext from './Components/AppContext';
import { products } from './data.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { create, read, remove, edit } from './Functions/localStorage.js';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [pr, setPr] = useState([]);

  useEffect(() => {
    setPr(read());
  }, [lastUpdate])

  return (
    <AppContext.Provider value={{
      products
    }}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home show="home" />} />
          <Route path="/productlist/mens" element={<ProductListMens show="productlist" />} />
          <Route path="/productlist/mens/product" element={<ProductPage show="product" />} />
          <Route path="/productlist/womens" element={<ProductListWomens show="productlist" />} />
          <Route path="/productlist/womens/product" element={<ProductPage show="product" />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
