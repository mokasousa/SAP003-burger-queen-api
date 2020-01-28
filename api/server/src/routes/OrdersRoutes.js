import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const router = Router();

// /api/orders/
router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);

// /api/orders/:orderId // : -> express function 
router.get('/:id', OrderController.getOrder);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder)

export default router;