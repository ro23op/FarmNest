// server/routes/product.route.js
import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller.js';
import { checkAuth } from '../middleware/checkAuth.js'; // optional

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

router.post('/', checkAuth, createProduct);
router.put('/:id', checkAuth, updateProduct);
router.delete('/:id', checkAuth, deleteProduct);

export default router;
