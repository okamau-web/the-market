const express = require("express");
const router = express.Router();

const Product = require("../models/product");

//get all
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//get one
router.get("/:id", getProduct, (req, res) => {
  res.json(res.product);
});

//create one
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name, 
    id: req.body.id,
    description: req.body.description,
    imageUrl:req.body.imageUrl,
    price:req.body.price,
    quantity:req.body.quantity
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update one
router.patch("/:id", getProduct, async (req, res) => {
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.id != null) {
    res.product.id = req.body.id;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.imageUrl != null) {
    res.product.imageUrl = req.body.imageUrl;
  }
  if (req.body.quantity != null) {
    res.product.quantity = req.body.quantity;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//delete one
router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Deleted product successfuly" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;

  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "cannot find product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
}

module.exports = router;
