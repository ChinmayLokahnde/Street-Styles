import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


const Collection = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Products in Frontend:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="pt-20 p-8 min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Shop Our Collections
      </h1>

      
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">
          Men's Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category.toLowerCase() === "men")
            .map((product) => (
              <div
                key={product._id}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.images}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-gray-300">{product.description}</p>
                <p className="text-lg font-semibold text-green-400">
                  Price: ${product.price}
                </p>
                <button
              onClick={() => addToCart(product)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-amber-950 transition"
            >
              Add to Cart
            </button>
              </div>
            ))}
        </div>
      </div>

      
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-pink-400 mb-6">
          Women's Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category.toLowerCase() === "women")
            .map((product) => (
              <div
                key={product._id}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.images}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-gray-300">{product.description}</p>
                <p className="text-lg font-semibold text-green-400">
                  Price: ${product.price}
                </p>
                <button 
              onClick={() => addToCart(product)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-amber-900 transition"
            >
              Add to Cart
            </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
