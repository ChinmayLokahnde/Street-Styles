const express = require("express");
const Product = require("../models/products");

const router = express.Router();


router.post("/add", async (req, res) => {
  try {
    const { name, price, description, category, stock, images } = req.body; 

    if (!name || !price || !description || !category || !stock || !images) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      name,
      price: Number(price), 
      description,
      category,
      stock: Number(stock),
      images,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully!", product });
  } catch (error) {
    console.error(" Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(" Error fetching products:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
