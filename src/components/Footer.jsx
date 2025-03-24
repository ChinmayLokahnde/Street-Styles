import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Shop With Us
        </h2>
        <p className="text-gray-400 mt-2">
          Elevate your style with our exclusive collection.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition">
            Facebook
          </a>
          <a href="#" className="text-gray-300 hover:text-pink-400 transition">
            Instagram
          </a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition">
            Twitter
          </a>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
