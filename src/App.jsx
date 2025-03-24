import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx"; 
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart.jsx";




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/products" element={<AdminPanel/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
