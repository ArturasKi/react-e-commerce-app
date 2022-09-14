import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Home from "./Pages/Home";
import ProductListMens from "./Pages/ProductListMens";
import ProductListWomens from "./Pages/ProductListWomens";
import AppContext from "./Components/AppContext";
import { products } from "./data.js";
import ScrollToTop from "./ScrollToTop.js";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Sale from "./Pages/Sale";
import { useEffect, useState } from "react";
import { create, read, remove, edit } from "./Functions/localStorage";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [items, setItems] = useState(null);
  const [createItem, setCreateItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  // READ
  useEffect(() => {
    setItems(read());
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createItem) {
      return;
    }
    create(createItem);
    setLastUpdate(Date.now());
  }, [createItem]);

   // DELETE
   useEffect(() => {
    if (null === deleteItem) {
      return;
    }
    remove(deleteItem);
    setLastUpdate(Date.now());
  }, [deleteItem]);

  return (
    <AppContext.Provider
      value={{
        products,
        items,
        setCreateItem,
        setDeleteItem
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist/mens" element={<ProductListMens />} />
          <Route path="/productlist/mens/product" element={<ProductPage />} />
          <Route path="/productlist/womens" element={<ProductListWomens />} />
          <Route path="/productlist/womens/product" element={<ProductPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
