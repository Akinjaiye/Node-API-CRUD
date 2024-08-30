const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js")
const { getProducts,getAProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js")

router.get("/", getProducts);

router.get("/:id", getAProduct);

router.post("/", createProduct);
  
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

  module.exports = router;