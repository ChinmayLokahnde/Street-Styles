const Product = require("../models/products.js");


const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};


const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

const addProduct = async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debug: Log received data

    const { name, price, description, category, stock, images } = req.body;

    if (!name || !price || !description || !category || !stock || !images) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Ensure price & stock are numbers
    const newProduct = new Product({
      name,
      price: Number(price),
      description,
      category,
      stock: Number(stock),
      images,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });

  } catch (error) {
    console.error("Error adding product:", error); // Log error in backend console
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};


const deleteProduct = async (req, res) => {
    try {
      console.log("Product ID received:", req.params.id); 
  
      const product = await Product.findById(req.params.id);
      if (!product) {
        console.log("Product not found in database"); 
        return res.status(404).json({ message: "Product not found" });
      }
  
      await product.deleteOne();
      console.log("Product deleted successfully");
      res.json({ message: "Product deleted successfully" });
  
    } catch (error) {
      console.error("Error deleting product:", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  module.exports = { deleteProduct };

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
