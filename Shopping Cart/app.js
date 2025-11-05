import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </Router>
  );
}
