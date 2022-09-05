import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Home from "./Pages/Home";
import ProductListMens from "./Pages/ProductListMens";
import ProductListWomens from "./Pages/ProductListWomens";
import AppContext from "./Components/AppContext";
import { products } from "./data.js";
import ScrollToTop from "./ScrollToTop.js";

function App() {

  return (
    <AppContext.Provider
      value={{
        products,
      }}
    >
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route
            path="/productlist/mens"
            element={<ProductListMens show="productlist" />}
          />
          <Route
            path="/productlist/mens/product"
            element={<ProductPage />}
          />
          <Route
            path="/productlist/womens"
            element={<ProductListWomens />}
          />
          <Route
            path="/productlist/womens/product"
            element={<ProductPage />}
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
