import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const router = Router();

// /api/orders/
router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);

// /api/orders/:orderId
router.get('/:id', OrderController.getOrder);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

// /api/orders/table/:tableid
router.get('/table/:TableId', OrderController.getOrdersByTable)

export default router;