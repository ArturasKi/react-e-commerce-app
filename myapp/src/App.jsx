import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Pages/Product';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import AppContext from './Components/AppContext';

function App() {

  return (
    <AppContext.Provider value={{
    }}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home show="home" />} />
          <Route path="/productlist/mens" element={<ProductList show="productlist" />} />
          <Route path="/productlist/mens/product" element={<Product show="product" />} />
          <Route path="/productlist/womens" element={<ProductList show="productlist" />} />
          <Route path="/productlist/womens/product" element={<Product show="product" />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
