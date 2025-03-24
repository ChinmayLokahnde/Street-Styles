import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-8 min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 bg-white/10 rounded-xl shadow-lg">
              <img src={item.images} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-lg font-semibold text-green-400">${item.price}</p>
              <p className="text-gray-300">Qty: {item.quantity}</p>
              <button onClick={() => removeFromCart(item._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <button onClick={clearCart} className="mt-6 w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
