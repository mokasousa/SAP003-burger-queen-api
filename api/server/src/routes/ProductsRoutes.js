import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

// /api/products/
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);

// /api/products/:productId
router.get('/:id', ProductController.getProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;