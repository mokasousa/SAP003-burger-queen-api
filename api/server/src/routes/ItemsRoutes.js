import { Router } from 'express';
import ItemController from '../controllers/items.controller';

const router = Router();

// /api/items/
router.post('/', ItemController.createItem);
router.get('/', ItemController.getAllItems);

// /api/items/:id/
router.get('/:id', ItemController.getItem);
router.put('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);

// /api/items/order/:orderId
router.get('/order/:orderId', ItemController.getItemsByOrder)

export default router;