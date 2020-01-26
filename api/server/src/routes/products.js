import { Router } from 'express';
import { createProduct, getProducts, getOneProduct, deleteOneProduct, updateOneProduct } from '../controllers/products.controller';

const router = Router();

// /api/products/
router.post('/', createProduct);
router.get('/', getProducts);

// /api/products/:productId
router.get('/:id', getOneProduct);
router.delete('/:id', deleteOneProduct)
router.put('/:id', updateOneProduct)

export default router;