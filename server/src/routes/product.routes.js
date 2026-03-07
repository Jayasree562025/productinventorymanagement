const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller'); // .js vendam
const { protect } = require('../middlewares/auth.middleware');

const productRouter = express.Router();

productRouter.post("/", protect, createProduct);
productRouter.get("/", protect, getProducts);
productRouter.get("/:id", protect, getProductById);
productRouter.put("/:id", protect, updateProduct);
productRouter.delete("/:id", protect, deleteProduct);

module.exports = productRouter;