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

// GET product by ID
router.get("/:id", async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    res.json(product);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

});

// POST product
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const imagePaths = req.files
      ? req.files.map(
          (file) => `/uploads/${file.filename}`
        )
      : [];

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      colors: req.body.colors,
      images: imagePaths,
    });

    await product.save();

    res.json(product);
  } catch (err) {
    console.log(err); // 👈 مهم جدًا
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;