import { Router } from 'express';
import { createOrder, getOrders, getOneOrder, deleteOneOrder, updateOneOrder } from '../controllers/orders.controller';

const router = Router();

// /api/orders/
router.post('/', createOrder);
router.get('/', getOrders);

// /api/orders/:orderId // : -> express function 
router.get('/:id', getOneOrder);
router.delete('/:id', deleteOneOrder)
router.put('/:id', updateOneOrder)

export default router;