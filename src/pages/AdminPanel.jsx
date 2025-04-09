import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    images: "",
  });

  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Access denied. Please login as admin.");
      return navigate("/login");
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== "admin") {
        alert("Access denied. Admins only.");
        return navigate("/login");
      }
    } catch (error) {
      console.error("Invalid token:", error);
      navigate("/login");
    }
  }, [navigate]);

  
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const addProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setProducts([...products, data.product]); 
        setForm({ name: "", price: "", description: "", category: "", stock: "", images: "" });
        alert("Product Added Successfully!");
      } else {
        alert(data.message || "Error Adding Product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="pt-20 p-8 min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Admin Panel
      </h1>

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Add New Product</h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={addProduct}>
          <input type="text" name="name" placeholder="Product Name" className="border p-2 rounded bg-gray-800 text-white" value={form.name} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price" className="border p-2 rounded bg-gray-800 text-white" value={form.price} onChange={handleChange} required />
          <input type="text" name="category" placeholder="Category" className="border p-2 rounded bg-gray-800 text-white" value={form.category} onChange={handleChange} required />
          <input type="number" name="stock" placeholder="Stock" className="border p-2 rounded bg-gray-800 text-white" value={form.stock} onChange={handleChange} required />
          <input type="text" name="images" placeholder="Image URL" className="border p-2 rounded bg-gray-800 text-white" value={form.images} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" className="border p-2 rounded col-span-2 bg-gray-800 text-white" value={form.description} onChange={handleChange} required />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded col-span-2 hover:bg-green-600 transition">
            Add Product
          </button>
        </form>
      </div>

      <h2 className="text-3xl font-semibold text-center mt-12 text-pink-400">Manage Products</h2>
      <div className="overflow-x-auto mt-6">
        <table className="w-full bg-white/10 backdrop-blur-lg shadow-md rounded-xl">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b border-gray-700 hover:bg-gray-900 transition">
                <td className="p-3">
                  <img src={product.images} alt={product.name} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="p-3">{product.name}</td>
                <td className="p-3 text-green-400">${product.price}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">
                  <button className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600 transition" onClick={() => deleteProduct(product._id)}>
                    Delete
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
