import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './component/List_product/Products';
import Product from './component/product_card/Product';
import NotFound from './reusableComponent/NotFound/NotFound'
import Register from './component/Register/Register';
import Card from './component/cardPurchase/Card';
import Profile from './component/Profile/Profile';
import Navbar from './component/Navbar/Navbar';
const AppRouter = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productID" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/card" element={<Card />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
};

export default AppRouter;
