import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/products' element={<Products />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;

