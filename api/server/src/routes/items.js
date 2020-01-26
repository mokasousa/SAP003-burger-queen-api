import { Router } from 'express';
import { createItem, getItems, getOneItem, deleteOneItem, updateOneItem, getItemsByOrder } from '../controllers/items.controller';

const router = Router();

// /api/items/
router.post('/', createItem);
router.get('/', getItems);

// /api/items/:id/
router.delete('/:id', deleteOneItem);
router.put('/:id', updateOneItem);//???retirar esse???
router.get('/:id', getOneItem);//???retirar esse???


// /api/items/order/:order_id
router.get('/order/:order_id', getItemsByOrder)

export default router;