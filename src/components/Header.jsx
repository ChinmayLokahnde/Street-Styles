import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-4 fixed inset-x-0 top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-extrabold tracking-wide mb-2d">
          <Link to="/" className="hover:text-gray-400 transition duration-300">Street Styles</Link>
        </div>
        <nav className="flex space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <Link to="/collection" className="hover:text-gray-400 transition duration-300">
            Collection
          </Link>
          <Link to="/cart" className="hover:text-gray-400 transition duration-300">
            Cart
          </Link>
          <Link to="/products" className="hover:text-gray-400 transition duration-300">
            Admin Panel
          </Link>
          
          <Link to="/login" className="hover:text-gray-400 transition duration-300">
            Login
          </Link>
          
 
        </nav>
      </div>
    </header>
  );
};

export default Header;
