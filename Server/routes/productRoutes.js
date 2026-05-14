const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); 
const Product = require("../models/Product");

// GET products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;