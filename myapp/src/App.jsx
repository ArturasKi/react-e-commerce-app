import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import { useState } from 'react';

function App() {

  const [selectedProduct, setSelectedProduct] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home show="home" />} />
          <Route path="/productlist/mens" element={<ProductList show="productlist" />} />
          <Route path="/productlist/mens/product" element={<Product show="product" />} />
          <Route path="/productlist/womens" element={<ProductList show="productlist" />} />
          <Route path="/productlist/womens/product" element={<Product show="product" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
