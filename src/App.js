import React from "react";
import './App.css';
import Header from './components/component/Header';
import Footer from './components/component/Footer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Product from './components/pages/Product';
import Categories from './components/pages/Categories';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
